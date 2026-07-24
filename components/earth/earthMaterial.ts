import * as THREE from "three";

export type EarthUniforms = {
  uSunDirection: { value: THREE.Vector3 };
  dimFactor: { value: number };
  satelliteBlend: { value: number };
};

/**
 * Patches Three.js's standard PBR fragment/vertex shader to blend in night-lights
 * on the side facing away from the sun, and to support a "dim the globe" and
 * "push toward a satellite-photo look" uniform driven by the camera timeline.
 * Normal/metalness mapping stays on Three's built-in pipeline (correct TBN handling)
 * — only the day/night mix and two grading uniforms are injected.
 */
export function createEarthMaterial(textures: {
  day: THREE.Texture;
  night: THREE.Texture;
  normal: THREE.Texture;
  specular: THREE.Texture;
}) {
  const material = new THREE.MeshStandardMaterial({
    map: textures.day,
    normalMap: textures.normal,
    metalnessMap: textures.specular,
    metalness: 0.35,
    roughness: 0.82,
  });

  let uniforms: EarthUniforms | null = null;

  material.onBeforeCompile = (shader) => {
    shader.uniforms.nightMap = { value: textures.night };
    shader.uniforms.uSunDirection = { value: new THREE.Vector3(1, 0, 0) };
    shader.uniforms.dimFactor = { value: 0 };
    shader.uniforms.satelliteBlend = { value: 0 };

    shader.vertexShader =
      `varying vec3 vWorldNormal;\n` + shader.vertexShader;
    shader.vertexShader = shader.vertexShader.replace(
      "#include <beginnormal_vertex>",
      `#include <beginnormal_vertex>
       vWorldNormal = normalize(mat3(modelMatrix) * objectNormal);`
    );

    shader.fragmentShader =
      `varying vec3 vWorldNormal;
       uniform sampler2D nightMap;
       uniform vec3 uSunDirection;
       uniform float dimFactor;
       uniform float satelliteBlend;\n` + shader.fragmentShader;

    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <map_fragment>",
      `#include <map_fragment>
       float sunFactor = clamp(dot(vWorldNormal, normalize(uSunDirection)) * 3.0 + 0.2, 0.0, 1.0);
       vec3 nightColor = texture2D(nightMap, vMapUv).rgb;
       diffuseColor.rgb = mix(nightColor * 1.8, diffuseColor.rgb, sunFactor);
       diffuseColor.rgb *= mix(1.0, 0.5, dimFactor);
       diffuseColor.rgb = mix(diffuseColor.rgb, pow(diffuseColor.rgb, vec3(0.78)) * vec3(1.06, 1.03, 0.98), satelliteBlend);`
    );

    uniforms = shader.uniforms as unknown as EarthUniforms;
  };

  // Distinct cache key since the compiled program differs from a stock MeshStandardMaterial.
  material.customProgramCacheKey = () => "hopewell-earth-day-night";

  return {
    material,
    getUniforms: () => uniforms,
  };
}
