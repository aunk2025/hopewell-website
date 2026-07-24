"use client";

import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { Float, OrbitControls, Stars } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState, use, Suspense } from "react";
import * as THREE from "three";
import { TextureLoader } from "three";
import gsap from "gsap";
import { latLngToVec3, type GeoFeatureCollection } from "@/lib/geo";
import { createEarthMaterial } from "@/components/earth/earthMaterial";
import RegionHighlight, { type RegionHandles } from "@/components/earth/RegionHighlight";

const EARTH_R = 1.52;

const INDIA = { lat: 20.5937, lng: 78.9629 };
const JHARKHAND = { lat: 23.6102, lng: 85.2799 };
const RANCHI = { lat: 23.3441, lng: 85.3096 };

/*
 * latLngToVec3's equirectangular parameterization puts longitude -90°
 * (not 0°) at the point facing +Z (the camera) when unrotated, so the
 * Y-rotation needed to bring a given longitude to face the camera needs
 * a matching -90° offset. Without it, every target ends up centering
 * (lng - 90°) instead of lng — e.g. India (78.96°E) would center on
 * West Africa (-11°) rather than India itself.
 */
function rotationTarget(lat: number, lng: number) {
  return { y: -(lng * Math.PI) / 180 - Math.PI / 2, x: (lat * Math.PI) / 180 };
}
const ROT_INDIA = rotationTarget(INDIA.lat, INDIA.lng);
const ROT_JK = rotationTarget(JHARKHAND.lat, JHARKHAND.lng);
const ROT_RANCHI = rotationTarget(RANCHI.lat, RANCHI.lng);

/* Camera distance (z) + field-of-view per stage — dual Z+FOV telephoto effect */
const CAM = {
  space: { z: 6.2, fov: 42 },
  asia: { z: 5.3, fov: 33 },
  india: { z: 4.5, fov: 26 },
  jharkhand: { z: 3.2, fov: 16 },
  ranchi: { z: 2.5, fov: 10 },
  satellite: { z: 2.15, fov: 7 },
};

const SUN_DIRECTION = new THREE.Vector3(1, 0.35, 0.6).normalize();

const geoCache = new Map<string, Promise<GeoFeatureCollection>>();
function loadGeoJSON(url: string): Promise<GeoFeatureCollection> {
  if (!geoCache.has(url)) geoCache.set(url, fetch(url).then((r) => r.json()));
  return geoCache.get(url)!;
}

/* ─── Camera + globe timeline (GSAP) ───────────────────────────────────
 * Stage 1 Space (0-2s)      – Earth from space, stars, slow rotation
 * Stage 2 Asia (2-4s)       – camera flies toward Asia, globe turns to face it
 * Stage 3 India (4-6s)      – zoom in, India glows cyan, rest of globe dims
 * Stage 4 Jharkhand (6-8s)  – India rotates further, Jharkhand boundary glows
 * Stage 5 Ranchi (8-10s)    – tight zoom, Jharkhand fills view, Ranchi pin appears
 * Stage 6 Satellite (10-12s)– last zoom, grading shifts toward a satellite-photo look
 * Hold (12-15s) → Reset (15-18s) → brief pause → loop
 * ──────────────────────────────────────────────────────────────────── */
function useOrbTimeline(opts: {
  camera: THREE.PerspectiveCamera;
  globeGroup: THREE.Group;
  india: RegionHandles | null;
  jharkhand: RegionHandles | null;
  pin: THREE.Group | null;
  shaderState: { dim: number; sat: number };
  setLabel: (l: string) => void;
}) {
  useEffect(() => {
    const { camera, globeGroup, india, jharkhand, pin, shaderState, setLabel } = opts;
    if (!india || !jharkhand || !pin) return;

    camera.position.set(0, 0, CAM.space.z);
    camera.fov = CAM.space.fov;
    camera.updateProjectionMatrix();
    globeGroup.rotation.set(0, 0, 0);
    pin.scale.setScalar(0);

    const applyFov = () => camera.updateProjectionMatrix();

    const tl = gsap.timeline({ repeat: -1, defaults: { ease: "power2.inOut" } });

    tl.call(() => setLabel(""), [], 0)
      // Stage 1 — space
      .to(camera, { fov: CAM.space.fov, duration: 2, onUpdate: applyFov }, 0)
      .to(camera.position, { z: CAM.space.z, duration: 2 }, 0)

      // Stage 2 — fly toward Asia
      .call(() => setLabel("Asia"), [], 2)
      .to(camera, { fov: CAM.asia.fov, duration: 2, onUpdate: applyFov }, 2)
      .to(camera.position, { z: CAM.asia.z, duration: 2 }, 2)
      .to(globeGroup.rotation, { y: ROT_INDIA.y, x: ROT_INDIA.x, duration: 2 }, 2)

      // Stage 3 — zoom to India, highlight + dim rest of globe
      .call(() => setLabel("India"), [], 4)
      .to(camera, { fov: CAM.india.fov, duration: 2, onUpdate: applyFov }, 4)
      .to(camera.position, { z: CAM.india.z, duration: 2 }, 4)
      .to(shaderState, { dim: 0.4, duration: 1.6 }, 4.2)
      .to(india.fillMaterial, { opacity: 0.55, duration: 1.2 }, 4.3)
      .to(india.outlineMaterial, { opacity: 0.9, duration: 1.2 }, 4.3)

      // Stage 4 — India rotates, camera moves toward Jharkhand, state glows
      .call(() => setLabel("Jharkhand"), [], 6)
      .to(camera, { fov: CAM.jharkhand.fov, duration: 2, onUpdate: applyFov }, 6)
      .to(camera.position, { z: CAM.jharkhand.z, duration: 2 }, 6)
      .to(globeGroup.rotation, { y: ROT_JK.y, x: ROT_JK.x, duration: 2 }, 6)
      .to(india.fillMaterial, { opacity: 0.12, duration: 1 }, 6)
      .to(india.outlineMaterial, { opacity: 0.25, duration: 1 }, 6)
      .to(jharkhand.fillMaterial, { opacity: 0.75, duration: 1.4 }, 6.4)
      .to(jharkhand.outlineMaterial, { opacity: 1, duration: 1.4 }, 6.4)

      // Stage 5 — zoom further, Jharkhand fills view, Ranchi marker appears
      .call(() => setLabel("Ranchi"), [], 8)
      .to(camera, { fov: CAM.ranchi.fov, duration: 2, onUpdate: applyFov }, 8)
      .to(camera.position, { z: CAM.ranchi.z, duration: 2 }, 8)
      .to(globeGroup.rotation, { y: ROT_RANCHI.y, x: ROT_RANCHI.x, duration: 2 }, 8)
      .to(pin.scale, { x: 1, y: 1, z: 1, duration: 0.9, ease: "back.out(2)" }, 9)

      // Stage 6 — last zoom, morph toward a satellite-photo grade
      .call(() => setLabel("Ranchi, Jharkhand"), [], 10.4)
      .to(camera, { fov: CAM.satellite.fov, duration: 2, onUpdate: applyFov }, 10)
      .to(camera.position, { z: CAM.satellite.z, duration: 2 }, 10)
      .to(shaderState, { sat: 1, duration: 2 }, 10)

      // Hold at Hopewell/Ranchi — 12 to 15s (nothing new, pin pulses via useFrame)

      // Reset — zoom out, rotate back to neutral, fade everything out
      .call(() => setLabel(""), [], 15)
      .to(camera, { fov: CAM.space.fov, duration: 3, onUpdate: applyFov }, 15)
      .to(camera.position, { z: CAM.space.z, duration: 3 }, 15)
      .to(globeGroup.rotation, { y: 0, x: 0, duration: 3 }, 15)
      .to(shaderState, { sat: 0, dim: 0, duration: 1.6 }, 15)
      .to(
        [india.fillMaterial, jharkhand.fillMaterial],
        { opacity: 0, duration: 1.2 },
        15
      )
      .to(
        [india.outlineMaterial, jharkhand.outlineMaterial],
        { opacity: 0, duration: 1.2 },
        15
      )
      .to(pin.scale, { x: 0, y: 0, z: 0, duration: 1, ease: "power2.in" }, 15)

      // brief pause before the loop restarts
      .to({}, { duration: 1.5 }, 18.5);

    return () => {
      tl.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opts.india, opts.jharkhand, opts.pin]);
}

/* ─── Ranchi / Hopewell marker ─── */
function RanchiMarker({ onReady }: { onReady: (group: THREE.Group) => void }) {
  const groupRef = useRef<THREE.Group>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const pos = latLngToVec3(RANCHI.lat, RANCHI.lng, EARTH_R + 0.004);

  useEffect(() => {
    if (groupRef.current) onReady(groupRef.current);
  }, [onReady]);

  useFrame((state) => {
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1 + 0.4 * Math.sin(state.clock.elapsedTime * 3));
    }
  });

  /* EARTH_R (1.52 units) represents Earth's real radius (~6371km), so 1 unit
     ≈ 4191km. Sized so the dot reads as Ranchi city (~4km) rather than a
     state-scale blob at the tight final-zoom stage. */
  return (
    <group ref={groupRef} position={pos} scale={0}>
      <mesh>
        <sphereGeometry args={[0.001, 12, 12]} />
        <meshBasicMaterial color="#ff3355" />
      </mesh>
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.0022, 12, 12]} />
        <meshBasicMaterial color="#ff3355" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

/* ─── Globe: textured Earth + clouds + atmosphere + highlights + rings ─── */
function Scene({ setLabel }: { setLabel: (l: string) => void }) {
  const { camera } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  const [dayTex, nightTex, normalTex, specularTex, cloudsTex] = useLoader(TextureLoader, [
    "/textures/earth/day_8k.jpg",
    "/textures/earth/night_8k.jpg",
    "/textures/earth/normal_8k.jpg",
    "/textures/earth/specular_8k.jpg",
    "/textures/earth/clouds_8k.jpg",
  ]);
  dayTex.colorSpace = THREE.SRGBColorSpace;
  nightTex.colorSpace = THREE.SRGBColorSpace;

  const indiaGeo = use(loadGeoJSON("/data/india.geojson"));
  const jharkhandGeo = use(loadGeoJSON("/data/jharkhand.geojson"));

  const { material: earthMaterial, getUniforms } = useMemo(
    () =>
      createEarthMaterial({
        day: dayTex,
        night: nightTex,
        normal: normalTex,
        specular: specularTex,
      }),
    [dayTex, nightTex, normalTex, specularTex]
  );

  const [india, setIndia] = useState<RegionHandles | null>(null);
  const [jharkhand, setJharkhand] = useState<RegionHandles | null>(null);
  const [pin, setPin] = useState<THREE.Group | null>(null);
  const shaderState = useRef({ dim: 0, sat: 0 }).current;

  useOrbTimeline({
    camera: camera as THREE.PerspectiveCamera,
    globeGroup: groupRef.current as THREE.Group,
    india,
    jharkhand,
    pin,
    shaderState,
    setLabel,
  });

  useFrame((_, delta) => {
    const u = getUniforms();
    if (u) {
      u.dimFactor.value = shaderState.dim;
      u.satelliteBlend.value = shaderState.sat;
      u.uSunDirection.value.copy(SUN_DIRECTION);
    }
    if (cloudsRef.current) cloudsRef.current.rotation.y += delta * 0.03;
    if (ringRef.current) ringRef.current.rotation.z -= delta * 0.15;
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.1} rotationIntensity={0.08} floatIntensity={0.35}>
        {/* Earth */}
        <mesh>
          <sphereGeometry args={[EARTH_R, 96, 96]} />
          <primitive object={earthMaterial} attach="material" />
        </mesh>

        {/* Clouds */}
        <mesh ref={cloudsRef}>
          <sphereGeometry args={[EARTH_R * 1.008, 64, 64]} />
          <meshStandardMaterial
            map={cloudsTex}
            alphaMap={cloudsTex}
            transparent
            opacity={0.55}
            depthWrite={false}
          />
        </mesh>

        {/* Atmosphere halo */}
        <mesh>
          <sphereGeometry args={[EARTH_R * 1.1, 32, 32]} />
          <meshBasicMaterial color="#57e6e6" transparent opacity={0.06} side={THREE.BackSide} />
        </mesh>

        {/* Orbital rings (decorative, matches site's futuristic aesthetic) */}
        <mesh ref={ringRef} rotation={[1.1, 0.3, 0]}>
          <torusGeometry args={[2.05, 0.016, 12, 160]} />
          <meshBasicMaterial color="#0ca8ad" transparent opacity={0.55} />
        </mesh>
        <mesh rotation={[0.25, 1.2, 0.2]}>
          <torusGeometry args={[2.28, 0.008, 10, 160]} />
          <meshBasicMaterial color="#2ecbd0" transparent opacity={0.3} />
        </mesh>

        <RegionHighlight geojson={indiaGeo} radius={EARTH_R + 0.006} color="#57e6e6" onReady={setIndia} />
        <RegionHighlight geojson={jharkhandGeo} radius={EARTH_R + 0.012} color="#8ef7ea" onReady={setJharkhand} />
        <RanchiMarker onReady={setPin} />
      </Float>
    </group>
  );
}

/* Wireframe placeholder while textures/geo data download */
function GlobeFallback() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, d) => {
    if (ref.current) ref.current.rotation.y += d * 0.12;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[EARTH_R, 4]} />
      <meshStandardMaterial color="#083242" wireframe transparent opacity={0.28} />
    </mesh>
  );
}

/* ──────────────────────────── Export ──────────────────────────────── */
export default function HeroOrb() {
  const [label, setLabel] = useState("");

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative rounded-full overflow-hidden" style={{ height: "100%", aspectRatio: "1 / 1" }}>
        {label && (
          <div
            key={label}
            style={{
              position: "absolute",
              top: "20px",
              left: "50%",
              zIndex: 10,
              background: "rgba(6,24,34,.78)",
              border: "1px solid rgba(87,230,230,.42)",
              backdropFilter: "blur(14px)",
              color: "#57e6e6",
              fontSize: ".7rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              borderRadius: "999px",
              padding: "6px 16px",
              animation: "globeLabel .4s ease forwards",
            }}
          >
            📍 {label}
          </div>
        )}

        <Canvas
          camera={{ position: [0, 0, CAM.space.z], fov: CAM.space.fov }}
          dpr={[1, 1.5]}
          gl={{ alpha: true }}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        >
          <ambientLight intensity={1.3} />
          <directionalLight
            position={[SUN_DIRECTION.x * 5, SUN_DIRECTION.y * 5, SUN_DIRECTION.z * 5]}
            intensity={2.4}
            color="#ffffff"
          />
          <directionalLight position={[-5, 2, -2]} intensity={0.5} color="#b9fff4" />
          <pointLight position={[-4, -2, 2]} intensity={12} color="#58eee7" />

          <Stars radius={90} depth={40} count={3000} factor={2.2} saturation={0} fade speed={0.4} />

          <Suspense fallback={<GlobeFallback />}>
            <Scene setLabel={setLabel} />
          </Suspense>

          <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
        </Canvas>

        <style>{`
          @keyframes globeLabel {
            from { opacity: 0; transform: translate(-50%, 8px); }
            to   { opacity: 1; transform: translate(-50%, 0);   }
          }
        `}</style>
      </div>
    </div>
  );
}
