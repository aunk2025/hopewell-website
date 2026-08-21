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
    slug: "noseandsinuscondition",
    name: "Nose & Sinus Conditions",
    overview:
      "Diagnosis and treatment of chronic sinusitis and related nasal conditions, using minimally invasive Functional Endoscopic Sinus Surgery (FESS) to clear blocked sinuses and restore normal breathing and drainage.",
    backgroundImage: "/sinus.jfif",
    sections: [
      {
        title: "Who Needs It",
        text: "Recommended for patients with chronic sinusitis, persistent nasal blockage, facial pain or pressure, nasal polyps, or recurrent sinus infections that have not improved with medication, nasal sprays or other conservative treatment.",
      },
      {
        title: "How It's Performed",
        text: "Functional Endoscopic Sinus Surgery (FESS) is performed through the nostrils using a thin, lighted endoscope, without any external incisions. The surgeon removes blockages, polyps or diseased tissue and widens the natural drainage pathways of the sinuses to restore normal airflow and mucus drainage.",
      },
      {
        title: "Preparing for Surgery",
        text: "Before surgery, patients typically undergo a nasal endoscopy and a CT scan of the sinuses to map the anatomy and extent of disease. Certain medications, such as blood thinners, may need to be adjusted beforehand under medical guidance.",
      },
      {
        title: "Benefits",
        text: "FESS relieves nasal blockage, reduces sinus pressure and facial pain, improves sense of smell, and lowers the frequency of sinus infections, with most patients experiencing significantly easier breathing after recovery.",
      },
      {
        title: "Risks & Complications",
        variant: "warning",
        text: "As with any sinus surgery, FESS carries some risk, including bleeding, infection, temporary changes in smell or taste, or in rare cases injury to structures near the sinuses. Your surgeon will discuss your individual risk factors beforehand.",
      },
      {
        title: "Life After Surgery",
        text: "Most patients notice easier breathing and reduced sinus symptoms within a few weeks, with regular follow-up cleaning of the nasal passages helping the sinuses heal properly and stay clear.",
      },
    ],
    timeline: [
      {
        phase: "First Few Days",
        title: "Rest & Nasal Care",
        text: "Mild congestion, discomfort and light bleeding are normal, managed with saline rinses and by avoiding forceful nose-blowing.",
      },
      {
        phase: "Weeks 1 to 3",
        title: "Follow-up Cleaning",
        text: "The surgeon performs periodic endoscopic cleaning of the nasal passages to remove crusting and support proper healing of the sinus pathways.",
      },
      {
        phase: "Weeks 4 to 6",
        title: "Return to Normal Breathing",
        text: "Swelling settles and most patients notice a clear improvement in nasal breathing and reduced sinus symptoms, with full healing continuing over the following weeks.",
      },
    ],
  },
  {
    slug: "paediatricent",
    name: "Paediatric ENT",
    overview:
      "Evaluation and treatment of ear, nose and throat conditions in children, including grommet (ear tube) insertion for glue ear, a common and effective cause of speech, hearing and behavioural delay in young children.",
    backgroundImage: "/paediatricent.jfif",
    sections: [
      {
        title: "Who Needs It",
        text: "Recommended for children with persistent fluid behind the eardrum (glue ear), recurrent ear infections, or hearing loss that has led to delayed speech development, poor concentration at school, or behavioural changes, especially when the condition has not resolved on its own after a period of monitoring.",
      },
      {
        title: "How It's Performed",
        text: "Under a brief general anaesthetic, the surgeon makes a tiny opening in the eardrum and places a small ventilation tube (grommet) to drain trapped fluid and allow air into the middle ear. The procedure typically takes about 15 to 20 minutes and most children go home the same day.",
      },
      {
        title: "Preparing for Treatment",
        text: "Before the procedure, the child undergoes a hearing test and an examination of the ear, along with a general health check to confirm fitness for a short general anaesthetic.",
      },
      {
        title: "Benefits",
        text: "Grommet insertion restores hearing quickly by clearing trapped fluid, which in turn supports normal speech and language development, improves behaviour and attention, and reduces the frequency of ear infections.",
      },
      {
        title: "Risks & Complications",
        variant: "warning",
        text: "As with any procedure involving general anaesthesia, there are small risks, including infection, early extrusion or blockage of the tube, or a small perforation that does not close after the tube falls out. Your child's surgeon will explain the risks specific to their case.",
      },
      {
        title: "Life After Treatment",
        text: "Most children experience an immediate improvement in hearing, with noticeable gains in speech clarity, attentiveness and behaviour over the following weeks and months as the tubes remain in place.",
      },
    ],
    timeline: [
      {
        phase: "First Few Days",
        title: "Recovery & Hearing Check",
        text: "Children usually return to normal activity within a day, with an immediate or early improvement in hearing once the fluid has drained.",
      },
      {
        phase: "Weeks 1 to 4",
        title: "Speech & Behaviour Follow-up",
        text: "Parents and teachers often notice better attentiveness, clearer speech response and improved behaviour as hearing stabilises.",
      },
      {
        phase: "Months 6 to 12",
        title: "Tube Monitoring",
        text: "Grommets are reviewed periodically and typically fall out on their own as the eardrum heals, with hearing and ear health monitored until then.",
      },
    ],
  },
  {
    slug: "head-neck-surgery",
    name: "Head & Neck Surgery",
    overview:
      "Diagnosis and surgical treatment of conditions affecting the thyroid, salivary glands and other structures of the head and neck, including tumour management and facial trauma care.",
    backgroundImage: "/headndneck.jfif",
    sections: [
      {
        title: "Who Needs It",
        text: "Recommended for patients with a thyroid nodule or neck swelling requiring evaluation, salivary gland stones or tumours, a suspected or confirmed head and neck tumour, or facial injuries from trauma that need surgical repair.",
      },
      {
        title: "How It's Performed",
        text: "Treatment is tailored to the specific condition. Thyroid and neck swellings are first assessed with imaging and, where needed, a needle biopsy, before surgery such as thyroidectomy is planned. Salivary gland disorders may be treated by removing a blocked stone or the affected gland, while head and neck tumours and facial trauma are managed with individualised surgical plans, at times involving a multidisciplinary team.",
      },
      {
        title: "Preparing for Surgery",
        text: "Before surgery, patients typically undergo imaging such as an ultrasound or CT scan, blood tests, and where relevant, a biopsy to confirm the diagnosis and guide the surgical approach. The care team explains the planned procedure, anaesthesia and expected recovery beforehand.",
      },
      {
        title: "Benefits",
        text: "Timely surgery relieves symptoms from thyroid or salivary gland enlargement, removes or controls tumours affecting the head and neck, restores form and function after facial trauma, and can be lifesaving in cancer-related cases.",
      },
      {
        title: "Risks & Complications",
        variant: "warning",
        text: "As with any surgery in this region, risks can include bleeding, infection, injury to nearby nerves affecting voice, swallowing or facial movement, or changes in hormone levels after thyroid surgery. Your surgical team will discuss the risks specific to your procedure.",
      },
      {
        title: "Life After Surgery",
        text: "Recovery varies with the specific condition and procedure, but most patients see significant relief of symptoms, with functional and cosmetic outcomes continuing to improve over the following weeks to months.",
      },
    ],
    timeline: [
      {
        phase: "First Few Days",
        title: "Rest & Wound Care",
        text: "The surgical site is monitored closely, with pain managed and early guidance given on diet, voice rest or wound care depending on the procedure performed.",
      },
      {
        phase: "Weeks 1 to 4",
        title: "Healing & Follow-up",
        text: "Regular follow-up visits track wound healing and, where relevant, hormone levels or pathology results, guiding any additional treatment needed.",
      },
      {
        phase: "Months 2 to 6",
        title: "Long-term Recovery",
        text: "Most patients return to normal daily activity, with ongoing monitoring for cancer-related cases and ongoing improvement in facial function after trauma repair.",
      },
    ],
  },
];

export function getProcedure(slug: string) {
  return procedures.find((p) => p.slug === slug);
}
