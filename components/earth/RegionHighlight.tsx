import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { buildRegionGeometry, type GeoFeatureCollection } from "@/lib/geo";

export type RegionHandles = {
  fillMaterial: THREE.MeshPhysicalMaterial;
  outlineMaterial: THREE.LineBasicMaterial;
};

export default function RegionHighlight({
  geojson,
  radius,
  color,
  onReady,
}: {
  geojson: GeoFeatureCollection;
  radius: number;
  color: string;
  onReady?: (handles: RegionHandles) => void;
}) {
  const { fillGeometry, outlineGeometry } = useMemo(
    () => buildRegionGeometry(geojson, radius),
    [geojson, radius]
  );

  const fillMatRef = useRef<THREE.MeshPhysicalMaterial>(null);
  const outlineMatRef = useRef<THREE.LineBasicMaterial>(null);

  useEffect(() => {
    if (fillMatRef.current && outlineMatRef.current) {
      onReady?.({ fillMaterial: fillMatRef.current, outlineMaterial: outlineMatRef.current });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <group>
      <mesh geometry={fillGeometry}>
        <meshPhysicalMaterial
          ref={fillMatRef}
          color={color}
          emissive={color}
          emissiveIntensity={0.9}
          transparent
          opacity={0}
          transmission={0.15}
          roughness={0.3}
          clearcoat={0.6}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>
      <lineSegments geometry={outlineGeometry}>
        <lineBasicMaterial ref={outlineMatRef} color={color} transparent opacity={0} />
      </lineSegments>
    </group>
  );
}
