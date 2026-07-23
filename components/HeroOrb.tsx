"use client";

import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { useRef, Suspense, useState } from "react";
import * as THREE from "three";
import { TextureLoader } from "three";

/* ── Ranchi, Jharkhand ── */
const RANCHI_LAT = 23.3441;
const RANCHI_LNG = 85.3096;

function latLngToVec3(lat: number, lng: number, r = 1.52): THREE.Vector3 {
  const phi   = (90 - lat)  * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
     r * Math.cos(phi),
     r * Math.sin(phi) * Math.sin(theta)
  );
}

/* ─────────── Animation cycle timing (seconds) ─────────── */
/*
 *  0 ──── 5.5  : ORIENT   – globe rotates to face India
 *  5.5 ── 8.5  : INDIA    – camera zooms to India view
 *  8.5 ── 11.5 : JHARKHAND – camera zooms to Jharkhand
 * 11.5 ── 14.0 : RANCHI   – camera zooms to Ranchi (pin focus)
 * 14.0 ── 44.0 : HOLD     – 30 s halt at Ranchi
 * 44.0 ── 49.0 : RESET    – zoom out, globe rotates back
 * 49.0 ── 64.0 : FREE     – normal orbit (15 s)  → then loop
 */
const T_ORIENT = 5.5;
const T_INDIA  = 8.5;
const T_JK     = 11.5;
const T_RANCHI = 14.0;
const T_HOLD   = 44.0;   // 14.0 + 30 s
const T_RESET  = 49.0;   // 44.0 + 5 s zoom-out
const T_CYCLE  = 64.0;   // 49.0 + 15 s free orbit

/* ─── Camera distances (z) and field-of-view at each zoom stage ───
 *
 * The dual Z+FOV approach creates the Google Earth telephoto effect:
 *  – Z moves camera closer so the globe gets nearer
 *  – Narrowing FOV makes the visible portion of the globe smaller
 *  – Combined: a specific region (India → JK → Ranchi) fills the circle
 *
 * Visual math: visible half-height at globe center = Z × tan(FOV/2)
 *   World  : 6.2 × tan(21°) = 2.38  → whole globe (r=1.52) fits with space
 *   India  : 4.5 × tan(13°) = 1.04  → globe edge beyond viewport, India fills
 *   JK     : 3.2 × tan(8°)  = 0.45  → east-India/Jharkhand region fills view
 *   Ranchi : 2.5 × tan(5°)  = 0.22  → Ranchi city-scale fills the circle
 */
const Z_FAR    = 6.2;  const FOV_FAR    = 42;
const Z_INDIA  = 4.5;  const FOV_INDIA  = 26;
const Z_JK     = 3.2;  const FOV_JK     = 16;
const Z_RANCHI = 2.5;  const FOV_RANCHI = 10;

/* Globe orientation targets (Ranchi-facing) */
const TARGET_Y = -(RANCHI_LNG * Math.PI) / 180;
const TARGET_X =  (RANCHI_LAT * Math.PI) / 180 * 0.38;

function easeInOut(t: number) {
  t = Math.max(0, Math.min(1, t));
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

/* Map elapsed→stage index */
function getStage(t: number) {
  if (t < T_ORIENT) return 0;
  if (t < T_INDIA)  return 1;
  if (t < T_JK)     return 2;
  if (t < T_RANCHI) return 3;
  if (t < T_HOLD)   return 4;
  if (t < T_RESET)  return 5;
  return 6;
}

const STAGE_LABELS = [
  "",                   // 0 ORIENT
  "India",              // 1
  "Jharkhand",          // 2
  "Ranchi, Jharkhand",  // 3
  "Ranchi, Jharkhand",  // 4 HOLD
  "",                   // 5 RESET
  "",                   // 6 FREE
];

/* ─── Camera controller ─── */
function CameraZoom({ setLabel }: { setLabel: (l: string) => void }) {
  const { camera } = useThree();
  const elapsed   = useRef(0);
  const lastStage = useRef(-1);

  useFrame((_, delta) => {
    elapsed.current += delta;
    const t = elapsed.current % T_CYCLE;

    /* Stage-change → update label */
    const stage = getStage(t);
    if (stage !== lastStage.current) {
      lastStage.current = stage;
      setLabel(STAGE_LABELS[stage]);
    }

    /*
     * Animate BOTH camera z-distance AND field-of-view.
     * Narrowing FOV while moving closer = telephoto zoom-in.
     * Widening FOV while pulling back  = zoom-out reset.
     */
    let z = Z_FAR, cy = 0, fov = FOV_FAR;
    const cam = camera as THREE.PerspectiveCamera;

    if (t < T_ORIENT) {
      z = Z_FAR; cy = 0; fov = FOV_FAR;

    } else if (t < T_INDIA) {
      const p = easeInOut((t - T_ORIENT) / (T_INDIA - T_ORIENT));
      z   = THREE.MathUtils.lerp(Z_FAR,    Z_INDIA,   p);
      cy  = THREE.MathUtils.lerp(0,         0.12,      p);
      fov = THREE.MathUtils.lerp(FOV_FAR,  FOV_INDIA, p);

    } else if (t < T_JK) {
      const p = easeInOut((t - T_INDIA) / (T_JK - T_INDIA));
      z   = THREE.MathUtils.lerp(Z_INDIA,  Z_JK,   p);
      cy  = THREE.MathUtils.lerp(0.12,     0.22,   p);
      fov = THREE.MathUtils.lerp(FOV_INDIA, FOV_JK, p);

    } else if (t < T_RANCHI) {
      const p = easeInOut((t - T_JK) / (T_RANCHI - T_JK));
      z   = THREE.MathUtils.lerp(Z_JK,    Z_RANCHI,   p);
      cy  = THREE.MathUtils.lerp(0.22,    0.30,        p);
      fov = THREE.MathUtils.lerp(FOV_JK,  FOV_RANCHI,  p);

    } else if (t < T_HOLD) {
      z = Z_RANCHI; cy = 0.30; fov = FOV_RANCHI;  // HOLD

    } else if (t < T_RESET) {
      const p = easeInOut((t - T_HOLD) / (T_RESET - T_HOLD));
      z   = THREE.MathUtils.lerp(Z_RANCHI, Z_FAR,    p);
      cy  = THREE.MathUtils.lerp(0.30,     0,         p);
      fov = THREE.MathUtils.lerp(FOV_RANCHI, FOV_FAR, p);

    } else {
      z = Z_FAR; cy = 0; fov = FOV_FAR;            // FREE orbit
    }

    camera.position.z = z;
    camera.position.y = cy;
    cam.fov = fov;
    cam.updateProjectionMatrix();
    camera.lookAt(0, 0, 0);
  });

  return null;
}

/* ─── Earth globe mesh ─── */
function GlobeCore() {
  const groupRef      = useRef<THREE.Group>(null);
  const ringRef       = useRef<THREE.Mesh>(null);
  const pinSolidRef   = useRef<THREE.Mesh>(null);
  const pinGlowRef    = useRef<THREE.Mesh>(null);

  /* Continuity across cycle restarts */
  const elapsed       = useRef(0);
  const lastCycleT    = useRef(0);
  const cycleStartRotY = useRef(0); // globe's y-rotation at each cycle start

  const earthTex = useLoader(
    TextureLoader,
    "https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg"
  );
  earthTex.colorSpace = THREE.SRGBColorSpace;

  const specTex = useLoader(
    TextureLoader,
    "https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-water.png"
  );

  const pinPos  = latLngToVec3(RANCHI_LAT, RANCHI_LNG, 1.555);
  const glowPos = latLngToVec3(RANCHI_LAT, RANCHI_LNG, 1.545);

  useFrame((state, delta) => {
    elapsed.current += delta;
    const t = elapsed.current % T_CYCLE;

    /* Detect cycle boundary — capture rotation so orient phase starts from it */
    if (t < lastCycleT.current - T_CYCLE / 2) {
      cycleStartRotY.current = groupRef.current?.rotation.y ?? 0;
    }
    lastCycleT.current = t;

    if (!groupRef.current) return;

    /* Globe rotation */
    let ry: number, rx: number;

    if (t < T_ORIENT) {
      /* Smoothly orient from wherever the globe was → face Ranchi */
      const p = easeInOut(t / T_ORIENT);
      ry = THREE.MathUtils.lerp(cycleStartRotY.current, TARGET_Y, p);
      rx = THREE.MathUtils.lerp(0, TARGET_X, p);

    } else if (t < T_HOLD) {
      /* Locked on Ranchi during all zoom stages + hold */
      ry = TARGET_Y;
      rx = TARGET_X;

    } else if (t < T_RESET) {
      /* Smoothly rotate back to neutral */
      const p = easeInOut((t - T_HOLD) / (T_RESET - T_HOLD));
      ry = THREE.MathUtils.lerp(TARGET_Y, 0, p);
      rx = THREE.MathUtils.lerp(TARGET_X, 0, p);

    } else {
      /* Free orbit — computed from start of free phase to avoid accumulation */
      ry = (t - T_RESET) * 0.08;
      rx = 0;
    }

    groupRef.current.rotation.y = ry;
    groupRef.current.rotation.x = rx;

    /* Rings spin always */
    if (ringRef.current) ringRef.current.rotation.z -= delta * 0.15;

    /* Pin: solid dot visible during zoom+hold; glow pulses only during hold */
    const inFocus = t >= T_JK && t < T_HOLD;
    const holding = t >= T_RANCHI && t < T_HOLD;

    if (pinSolidRef.current)  pinSolidRef.current.visible  = inFocus;
    if (pinGlowRef.current) {
      pinGlowRef.current.visible = inFocus;
      if (holding) {
        pinGlowRef.current.scale.setScalar(
          1 + 0.45 * Math.sin(state.clock.elapsedTime * 3.0)
        );
      } else {
        pinGlowRef.current.scale.setScalar(1);
      }
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.2} rotationIntensity={0.10} floatIntensity={0.45}>

        {/* ── Satellite-textured Earth ── */}
        <mesh>
          <sphereGeometry args={[1.52, 72, 72]} />
          <meshStandardMaterial
            map={earthTex}
            roughnessMap={specTex}
            roughness={0.82}
            metalness={0.04}
          />
        </mesh>

        {/* ── Thin glass shimmer shell ── */}
        <mesh>
          <sphereGeometry args={[1.538, 48, 48]} />
          <meshPhysicalMaterial
            color="#9af5f0"
            transparent
            opacity={0.055}
            roughness={0}
            transmission={0.7}
            thickness={0.5}
          />
        </mesh>

        {/* ── Atmosphere halo ── */}
        <mesh>
          <sphereGeometry args={[1.68, 32, 32]} />
          <meshBasicMaterial
            color="#57e6e6"
            transparent
            opacity={0.05}
            side={THREE.BackSide}
          />
        </mesh>

        {/* ── Orbital ring A ── */}
        <mesh ref={ringRef} rotation={[1.1, 0.3, 0]}>
          <torusGeometry args={[2.05, 0.018, 12, 160]} />
          <meshBasicMaterial color="#0ca8ad" transparent opacity={0.65} />
        </mesh>

        {/* ── Orbital ring B ── */}
        <mesh rotation={[0.25, 1.2, 0.2]}>
          <torusGeometry args={[2.28, 0.009, 10, 160]} />
          <meshBasicMaterial color="#2ecbd0" transparent opacity={0.35} />
        </mesh>

        {/* ── Ranchi solid pin dot ── */}
        <mesh ref={pinSolidRef} position={pinPos} visible={false}>
          <sphereGeometry args={[0.036, 12, 12]} />
          <meshBasicMaterial color="#ff3355" />
        </mesh>

        {/* ── Ranchi pulsing glow ── */}
        <mesh ref={pinGlowRef} position={glowPos} visible={false}>
          <sphereGeometry args={[0.078, 12, 12]} />
          <meshBasicMaterial color="#ff3355" transparent opacity={0.28} />
        </mesh>

      </Float>
    </group>
  );
}

/* Wireframe placeholder while textures download */
function GlobeFallback() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, d) => { if (ref.current) ref.current.rotation.y += d * 0.12; });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.52, 4]} />
      <meshStandardMaterial color="#083242" wireframe transparent opacity={0.28} />
    </mesh>
  );
}

/* ──────────────────────────── Export ──────────────────────────────── */
export default function HeroOrb() {
  const [label, setLabel] = useState("");

  return (
    /*
     * Outer div centers the globe in the panel.
     * Inner div: height:100% + aspect-ratio:1 → always a perfect square.
     * rounded-full + overflow-hidden clips WebGL canvas to a circle.
     */
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        className="relative rounded-full overflow-hidden"
        style={{ height: "100%", aspectRatio: "1 / 1" }}
      >
        {/* ── Location label pill (India / Jharkhand / Ranchi) ── */}
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
          camera={{ position: [0, 0, Z_FAR], fov: 42 }}
          dpr={[1, 1.5]}
          gl={{ alpha: true }}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        >
          <ambientLight intensity={1.6} />
          <directionalLight position={[5, 5, 5]}   intensity={2.6} color="#ffffff" />
          <directionalLight position={[-5, 2, -2]}  intensity={0.6} color="#b9fff4" />
          <pointLight       position={[-4, -2, 2]}  intensity={14}  color="#58eee7" />

          <CameraZoom setLabel={setLabel} />

          <Suspense fallback={<GlobeFallback />}>
            <GlobeCore />
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
