// Shared department display order for every doctor listing on the site
// (homepage tiles/search, the /doctors directory and its filter chips).
// Matched against each doctor's free-text `specialty` field by keyword
// rather than exact string, since the admin-entered values (e.g.
// "Obs & Gyneac") don't always spell out the department name in full.
// Specialties with no keyword here (e.g. Urologist, Gastroenterologist,
// Radiologist) keep the API's default order and are placed after every
// matched department.
export const DEPARTMENTS = [
  { label: "GI & Laparoscopic Surgery", keywords: ["laparoscopic", "gi &"] },
  { label: "Obs & Gynaecology", keywords: ["obs", "gyn"] },
  { label: "Medicine", keywords: ["medicine"] },
  { label: "Orthopaedics", keywords: ["orthop"] },
  { label: "Critical Care", keywords: ["critical care"] },
  { label: "Neurology", keywords: ["neurology"] },
  { label: "Paediatrics", keywords: ["paediatric", "pediatric"] },
] as const;

export function departmentRank(specialty: string) {
  const lower = specialty.toLowerCase();
  const index = DEPARTMENTS.findIndex((d) => d.keywords.some((k) => lower.includes(k)));
  return index === -1 ? DEPARTMENTS.length : index;
}

export function matchesDepartment(specialty: string, label: string) {
  const lower = specialty.toLowerCase();
  const dept = DEPARTMENTS.find((d) => d.label === label);
  return dept ? dept.keywords.some((k) => lower.includes(k)) : false;
}

export function sortByDepartment<T extends { specialty: string }>(list: T[]): T[] {
  return [...list].sort((a, b) => departmentRank(a.specialty) - departmentRank(b.specialty));
}
