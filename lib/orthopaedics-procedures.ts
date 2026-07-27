export type ProcedureSection = { title: string; text: string; variant?: "info" | "warning" };
export type TimelinePhase = { phase: string; title?: string; text: string };

export type Procedure = {
  slug: string;
  name: string;
  overview: string;
  sections?: ProcedureSection[];
  timeline?: TimelinePhase[];
  backgroundImage?: string;
  backgroundPosition?: string;
};

export const procedures: Procedure[] = [
  {
    slug: "tkr",
    name: "Total Knee Replacement (TKR)",
    overview:
      "Total Knee Replacement is a surgical procedure that resurfaces a knee joint damaged by arthritis or injury, replacing the worn joint surfaces with smooth metal and plastic implants to relieve pain and restore movement.",
    backgroundImage: "/tkr.jfif",
    sections: [
      {
        title: "Who Needs It",
        text: "Recommended for patients with severe knee arthritis or joint damage causing persistent pain, stiffness and reduced mobility that no longer responds to medication, physiotherapy or other conservative treatment. Common underlying causes include osteoarthritis, rheumatoid arthritis and post-traumatic arthritis following an old injury.",
      },
      {
        title: "Types of Knee Replacement",
        text: "Not every patient needs the entire joint replaced. A Total Knee Replacement resurfaces all three compartments of the knee, while a Unicondylar (partial) Knee Replacement resurfaces only the damaged compartment, preserving more of the patient's natural bone and ligaments. Your surgeon will recommend the appropriate option based on the extent and location of joint damage.",
      },
      {
        title: "Preparing for Surgery",
        text: "Before surgery, patients typically undergo a physical examination, blood tests and imaging to assess the joint and plan the implant size and positioning. Pre-existing conditions such as diabetes or heart disease are optimised beforehand to reduce surgical risk, and patients are counselled on what to expect during admission, surgery and the initial recovery period.",
      },
      {
        title: "The Procedure",
        text: "The damaged cartilage and a thin layer of the underlying bone are removed and replaced with a metal and polyethylene implant that recreates the natural movement of the knee joint. Surgery is performed under spinal or general anaesthesia and typically takes one to two hours, after which patients are moved to a recovery area for close monitoring.",
      },
      {
        title: "Implants Used",
        text: "Modern knee implants are made from durable metal alloys paired with a medical-grade plastic spacer that mimics the cushioning function of natural cartilage. Implants are selected and sized specifically for each patient during pre-surgical planning and are designed to withstand years of everyday movement.",
      },
      {
        title: "Benefits",
        text: "Most patients experience significant pain relief, improved joint mobility and the ability to return to daily activities that had become difficult before surgery.",
      },
      {
        title: "Risks & Complications",
        variant: "warning",
        text: "As with any major surgery, Total Knee Replacement carries some risk, including infection, blood clots, stiffness or, rarely, implant loosening over time. Your surgical team will discuss your individual risk factors beforehand and take preventive steps, such as blood-thinning medication and early mobilisation, to minimise these risks.",
      },
      {
        title: "Life After Surgery",
        text: "Modern knee implants are built to last many years of normal use, and most patients return to activities such as walking, swimming and cycling without difficulty. Periodic follow-up visits help monitor the implant and ensure long-term joint health.",
      },
    ],
    timeline: [
      {
        phase: "Day 1–2",
        text: "Patients are encouraged to stand and take their first steps with support soon after surgery, aided by pain management and physiotherapy.",
      },
      {
        phase: "Week 1–2",
        text: "Hospital discharge typically follows within a few days, with a home or outpatient physiotherapy programme focused on regaining knee movement and strength.",
      },
      {
        phase: "Weeks 3–6",
        text: "Most patients progress from a walker or crutches to walking independently, with swelling and discomfort steadily easing.",
      },
      {
        phase: "3+ Months",
        text: "The majority of patients resume normal daily activities, with continued improvement in strength and flexibility over the following months.",
      },
    ],
  },
  {
    slug: "thr",
    name: "Total Hip Replacement (THR)",
    overview:
      "Total Hip Replacement involves removing a damaged or arthritic hip joint and replacing it with an artificial implant, relieving pain and restoring the ability to move freely.",
    backgroundImage: "/thr.jfif",
    sections: [
      {
        title: "Who Needs It",
        text: "Recommended for patients with severe hip arthritis or joint damage causing persistent pain, stiffness and reduced mobility that no longer responds to medication, physiotherapy or other conservative treatment. Common underlying causes include osteoarthritis, rheumatoid arthritis, avascular necrosis and hip fractures.",
      },
      {
        title: "Types of Hip Replacement",
        text: "A Total Hip Replacement resurfaces both the ball and socket of the hip joint, while a Partial Hip Replacement replaces only the femoral head, typically used for certain fracture cases. Surgeons may also choose between different surgical approaches, such as posterior or anterior, based on the patient's anatomy and recovery goals.",
      },
      {
        title: "Preparing for Surgery",
        text: "Before surgery, patients typically undergo a physical examination, blood tests and imaging to assess the joint and plan implant size and positioning. Pre-existing conditions such as diabetes or heart disease are optimised beforehand to reduce surgical risk, and patients are counselled on what to expect during admission, surgery and the initial recovery period.",
      },
      {
        title: "The Procedure",
        text: "The damaged ball and socket of the hip joint are removed and replaced with an artificial ball and socket made from metal, ceramic or plastic components that recreate natural hip movement. Surgery is performed under spinal or general anaesthesia and typically takes one to two hours, after which patients are moved to a recovery area for close monitoring.",
      },
      {
        title: "Implants Used",
        text: "Modern hip implants combine a metal or ceramic ball with a durable socket liner, chosen based on the patient's age, activity level and bone quality. Implants are selected and sized specifically for each patient during pre-surgical planning and are designed to withstand years of everyday movement.",
      },
      {
        title: "Benefits",
        text: "Most patients experience significant pain relief, improved joint mobility and the ability to return to daily activities that had become difficult before surgery.",
      },
      {
        title: "Risks & Complications",
        variant: "warning",
        text: "As with any major surgery, Total Hip Replacement carries some risk, including infection, blood clots, differences in leg length, dislocation or, rarely, implant loosening over time. Your surgical team will discuss your individual risk factors beforehand and take preventive steps, such as blood-thinning medication and early mobilisation, to minimise these risks.",
      },
      {
        title: "Life After Surgery",
        text: "Modern hip implants are built to last many years of normal use, and most patients return to activities such as walking, swimming and cycling without difficulty. Periodic follow-up visits help monitor the implant and ensure long-term joint health.",
      },
    ],
    timeline: [
      {
        phase: "Day 1–2",
        text: "Patients are encouraged to stand and take their first steps with support soon after surgery, aided by pain management and physiotherapy.",
      },
      {
        phase: "Week 1–2",
        text: "Hospital discharge typically follows within a few days, with a home or outpatient physiotherapy programme focused on regaining hip movement and strength.",
      },
      {
        phase: "Weeks 3–6",
        text: "Most patients progress from a walker or crutches to walking independently, with swelling and discomfort steadily easing.",
      },
      {
        phase: "3+ Months",
        text: "The majority of patients resume normal daily activities, with continued improvement in strength and flexibility over the following months.",
      },
    ],
  },
  {
    slug: "shoulder-arthroscopy",
    name: "Shoulder Arthroscopy",
    overview:
      "A minimally invasive keyhole procedure used to diagnose and treat shoulder joint problems using a small camera and instruments inserted through tiny incisions.",
    backgroundImage: "/shoulderarthroscopy.jfif",
    sections: [
      {
        title: "Who Needs It",
        text: "Recommended for patients with persistent shoulder pain, stiffness or instability caused by rotator cuff tears, labral tears, impingement or recurrent dislocation that has not improved with rest, medication or physiotherapy.",
      },
      {
        title: "How It's Performed",
        text: "A small camera called an arthroscope is inserted through a tiny incision, allowing the surgeon to view the inside of the shoulder joint on a screen. Additional small incisions allow specialised instruments to repair damaged tissue, remove loose fragments or address impingement, all without a large open incision.",
      },
      {
        title: "Preparing for Surgery",
        text: "Before surgery, patients typically undergo a physical examination and imaging such as an MRI or ultrasound to assess the extent of joint damage and plan the surgical approach. Patients are counselled on what to expect during admission, surgery and the initial recovery period.",
      },
      {
        title: "Conditions Treated",
        text: "Shoulder arthroscopy is commonly used to treat rotator cuff tears, shoulder impingement, labral tears, frozen shoulder and recurrent shoulder dislocation, often combined with a targeted repair procedure such as rotator cuff repair or Bankart's repair.",
      },
      {
        title: "Benefits",
        text: "Because it avoids a large incision, arthroscopy typically results in less pain, minimal scarring, a shorter hospital stay and a faster return to daily activities compared with open shoulder surgery.",
      },
      {
        title: "Risks & Complications",
        variant: "warning",
        text: "As with any surgical procedure, shoulder arthroscopy carries some risk, including infection, stiffness, nerve or blood vessel irritation, or incomplete relief of symptoms in complex cases. Your surgical team will discuss your individual risk factors beforehand and take steps to minimise these risks.",
      },
      {
        title: "Life After Surgery",
        text: "Most patients regain significant shoulder function and return to normal activities, including sport, once rehabilitation is complete. Continued shoulder-strengthening exercises help maintain long-term joint health.",
      },
    ],
    timeline: [
      {
        phase: "First Few Days",
        title: "Rest & Protection",
        text: "Wounds are kept dry. Patients wear a sling to protect the shoulder and use ice packs to manage mild swelling.",
      },
      {
        phase: "Weeks 1 to 4",
        title: "Gentle Motion",
        text: "Sling usage is reduced. A physiotherapist introduces gentle passive exercises to prevent stiffness.",
      },
      {
        phase: "Months 2 to 4",
        title: "Strengthening",
        text: "Active physical therapy focuses on rebuilding muscle strength and restoring full range of motion.",
      },
    ],
  },
  {
    slug: "bankart-repair",
    name: "Bankart's Repair",
    overview:
      "A surgical procedure to repair a torn labrum in the shoulder, most often performed after repeated shoulder dislocations, to restore joint stability.",
    backgroundImage: "/bankartrepair.jfif",
    sections: [
      {
        title: "Who Needs It",
        text: "Recommended for patients who experience repeated shoulder dislocations or ongoing instability caused by a torn labrum, particularly when the shoulder continues to feel loose or gives way during everyday or sporting activities.",
      },
      {
        title: "How It's Performed",
        text: "The torn labrum is reattached to the rim of the shoulder socket using small anchors and sutures, most often through an arthroscopic (keyhole) approach using a camera and specialised instruments inserted through tiny incisions.",
      },
      {
        title: "Preparing for Surgery",
        text: "Before surgery, patients typically undergo a physical examination and imaging such as an MRI to confirm the extent of the labral tear and rule out associated damage. Patients are counselled on what to expect during admission, surgery and the initial recovery period.",
      },
      {
        title: "Benefits",
        text: "Repairing the labrum restores stability to the shoulder joint, reducing the risk of further dislocations and allowing a safe return to sport and everyday activity.",
      },
      {
        title: "Risks & Complications",
        variant: "warning",
        text: "As with any surgical procedure, Bankart's repair carries some risk, including infection, stiffness, recurrent instability in a small number of cases, or nerve irritation. Your surgical team will discuss your individual risk factors beforehand and take steps to minimise these risks.",
      },
      {
        title: "Life After Surgery",
        text: "Most patients regain stable, pain-free shoulder movement and are able to return to sport and physical activity once rehabilitation is complete, with a low likelihood of further dislocation.",
      },
    ],
    timeline: [
      {
        phase: "Weeks 1 to 4",
        title: "Immobilization",
        text: "The shoulder is kept strictly immobilised in a sling, allowing the repaired labrum to heal securely to the bone.",
      },
      {
        phase: "Weeks 4 to 8",
        title: "Range of Motion",
        text: "The sling is removed and physiotherapy begins, gradually restoring the shoulder's flexibility without straining the repair.",
      },
      {
        phase: "Months 3 to 6",
        title: "Return to Play",
        text: "Advanced strengthening exercises help athletes gradually transition back to throwing, lifting and competitive sport.",
      },
    ],
  },
  {
    slug: "acl-reconstruction",
    name: "ACL Reconstruction",
    overview:
      "Reconstructive surgery to replace a torn anterior cruciate ligament (ACL) in the knee, commonly needed after sports-related injuries, to restore knee stability.",
    backgroundImage: "/aclreconstruction.jfif",
    sections: [
      {
        title: "Who Needs It",
        text: "Recommended for patients with a torn or ruptured ACL causing knee instability, often following a sports injury involving sudden stops, changes in direction or awkward landings. It is particularly important for athletes and physically active individuals who want to return to sport.",
      },
      {
        title: "How It's Performed",
        text: "The torn ligament is removed and replaced with a graft, often taken from the patient's own hamstring or patellar tendon, which is threaded through the knee and secured to recreate the function of the original ACL. The procedure is typically performed arthroscopically using small incisions.",
      },
      {
        title: "Preparing for Surgery",
        text: "Before surgery, patients typically undergo a physical examination and imaging such as an MRI to confirm the extent of the ligament tear and assess for associated injuries. A period of pre-surgical physiotherapy is often recommended to reduce swelling and restore knee movement before the operation.",
      },
      {
        title: "Benefits",
        text: "Reconstructing the ACL restores stability to the knee, reducing the risk of further injury and allowing a safe return to sport and activities that involve pivoting or sudden changes of direction.",
      },
      {
        title: "Risks & Complications",
        variant: "warning",
        text: "As with any surgical procedure, ACL reconstruction carries some risk, including infection, stiffness, graft failure or persistent instability in a small number of cases. Your surgical team will discuss your individual risk factors beforehand and take steps to minimise these risks.",
      },
      {
        title: "Life After Surgery",
        text: "Most patients regain stable, confident knee function and are able to return to sport once a full rehabilitation programme is complete, with a low likelihood of further ligament injury.",
      },
    ],
    timeline: [
      {
        phase: "Weeks 1 to 2",
        title: "Protection & Swelling Control",
        text: "The knee is protected with crutches and, in some cases, a brace, while early physiotherapy focuses on reducing swelling and regaining basic movement.",
      },
      {
        phase: "Weeks 3 to 12",
        title: "Rebuilding Motion & Strength",
        text: "Physiotherapy progresses to restore full range of motion and gradually rebuild strength in the muscles supporting the knee.",
      },
      {
        phase: "Months 4 to 9",
        title: "Return to Sport",
        text: "Sport-specific training and agility work prepare the knee for a gradual, supervised return to competitive activity.",
      },
    ],
  },
  {
    slug: "pcl-reconstruction",
    name: "PCL Reconstruction",
    overview:
      "Reconstructive surgery to repair a torn posterior cruciate ligament (PCL), restoring stability and function to the knee joint.",
    backgroundImage: "/pclreconstruction.jfif",
    backgroundPosition: "center 40%",
    sections: [
      {
        title: "Who Needs It",
        text: "Recommended for patients with a torn or ruptured PCL causing knee instability, most often following a direct blow to the front of a bent knee, such as in a fall, sports collision or road traffic accident.",
      },
      {
        title: "How It's Performed",
        text: "The torn ligament is removed and replaced with a graft, often taken from the patient's own hamstring, patellar or Achilles tendon, which is threaded through the knee and secured to recreate the function of the original PCL. The procedure is typically performed arthroscopically using small incisions.",
      },
      {
        title: "Preparing for Surgery",
        text: "Before surgery, patients typically undergo a physical examination and imaging such as an MRI to confirm the extent of the ligament tear and assess for associated injuries, since PCL tears often occur alongside damage to other structures in the knee. A period of pre-surgical physiotherapy is often recommended to reduce swelling and restore knee movement before the operation.",
      },
      {
        title: "Benefits",
        text: "Reconstructing the PCL restores stability to the knee, reducing the risk of further injury and long-term joint wear, and allowing a safe return to daily activities and sport.",
      },
      {
        title: "Risks & Complications",
        variant: "warning",
        text: "As with any surgical procedure, PCL reconstruction carries some risk, including infection, stiffness, graft failure or persistent instability in a small number of cases. Your surgical team will discuss your individual risk factors beforehand and take steps to minimise these risks.",
      },
      {
        title: "Life After Surgery",
        text: "Most patients regain stable, confident knee function and are able to return to daily activity and sport once a full rehabilitation programme is complete, with a low likelihood of further ligament injury.",
      },
    ],
    timeline: [
      {
        phase: "Weeks 1 to 4",
        title: "Immobilization & Protection",
        text: "The knee is supported in a specialised brace to prevent the shin bone from sagging backward, with crutches used for walking during this period.",
      },
      {
        phase: "Weeks 5 to 12",
        title: "Restoring Motion",
        text: "Gentle physiotherapy begins to gradually increase knee bend and reactivate the quadriceps muscles, with crutches phased out as strength returns.",
      },
      {
        phase: "Months 6 to 9+",
        title: "Strength & Return to Play",
        text: "Advanced strengthening exercises prepare athletes for running and agility drills, working toward an eventual return to contact sports.",
      },
    ],
  },
  {
    slug: "meniscus-repair",
    name: "Meniscus Repair & Reconstruction",
    overview:
      "Surgical repair or reconstruction of the meniscus, the cartilage cushion in the knee, to relieve pain and restore normal joint mechanics after injury.",
    backgroundImage: "/miniscus%20repair.jfif",
    backgroundPosition: "center 40%",
    sections: [
      {
        title: "Who Needs It",
        text: "Recommended for patients with a torn meniscus causing persistent knee pain, swelling, locking or a sensation of the knee giving way, particularly when symptoms do not improve with rest, medication or physiotherapy.",
      },
      {
        title: "How It's Performed",
        text: "Using an arthroscope and small instruments inserted through tiny incisions, the surgeon either trims away the damaged portion of the meniscus or repairs the tear by stitching it back together, depending on the location and pattern of the tear.",
      },
      {
        title: "Preparing for Surgery",
        text: "Before surgery, patients typically undergo a physical examination and imaging such as an MRI to confirm the location and extent of the tear. Patients are counselled on what to expect during admission, surgery and the initial recovery period.",
      },
      {
        title: "Benefits",
        text: "Treating a torn meniscus relieves pain and restores smoother knee movement, helping protect the joint from further wear over time.",
      },
      {
        title: "Risks & Complications",
        variant: "warning",
        text: "As with any surgical procedure, meniscus surgery carries some risk, including infection, stiffness, or incomplete relief of symptoms in complex cases. Your surgical team will discuss your individual risk factors beforehand and take steps to minimise these risks.",
      },
      {
        title: "Life After Surgery",
        text: "Most patients experience significant pain relief and return to daily activities and sport once rehabilitation is complete, with the specific recovery pace depending on whether the meniscus was trimmed or repaired.",
      },
    ],
    timeline: [
      {
        phase: "Weeks 1 to 2",
        title: "Protection & Swelling Control",
        text: "Weight-bearing and activity are gradually increased as advised by the surgeon, while early physiotherapy focuses on reducing swelling and regaining basic movement.",
      },
      {
        phase: "Weeks 3 to 6",
        title: "Restoring Motion & Strength",
        text: "Physiotherapy progresses to restore full range of motion and rebuild strength in the muscles supporting the knee.",
      },
      {
        phase: "Weeks 7 to 12",
        title: "Return to Activity",
        text: "Most patients gradually return to daily activities and low-impact exercise, with repaired tears typically following a longer timeline than trimmed ones.",
      },
    ],
  },
  {
    slug: "trigger-finger-release",
    name: "Trigger Finger Release",
    overview:
      "A procedure to release a tendon that has become stuck, restoring smooth finger movement and relieving the catching or locking sensation of a trigger finger.",
    backgroundImage: "/triggerfinger.jfif",
    backgroundPosition: "center",
    sections: [
      {
        title: "Who Needs It",
        text: "Recommended for patients with a finger or thumb that catches, locks or clicks when bending or straightening, caused by inflammation and narrowing around the tendon sheath. It is particularly common in people with diabetes, rheumatoid arthritis, or repetitive hand use.",
      },
      {
        title: "How It's Performed",
        text: "A small incision is made at the base of the affected finger, and the tightened portion of the tendon sheath is divided to allow the tendon to glide smoothly again. The procedure is typically done under local anaesthesia as day-care surgery.",
      },
      {
        title: "Preparing for Surgery",
        text: "Before the procedure, patients typically undergo a physical examination to confirm the diagnosis, and conservative treatments such as splinting or steroid injections may be tried first. Patients are counselled on what to expect during the procedure and immediate recovery.",
      },
      {
        title: "Benefits",
        text: "Releasing the tendon relieves the catching or locking sensation and restores smooth, pain-free finger movement, usually with lasting results.",
      },
      {
        title: "Risks & Complications",
        variant: "warning",
        text: "As with any surgical procedure, trigger finger release carries some risk, including infection, stiffness, nerve irritation or incomplete relief of symptoms in rare cases. Your surgical team will discuss your individual risk factors beforehand and take steps to minimise these risks.",
      },
      {
        title: "Life After Surgery",
        text: "Most patients experience immediate relief from catching or locking and regain full, comfortable use of the finger once the incision has healed.",
      },
    ],
    timeline: [
      {
        phase: "First Few Days",
        title: "Wound Care",
        text: "The hand is kept clean and dry, with light finger movement encouraged early to prevent stiffness.",
      },
      {
        phase: "Weeks 1 to 2",
        title: "Return to Light Activity",
        text: "Stitches are typically removed and patients gradually resume light daily activities as comfort allows.",
      },
      {
        phase: "Weeks 3 to 6",
        title: "Full Recovery",
        text: "Most patients regain full, pain-free finger movement and can return to normal activities, including manual work.",
      },
    ],
  },
  {
    slug: "spine-surgery",
    name: "Spine Surgery",
    overview:
      "Surgical treatment for conditions affecting the spine, including disc problems, spinal stenosis and instability, aimed at relieving pain and restoring function.",
    backgroundImage: "/spinesurgery.jfif",
    sections: [
      {
        title: "Who Needs It",
        text: "Recommended for patients with persistent back or neck pain, nerve compression, spinal instability or deformity that has not improved with medication, physiotherapy or other conservative treatment, particularly when symptoms include weakness, numbness or difficulty walking.",
      },
      {
        title: "Types of Spine Surgery",
        text: "Spine surgery covers a range of procedures tailored to the underlying condition, including discectomy to remove a herniated disc, laminectomy to relieve pressure on the spinal nerves, spinal fusion to stabilise unstable segments, and minimally invasive techniques that use smaller incisions to reduce recovery time.",
      },
      {
        title: "Preparing for Surgery",
        text: "Before surgery, patients typically undergo a physical examination and imaging such as an MRI or CT scan to identify the source of nerve compression or instability. Patients are counselled on what to expect during admission, surgery and the initial recovery period.",
      },
      {
        title: "Benefits",
        text: "Depending on the procedure, spine surgery can relieve nerve-related pain, numbness and weakness, restore spinal stability, and help patients return to daily activities that had become difficult or impossible.",
      },
      {
        title: "Risks & Complications",
        variant: "warning",
        text: "As with any major surgery, spine surgery carries some risk, including infection, bleeding, nerve injury or, in fusion procedures, incomplete healing of the bone. Your surgical team will discuss your individual risk factors beforehand and take steps to minimise these risks.",
      },
      {
        title: "Life After Surgery",
        text: "Most patients experience significant relief from pain and nerve-related symptoms, with the pace and extent of recovery depending on the specific procedure performed.",
      },
    ],
    timeline: [
      {
        phase: "First Few Days",
        title: "Early Mobilisation",
        text: "Patients are encouraged to sit up and walk with support soon after surgery, guided by the surgical team to protect the spine during initial healing.",
      },
      {
        phase: "Weeks 2 to 6",
        title: "Activity & Physiotherapy",
        text: "A structured physiotherapy programme helps rebuild strength and flexibility, with activity levels increased gradually as advised by the surgeon.",
      },
      {
        phase: "Months 3 to 6",
        title: "Return to Normal Activity",
        text: "Most patients resume daily activities and, where appropriate, work and exercise, with fusion procedures typically requiring a longer recovery than minimally invasive techniques.",
      },
    ],
  },
  {
    slug: "trauma-fracture",
    name: "Trauma & Fracture Care",
    overview:
      "Emergency and planned orthopaedic care for fractures, dislocations and traumatic injuries, aimed at restoring bone alignment, stability and function as quickly and safely as possible.",
    backgroundImage: "/trauma%20care.jfif",
    sections: [
      {
        title: "Who Needs It",
        text: "Anyone who has suffered a broken bone, joint dislocation or traumatic injury from a fall, accident or sports activity, ranging from minor fractures that can be managed conservatively to complex, multi-bone trauma requiring urgent surgical fixation.",
      },
      {
        title: "How It's Performed",
        text: "Treatment depends on the type and severity of the injury. Simple fractures may be treated with casting or splinting to allow natural healing, while more complex or displaced fractures often require surgery to realign the bone and fix it in place using plates, screws, rods or external fixators.",
      },
      {
        title: "Preparing for Treatment",
        text: "In an emergency, treatment begins immediately with pain relief, imaging such as X-rays or a CT scan, and stabilisation of the injury. For planned procedures, patients are assessed and counselled on the surgical plan and expected recovery before admission.",
      },
      {
        title: "Benefits",
        text: "Prompt, well-aligned fracture treatment reduces pain, restores mobility, lowers the risk of long-term deformity or joint stiffness, and helps patients return to their normal activities as quickly as safely possible.",
      },
      {
        title: "Risks & Complications",
        variant: "warning",
        text: "As with any injury or surgery, trauma care carries some risk, including infection, delayed or incomplete healing, stiffness in nearby joints, or the need for further surgery in complex cases. Your treating team will explain the risks specific to your injury.",
      },
      {
        title: "Life After Treatment",
        text: "Most patients regain good function of the injured limb or joint, with recovery time depending on the severity of the injury, the treatment method used, and how closely rehabilitation guidance is followed.",
      },
    ],
    timeline: [
      {
        phase: "First Few Days",
        title: "Stabilisation & Pain Control",
        text: "The injury is stabilised with a cast, splint or surgical fixation, and pain is managed while initial swelling and inflammation settle.",
      },
      {
        phase: "Weeks 2 to 6",
        title: "Healing & Guided Movement",
        text: "The fracture continues to heal under regular review, with controlled movement or physiotherapy introduced as advised to prevent stiffness in nearby joints.",
      },
      {
        phase: "Months 2 to 4+",
        title: "Strengthening & Return to Activity",
        text: "As the bone consolidates, strengthening exercises and a gradual return to normal activity, sport or work follow, with timelines varying based on the specific fracture and treatment.",
      },
    ],
  },
];

export function getProcedure(slug: string) {
  return procedures.find((p) => p.slug === slug);
}
