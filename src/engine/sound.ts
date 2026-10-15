/**
 * The opening's sound, synthesized: nothing is sampled or looped from a recording. Each pin that moves rings as a short
 * tick of steel on steel (a few inharmonic modes of a small rod, struck), so a press clicks under the finger, a sweep
 * across the roofs runs as a soft metal rain, the city rising at the start is a downpour, and a landmark standing up
 * out of the table is a shower of its own. A hand drawn through the harbour hisses and slops.
 *
 * The scene says each frame how many pins moved a second and how fast the water was stirred (pin-table.ts); the ticks
 * are scheduled a moment ahead at random times inside the frame, each a grain from a small bank, pitched and panned a
 * little apart, so no two sound alike. Past a few hundred a second the single ticks give way to a bed of filtered
 * noise. Off until turned on (a browser starts sound only from a click), quiet while the tab is hidden.
 */

export type PinSound = {
  readonly on: boolean;
  set: (on: boolean) => void;
  /** This frame: land pins moved a second, the water stirred (pins a second), the place left to right (-1 to 1). */
  feed: (pins: number, water: number, pan: number, dt: number) => void;
  /** A shower of `n` ticks over `seconds` (a landmark lifting, the table rising). */
  burst: (n: number, seconds: number, pan?: number) => void;
  dispose: () => void;
};

const GRAINS = 24, MAX_TICKS = 260;             // the bank; single ticks a second at most (more: the bed takes over)

export function createPinSound(): PinSound {
  let ctx: AudioContext | null = null, master: GainNode | null = null, on = false, disposed = false;
  let bank: AudioBuffer[] = [];
  let bed: { gain: GainNode; pan: StereoPannerNode } | null = null, wash: { gain: GainNode; pan: StereoPannerNode; filter: BiquadFilterNode } | null = null;
  let owed = 0;                                   // ticks carried over to the next frame (a fraction)
  const showers: { n: number; until: number; pan: number }[] = [];

  /** The ticks: each the strike's click (a millisecond of noise) and three modes of a rod, 2.4 to 5 kHz, dying in 6-30 ms. */
  const grains = (audio: AudioContext) => {
    const rate = audio.sampleRate, out: AudioBuffer[] = [];
    for (let g = 0; g < GRAINS; g++) {
      const len = Math.round(rate * 0.07), b = audio.createBuffer(1, len, rate), d = b.getChannelData(0);
      const f = 2400 + Math.random() * 2600, decay = rate * (0.006 + Math.random() * 0.024);
      const modes = [[f, 1, decay], [f * 2.76, 0.45, decay * 0.55], [f * 5.4, 0.2, decay * 0.3]];
      for (const [fr, amp, dk] of modes) {
        const w = (2 * Math.PI * fr) / rate, ph = Math.random() * 6.283;
        for (let k = 0; k < len; k++) d[k] += amp * Math.exp(-k / dk) * Math.sin(w * k + ph);
      }
      for (let k = 0; k < rate * 0.001; k++) d[k] += (Math.random() * 2 - 1) * 0.8 * (1 - k / (rate * 0.001));
      out.push(b);
    }
    return out;
  };

  const build = (audio: AudioContext) => {
    bank = grains(audio);
    master = audio.createGain();
    master.gain.value = 0;
    const limiter = audio.createDynamicsCompressor();
    limiter.threshold.value = -14; limiter.ratio.value = 5; limiter.attack.value = 0.003; limiter.release.value = 0.2;
    master.connect(limiter).connect(audio.destination);
    // Four seconds of white noise for the bed and the water.
    const white = audio.createBuffer(1, audio.sampleRate * 4, audio.sampleRate), w = white.getChannelData(0);
    for (let i = 0; i < w.length; i++) w[i] = Math.random() * 2 - 1;
    const loop = (type: BiquadFilterType, f: number, q: number) => {
      const src = audio.createBufferSource();
      src.buffer = white; src.loop = true;
      const filter = audio.createBiquadFilter();
      filter.type = type; filter.frequency.value = f; filter.Q.value = q;
      const gain = audio.createGain(), pan = audio.createStereoPanner();
      gain.gain.value = 0;
      src.connect(filter).connect(gain).connect(pan).connect(master!);
      src.start(0, Math.random() * 4);
      return { gain, pan, filter };
    };
    bed = loop("bandpass", 4200, 0.9);            // many pins at once: a hiss of ticks too close to tell apart
    wash = loop("bandpass", 700, 0.7);            // the water
  };

  /** One tick at `t` (s, the context's clock), its loudness and place. */
  const tick = (t: number, level: number, pan: number) => {
    if (!ctx || !master) return;
    const src = ctx.createBufferSource(), g = ctx.createGain(), p = ctx.createStereoPanner();
    src.buffer = bank[Math.floor(Math.random() * bank.length)];
    src.playbackRate.value = 0.82 + Math.random() * 0.4;
    g.gain.value = level * (0.25 + 0.75 * Math.random() ** 2);
    p.pan.value = Math.max(-1, Math.min(1, pan + (Math.random() - 0.5) * 0.5));
    src.connect(g).connect(p).connect(master);
    src.start(t);
  };

  const onVisibility = () => {
    if (!ctx || !on) return;
    if (document.hidden) void ctx.suspend(); else void ctx.resume();
  };
  document.addEventListener("visibilitychange", onVisibility);

  return {
    get on() { return on; },
    set(next) {
      if (disposed || next === on) return;
      on = next;
      if (on) {
        if (!ctx) { ctx = new AudioContext(); build(ctx); }
        void ctx.resume();
        master!.gain.setTargetAtTime(0.8, ctx.currentTime, 0.15);
      } else if (ctx && master) {
        master.gain.setTargetAtTime(0, ctx.currentTime, 0.08);
        const c = ctx;
        setTimeout(() => { if (!on) void c.suspend(); }, 600);
      }
    },
    feed(pins, water, pan, dt) {
      if (!on || !ctx || ctx.state !== "running" || !bed || !wash) return;
      const now = ctx.currentTime, span = Math.min(dt, 0.1);
      // The showers under way add their share of this frame.
      let rain = Math.max(0, pins);
      for (let i = showers.length - 1; i >= 0; i--) {
        const s = showers[i];
        if (now >= s.until) { showers.splice(i, 1); continue; }
        rain += s.n;
        pan = pan * 0.5 + s.pan * 0.5;
      }
      // Single ticks up to MAX_TICKS a second, at random through the frame (a little ahead, so none are late).
      owed += Math.min(rain, MAX_TICKS) * span;
      const level = 0.5 / Math.sqrt(1 + rain / 40);   // (many at once: each quieter, the whole a little louder)
      for (; owed >= 1; owed--) tick(now + 0.03 + Math.random() * span, level, pan);
      // Past that, the bed; and the water's wash, brighter the faster it is stirred.
      const t = now + 0.01;
      bed.gain.gain.cancelScheduledValues(t);
      bed.gain.gain.setTargetAtTime(Math.min(0.5, Math.max(0, rain - MAX_TICKS * 0.6) / 1500), t, 0.05);
      bed.gain.gain.setTargetAtTime(0, t + 0.15, 0.1);        // (it fades if no more frames come)
      bed.pan.pan.setTargetAtTime(pan * 0.7, t, 0.05);
      const wet = Math.min(1, water / 30);
      wash.gain.gain.cancelScheduledValues(t);
      wash.gain.gain.setTargetAtTime(0.45 * wet ** 0.8, t, 0.06);
      wash.gain.gain.setTargetAtTime(0, t + 0.2, 0.15);
      wash.filter.frequency.setTargetAtTime(500 + 1600 * wet, t, 0.08);
      wash.pan.pan.setTargetAtTime(pan * 0.7, t, 0.05);
    },
    burst(n, seconds, pan = 0) {
      if (!on || !ctx) return;
      showers.push({ n: n / Math.max(0.05, seconds), until: ctx.currentTime + seconds, pan });
    },
    dispose() {
      disposed = true;
      on = false;
      document.removeEventListener("visibilitychange", onVisibility);
      void ctx?.close();
      ctx = null;
    },
  };
}
