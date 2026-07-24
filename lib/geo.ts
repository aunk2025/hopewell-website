import * as THREE from "three";
import earcut from "earcut";

export function latLngToVec3(lat: number, lng: number, r: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  );
}

type Ring = [number, number][];
type GeoGeometry =
  | { type: "Polygon"; coordinates: Ring[] }
  | { type: "MultiPolygon"; coordinates: Ring[][] };
type GeoFeature = { type: "Feature"; geometry: GeoGeometry; properties?: Record<string, unknown> };
export type GeoFeatureCollection = { type: "FeatureCollection"; features: GeoFeature[] };

function ringsFromFeature(feature: GeoFeature): Ring[][] {
  if (feature.geometry.type === "Polygon") return [feature.geometry.coordinates];
  return feature.geometry.coordinates;
}

/**
 * Builds a fill mesh (earcut-triangulated, curved onto the sphere) and an
 * outline (LineSegments) for every polygon in a GeoJSON FeatureCollection.
 * Holes are ignored — fine for the low-precision boundaries used here.
 */
export function buildRegionGeometry(geojson: GeoFeatureCollection, radius: number) {
  const fillPositions: number[] = [];
  const outlinePositions: number[] = [];

  for (const feature of geojson.features) {
    for (const polygon of ringsFromFeature(feature)) {
      const exteriorRing = polygon[0];
      if (!exteriorRing || exteriorRing.length < 3) continue;

      const flat: number[] = [];
      for (const [lng, lat] of exteriorRing) flat.push(lng, lat);

      const indices = earcut(flat);
      const ringVecs = exteriorRing.map(([lng, lat]) => latLngToVec3(lat, lng, radius));

      for (const idx of indices) {
        const v = ringVecs[idx];
        fillPositions.push(v.x, v.y, v.z);
      }

      for (let i = 0; i < ringVecs.length; i++) {
        const a = ringVecs[i];
        const b = ringVecs[(i + 1) % ringVecs.length];
        outlinePositions.push(a.x, a.y, a.z, b.x, b.y, b.z);
      }
    }
  }

  const fillGeometry = new THREE.BufferGeometry();
  fillGeometry.setAttribute("position", new THREE.Float32BufferAttribute(fillPositions, 3));
  fillGeometry.computeVertexNormals();

  const outlineGeometry = new THREE.BufferGeometry();
  outlineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(outlinePositions, 3));

  return { fillGeometry, outlineGeometry };
}
