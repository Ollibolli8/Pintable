import type * as THREE from "three";

/**
 * Gets a scene's shader programs compiled before their first draw, so nothing stalls a frame on compiling (three.js
 * compiles a material on its first draw). Where the browser compiles in parallel (KHR_parallel_shader_compile) that
 * happens in the background; elsewhere it happens now, while the page is loading. The promise says when they are ready
 * (it never fails: a program that didn't compile compiles on first use instead).
 */
export function warmUp(renderer: THREE.WebGLRenderer, scene: THREE.Object3D, camera: THREE.Camera, target?: THREE.Scene): Promise<void> {
  try {
    if (renderer.extensions.has("KHR_parallel_shader_compile")) return renderer.compileAsync(scene, camera, target ?? null).then(() => touch(renderer), () => {});
    renderer.compile(scene, camera, target ?? null); touch(renderer);
  } catch { /* it compiles on first use instead */ }
  return Promise.resolve();
}

/** Runs each compiled program's first use (the driver's status check, the uniform lookup) now, not at its first draw. */
function touch(renderer: THREE.WebGLRenderer) {
  for (const p of renderer.info.programs ?? []) (p as unknown as { getUniforms?: () => unknown }).getUniforms?.();
}
