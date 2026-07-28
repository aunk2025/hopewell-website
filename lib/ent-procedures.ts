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
    slug: "tympanoplasty",
    name: "Tympanoplasty (Eardrum Repair)",
    overview:
      "A surgical procedure to repair a perforated eardrum and, where needed, reconstruct the small bones of the middle ear, aimed at restoring hearing and preventing recurrent ear infections.",
    backgroundImage: "/tympanoplasty.jfif",
    sections: [
      {
        title: "Who Needs It",
        text: "Recommended for patients with a persistent hole in the eardrum caused by chronic infection, injury or a previous ear procedure, especially when it leads to repeated ear discharge, hearing loss or a higher risk of further infection.",
      },
      {
        title: "How It's Performed",
        text: "Under local or general anaesthesia, the surgeon grafts a small piece of the patient's own tissue over the perforation to seal it. If the tiny bones of the middle ear (ossicles) have also been damaged, they may be repaired or reconstructed in the same operation to improve sound conduction.",
      },
      {
        title: "Preparing for Surgery",
        text: "Before surgery, patients undergo a hearing test and an examination of the ear, sometimes with imaging, to assess the extent of the damage. The ear must be free of active infection or discharge at the time of surgery for the best results.",
      },
      {
        title: "Benefits",
        text: "Successful tympanoplasty closes the eardrum perforation, reduces the frequency of ear infections and discharge, and in most cases improves hearing, particularly when combined with reconstruction of the middle ear bones.",
      },
      {
        title: "Risks & Complications",
        variant: "warning",
        text: "As with any ear surgery, tympanoplasty carries some risk, including infection, incomplete closure of the perforation, taste disturbance, dizziness, or in rare cases, further hearing changes. Your surgeon will discuss your individual risk factors beforehand.",
      },
      {
        title: "Life After Surgery",
        text: "Most patients notice a gradual improvement in ear comfort and hearing over the weeks following surgery, with the eardrum continuing to heal and strengthen for several months.",
      },
    ],
    timeline: [
      {
        phase: "First Few Days",
        title: "Rest & Ear Protection",
        text: "The ear is packed and protected, with water kept strictly out of the ear canal while the graft begins to settle.",
      },
      {
        phase: "Weeks 1 to 4",
        title: "Healing & Follow-up",
        text: "Regular follow-up visits allow the surgeon to monitor healing and remove any packing, while patients avoid air travel, swimming and forceful nose-blowing.",
      },
      {
        phase: "Months 2 to 3",
        title: "Hearing Reassessment",
        text: "A follow-up hearing test evaluates the improvement in hearing once the eardrum has fully healed, guiding any further treatment if needed.",
      },
    ],
  },
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
    slug: "mastoidectomy",
    name: "Mastoidectomy",
    overview:
      "A surgical procedure to remove infected air cells from the mastoid bone behind the ear, performed to clear chronic middle ear infection and prevent it from spreading to nearby structures.",
    backgroundImage: "/earsurgery.jfif",
    sections: [
      {
        title: "Who Needs It",
        text: "Recommended for patients with chronic mastoiditis, a cholesteatoma (abnormal skin growth in the middle ear), or persistent ear infections that have not resolved with antibiotics or other conservative treatment, especially when there is a risk of the infection spreading further.",
      },
      {
        title: "How It's Performed",
        text: "Under general anaesthesia, the surgeon makes an incision behind the ear to access the mastoid bone and removes the infected air cells and any diseased tissue, such as a cholesteatoma. Depending on the extent of disease, the eardrum or middle ear bones may also be repaired in the same operation.",
      },
      {
        title: "Preparing for Surgery",
        text: "Before surgery, patients undergo a hearing test, ear examination and imaging such as a CT scan to assess the extent of infection and plan the surgical approach. The ear must be free of active drainage where possible before the procedure.",
      },
      {
        title: "Benefits",
        text: "Mastoidectomy clears persistent infection from the mastoid bone, reduces the risk of serious complications such as the infection spreading to the brain or facial nerve, and can help preserve or improve hearing when combined with ear reconstruction.",
      },
      {
        title: "Risks & Complications",
        variant: "warning",
        text: "As with any ear surgery, mastoidectomy carries some risk, including infection, dizziness, changes in taste, facial nerve weakness, or hearing changes. Your surgeon will discuss your individual risk factors beforehand and take steps to minimise these risks.",
      },
      {
        title: "Life After Surgery",
        text: "Most patients experience resolution of chronic ear infection and discharge, with recovery of balance and any temporary dizziness typically settling over the following weeks.",
      },
    ],
    timeline: [
      {
        phase: "First Few Days",
        title: "Rest & Ear Protection",
        text: "The ear is dressed and protected, with water kept out of the ear canal while initial healing takes place and any dizziness gradually settles.",
      },
      {
        phase: "Weeks 1 to 4",
        title: "Wound Healing & Follow-up",
        text: "Regular follow-up visits allow the surgeon to monitor healing of the incision and ear, with activity restrictions gradually eased as advised.",
      },
      {
        phase: "Months 2 to 3",
        title: "Hearing & Balance Reassessment",
        text: "A follow-up hearing test and review of balance confirm full recovery, guiding any further treatment such as hearing rehabilitation if needed.",
      },
    ],
  },
  {
    slug: "tonsillectomy",
    name: "Tonsillitis & Tonsillectomy",
    overview:
      "Surgical removal of the tonsils, performed to treat recurrent or chronic tonsillitis, breathing difficulty during sleep, or other tonsil-related conditions that have not improved with medical treatment.",
    backgroundImage: "/tonsillitis.jfif",
    sections: [
      {
        title: "Who Needs It",
        text: "Recommended for patients with frequent, recurring episodes of tonsillitis, chronic sore throat, tonsils large enough to obstruct breathing or swallowing, or tonsil-related sleep-disordered breathing that has not responded to medication.",
      },
      {
        title: "How It's Performed",
        text: "Under general anaesthesia, the surgeon removes both tonsils through the mouth, with no external incision required. The procedure typically takes under an hour, and most patients go home the same day or after a short overnight observation.",
      },
      {
        title: "Preparing for Surgery",
        text: "Before surgery, patients undergo a throat examination and a general health assessment. Patients are advised to avoid certain medications such as blood thinners beforehand and to arrange a soft-food diet for the recovery period.",
      },
      {
        title: "Benefits",
        text: "Tonsillectomy significantly reduces or eliminates recurrent throat infections, improves breathing and sleep quality in patients with obstructive symptoms, and reduces the number of missed school or work days from repeated illness.",
      },
      {
        title: "Risks & Complications",
        variant: "warning",
        text: "As with any surgery, tonsillectomy carries some risk, including bleeding, infection, throat pain, or temporary voice changes. Your surgeon will explain the risks specific to your case and how they will be managed.",
      },
      {
        title: "Life After Surgery",
        text: "Most patients recover fully within one to two weeks, with a sore throat that gradually eases, after which the frequency of tonsil-related infections drops sharply or stops altogether.",
      },
    ],
    timeline: [
      {
        phase: "First Few Days",
        title: "Pain Management & Soft Diet",
        text: "Throat pain and discomfort are managed with pain relief and a soft or liquid diet, with plenty of fluids to keep the throat comfortable and hydrated.",
      },
      {
        phase: "Days 5 to 10",
        title: "Healing & Scab Formation",
        text: "White healing tissue forms over the surgical site; mild ear pain and throat discomfort can continue during this period as the area heals.",
      },
      {
        phase: "Weeks 2 to 3",
        title: "Return to Normal Activity",
        text: "Most patients return to school, work and a normal diet, with a noticeable drop in throat infections and improved sleep in patients who had breathing-related symptoms.",
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
