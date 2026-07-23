// @ts-check
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const path   = require("path");

process.env.DATABASE_URL = `file:${path.resolve(__dirname, "dev.db")}`;
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding Hopewell database…");

  /* ── Admin user ── */
  const adminEmail    = process.env.ADMIN_EMAIL    || "admin@hopewellhospital.in";
  const adminPassword = process.env.ADMIN_PASSWORD || "Hopewell@2026";
  const passwordHash  = await bcrypt.hash(adminPassword, 12);

  await prisma.adminUser.upsert({
    where:  { email: adminEmail },
    update: { passwordHash },
    create: { email: adminEmail, name: "Hospital Admin", passwordHash, role: "SUPER_ADMIN" },
  });
  console.log(`✅ Admin: ${adminEmail} / ${adminPassword}`);

  /* ── Centres ── */
  const centres = [
    { name: "Cardiac Sciences",        slug: "cardiac-sciences",      icon: "Heart",      order: 1, description: "Advanced interventional cardiology and cardiac surgery.", services: JSON.stringify(["Coronary Angiography","Angioplasty","Pacemaker Implantation","CABG","Heart Failure Management","24×7 Heart Attack Care"]) },
    { name: "Advanced Surgery",         slug: "advanced-surgery",       icon: "Microscope", order: 2, description: "Minimally invasive and laparoscopic surgical procedures.", services: JSON.stringify(["Laparoscopic Surgery","General Surgery","Thoracic Surgery","Vascular Surgery","Bariatric Surgery","Day-care Procedures"]) },
    { name: "Critical Care & ICU",      slug: "critical-care",          icon: "Activity",   order: 3, description: "24×7 multi-disciplinary intensive care.", services: JSON.stringify(["MICU/SICU/CICU","Mechanical Ventilation","Haemodynamic Monitoring","Renal Replacement","Nutritional Support","Post-Op Recovery"]) },
    { name: "Orthopaedics",             slug: "orthopaedics",           icon: "Bone",       order: 4, description: "Comprehensive joint, spine and sports medicine.", services: JSON.stringify(["Hip & Knee Replacement","Spine Surgery","Sports Injury & Arthroscopy","Fracture Management","Paediatric Orthopaedics","Physiotherapy"]) },
    { name: "Neurology & Neurosurgery", slug: "neurology",              icon: "Brain",      order: 5, description: "Brain, spine and nerve disorder management.", services: JSON.stringify(["Stroke Unit","Epilepsy Management","Parkinson's Care","Brain Tumour Surgery","Spinal Disorders","Headache Clinic"]) },
    { name: "Diagnostics & Radiology",  slug: "diagnostics-radiology",  icon: "Shield",     order: 6, description: "Same-day results from imaging and pathology.", services: JSON.stringify(["1.5T MRI","64-Slice CT","Digital X-Ray","Colour Doppler","Pathology","Cardiac CT Angiography"]) },
  ];
  for (const c of centres) {
    await prisma.centre.upsert({ where: { slug: c.slug }, update: {}, create: c });
  }
  console.log("✅ Centres seeded");

  /* ── Doctors ── */
  const doctors = [
    { name: "Dr. Arvind Kumar Sharma",   slug: "dr-arvind-sharma",   specialty: "Cardiology",      qualifications: "MBBS, MD, DM Cardiology, FACC",                          experience: 22, bio: "Senior Interventional Cardiologist with over 22 years of experience. Trained at AIIMS New Delhi and Cleveland Clinic, USA. Over 5,000 coronary angioplasties performed.", available: true },
    { name: "Dr. Priya Ranjan Sinha",    slug: "dr-priya-sinha",     specialty: "Cardiac Surgery",  qualifications: "MBBS, MS, MCh Cardiothoracic Surgery",                    experience: 18, bio: "Cardiothoracic and Vascular Surgeon specialising in CABG, valve replacement and minimally invasive heart surgeries. Over 3,000 open-heart procedures.", available: true },
    { name: "Dr. Rekha Devi",            slug: "dr-rekha-devi",      specialty: "Critical Care",    qualifications: "MBBS, MD Anaesthesiology, IDCCM",                         experience: 14, bio: "Head of Critical Care & ICU. Certified in critical care medicine, managing complex multi-organ failure and advanced ventilation.", available: true },
    { name: "Dr. Mohit Prasad",          slug: "dr-mohit-prasad",    specialty: "Orthopaedics",     qualifications: "MBBS, MS Orthopaedics, Fellowship in Arthroscopy (Germany)", experience: 15, bio: "Joint Replacement and Sports Injury specialist. Over 2,000 hip and knee replacements. Trained in arthroscopic surgery in Germany.", available: true },
    { name: "Dr. Sunita Agarwal",        slug: "dr-sunita-agarwal",  specialty: "Neurology",        qualifications: "MBBS, MD, DM Neurology",                                  experience: 16, bio: "Leads the Neurology department. Expert in stroke, epilepsy, Parkinson's and neurodegenerative disorders. Trained at NIMHANS Bangalore.", available: true },
    { name: "Dr. Ravi Shankar Gupta",    slug: "dr-ravi-gupta",      specialty: "General Surgery",  qualifications: "MBBS, MS General Surgery, FIAGES",                        experience: 20, bio: "Senior General & Laparoscopic Surgeon with expertise in GI surgeries, hernia repair, bariatric procedures and advanced laparoscopic techniques.", available: true },
  ];
  for (const d of doctors) {
    await prisma.doctor.upsert({ where: { slug: d.slug }, update: {}, create: d });
  }
  console.log("✅ Doctors seeded");

  console.log("\n🎉 Done! Visit http://localhost:3000/admin to log in.\n");
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
