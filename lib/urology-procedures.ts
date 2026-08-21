// AUTO-GENERATED from procedure page content provided by the client.
// See lib/procedure-content.ts for the shared block/section/page schema.
// NOTE: doctor name is still the source placeholder ("Dr XXX") — per the
// client's request (same as ENT), left as-is until the real Urology
// specialist's name is supplied.

import type { ContentBlock, ContentSection, ProcedurePage } from "./procedure-content";

export type UrologyBlock = ContentBlock;
export type UrologySection = ContentSection;
export type UrologyProcedure = ProcedurePage;

export const urologyProcedures: UrologyProcedure[] = [
  {
    slug: "kidney-stone-treatment",
    title: "Kidney Stone Treatment in Ranchi",
    metaDescription: "Learn about kidney stone treatment in Ranchi at Hopewell Hospital, including symptoms, CT and ultrasound diagnosis, medicines, ESWL, URS, RIRS, PCNL, stenting, preparation, recovery, prevention, cost guidance and consultation with Dr XXX.",
    category: "Urology",
    eyebrow: "Urology & Endourology",
    heroTitle: "Kidney Stone Treatment in Ranchi",
    heroCopy: "Comprehensive treatment for kidney and ureteric stones—from pain control and medical passage therapy to laser endoscopy, RIRS, PCNL and other minimally invasive stone-removal procedures.",
    heroCardKicker: "Stone care from diagnosis to prevention",
    heroCardTitle: "Kidney Stone Care at Hopewell",
    heroCardText: "Ultrasound/CT evaluation, pain and infection control, procedure selection based on stone size and location, stenting when needed and metabolic prevention advice after treatment.",
    doctorName: "Dr XXX",
    doctorSpecialtyMini: "Urology & Endourology",
    heroTags: ["URS / Laser", "RIRS", "PCNL", "Stone prevention"],
    facts: [{ label: "Condition", value: "Kidney / Ureter Stone" }, { label: "Diagnosis", value: "USG / CT KUB" }, { label: "Small Stones", value: "May Pass Naturally" }, { label: "Procedures", value: "ESWL / URS / RIRS / PCNL" }, { label: "Hospital Stay*", value: "Day Care to 2–3 Days" }, { label: "Stent*", value: "Sometimes Needed" }],
    sections: [
    { id: "overview", kicker: "Overview", heading: "What are kidney stones?", blocks: [
      { kind: "text", text: "Kidney stones are hard crystal deposits that form in the urinary tract. They may remain in the kidney or move into the ureter. Treatment depends on stone size, location, pain, infection, blockage, kidney function and whether the stone is likely to pass on its own." }
    ] },
    { id: "symptoms", kicker: "Symptoms", heading: "Common symptoms of kidney or ureteric stones", blocks: [
      { kind: "twocol", boxes: [{ title: "Typical symptoms", items: ["Severe pain in the side or back.", "Pain radiating to the lower abdomen or groin.", "Nausea or vomiting.", "Blood in urine.", "Burning or urgency while urinating.", "Restlessness during severe pain episodes."] }, { title: "Seek urgent care if", items: ["Fever or chills occur with stone pain.", "You are unable to pass urine.", "Pain remains uncontrolled.", "Vomiting prevents fluid intake.", "There is only one functioning kidney.", "You are pregnant or medically high risk."] }] },
      { kind: "warning", text: "A blocked urinary tract with infection can become a medical emergency and may require urgent drainage before definitive stone treatment." }
    ] },
    { id: "diagnosis", kicker: "Diagnosis", heading: "How are kidney stones diagnosed?", blocks: [
      { kind: "text", text: "Evaluation may include urine tests, kidney-function blood tests and imaging. Ultrasound is often useful, while non-contrast CT KUB provides detailed information about stone size, density, location and obstruction in many patients. The best test depends on the clinical situation." }
    ] },
    { id: "options", kicker: "Treatment Options", heading: "Not every stone needs surgery", blocks: [
      { kind: "grid", items: [{ title: "Observation & Fluids", text: "Some small stones can pass naturally with time and monitoring." }, { title: "Pain Control", text: "Analgesics help manage renal colic while the stone is being assessed or observed." }, { title: "Medical Expulsive Therapy", text: "Selected ureteric stones may be treated with medicines that can assist passage." }, { title: "ESWL", text: "Shock waves can fragment selected kidney or ureter stones without an incision." }, { title: "URS / RIRS", text: "Endoscopic laser treatment is used for many ureteric and kidney stones." }, { title: "PCNL", text: "Large or complex kidney stones may require percutaneous removal through a small tract from the back." }] }
    ] },
    { id: "procedures", kicker: "Stone Procedures", heading: "Common procedures used for kidney stones", blocks: [
      { kind: "grid", items: [{ title: "Ureteroscopy (URS)", text: "A thin scope is passed through the urinary passage to reach ureteric stones, which may be fragmented with laser and removed." }, { title: "RIRS", text: "Retrograde intrarenal surgery uses a flexible scope and laser to treat selected kidney stones through the natural urinary passage." }, { title: "PCNL", text: "Percutaneous nephrolithotomy is commonly used for larger or more complex kidney stones." }, { title: "Mini-PCNL", text: "A smaller percutaneous tract may be used in selected cases." }, { title: "ESWL", text: "External shock waves break selected stones into smaller fragments that can pass in urine." }, { title: "Emergency Stenting", text: "A DJ stent may be inserted to bypass obstruction, especially when urgent drainage is needed." }] }
    ] },
    { id: "stent", kicker: "DJ Stent", heading: "Why might a ureteric stent be needed?", blocks: [
      { kind: "text", text: "A DJ stent is a thin internal tube placed between the kidney and bladder to maintain urine drainage. It may be used before or after stone surgery, or urgently when a stone causes obstruction. Some patients experience urinary frequency, flank discomfort or blood in urine while the stent is in place." },
      { kind: "warning", text: "A temporary stent should not be forgotten. Follow the planned removal or exchange date given by the urology team." }
    ] },
    { id: "preparation", kicker: "Preparation", heading: "Before kidney stone surgery", blocks: [
      { kind: "bullets", items: ["Review ultrasound or CT imaging.", "Urine test and urine culture when indicated.", "Kidney-function and blood tests.", "Treat active urinary infection before definitive surgery where possible.", "Pre-anaesthesia assessment.", "Medication review, especially blood thinners.", "Fasting according to anaesthesia instructions.", "Discussion of stent requirement and expected follow-up."] }
    ] },
    { id: "recovery", kicker: "Recovery", heading: "Recovery after kidney stone treatment", blocks: [
      { kind: "twocol", boxes: [{ title: "After URS / RIRS", text: "Many patients go home the same day or after a short stay. Mild burning, blood-tinged urine or stent discomfort can occur temporarily." }, { title: "After PCNL", text: "Hospital stay and recovery are usually longer than after endoscopic procedures because a tract is made directly into the kidney." }] }
    ] },
    { id: "prevention", kicker: "Stone Prevention", heading: "How can future kidney stones be reduced?", blocks: [
      { kind: "bullets", items: ["Maintain good daily fluid intake unless medically restricted.", "Reduce excess salt.", "Avoid unnecessary restriction of dietary calcium unless specifically advised.", "Moderate excess animal-protein intake where appropriate.", "Stone analysis can guide prevention when a stone is retrieved.", "Recurrent stone formers may need 24-hour urine or metabolic evaluation.", "Treat gout, parathyroid disease or other metabolic causes where identified."] }
    ] },
    { id: "risks", kicker: "Possible Risks", heading: "What risks should patients understand?", blocks: [
      { kind: "text", text: "Risks vary by procedure and may include infection, bleeding, ureteric injury, residual stone fragments, need for repeat treatment, stent-related discomfort, urinary retention, kidney injury and anaesthesia-related complications. PCNL carries a higher bleeding risk than simpler endoscopic procedures." }
    ] },
    { id: "cost", kicker: "Cost Guidance", heading: "Understanding kidney stone treatment cost", blocks: [
      { kind: "cost", range: "Depends on Stone & Procedure", note: "Final cost depends on stone size and location, ESWL versus URS/RIRS/PCNL, laser and disposable instruments, stent use, imaging, anaesthesia, room category and length of stay.", insuranceTitle: "Insurance / TPA / Ayushman", insuranceNote: "Coverage depends on diagnosis, obstruction or infection, chosen procedure, implants or disposables, policy or scheme rules, empanelment and pre-authorisation." }
    ] },
    { id: "why-hopewell", kicker: "Why Hopewell", heading: "Why choose Hopewell for kidney stone treatment?", blocks: [
      { kind: "grid", items: [{ title: "Endourology pathway", text: "Diagnosis, drainage, laser treatment and follow-up can be coordinated in one urology service." }, { title: "Procedure matched to stone", text: "Treatment is selected according to stone size, location and complexity rather than using one technique for everyone." }, { title: "Emergency drainage capability", text: "Obstructed infected systems can be stabilised urgently when required." }, { title: "Minimally invasive options", text: "URS, RIRS and other endoscopic approaches are considered where suitable." }, { title: "Prevention after treatment", text: "Stone analysis and recurrence-reduction advice are incorporated into follow-up." }, { title: "Insurance assistance", text: "Support for cashless, TPA and eligible government scheme processes." }] }
    ] },
    { id: "doctor", kicker: "Doctor", heading: "Meet the urology specialist", blocks: [
      { kind: "doctor", name: "Dr XXX", specialty: "Urology & Endourology • Hopewell Hospital, Ranchi", focus: "Clinical focus may include kidney stones, ureteroscopy, RIRS, PCNL, urinary obstruction, prostate care and minimally invasive urology." }
    ] },
    { id: "faq", kicker: "FAQs", heading: "Frequently asked questions", blocks: [
      { kind: "faq", items: [{ q: "Can kidney stones pass without surgery?", a: "Yes. Many small stones can pass naturally, especially when there is no infection, severe obstruction or uncontrolled pain. Passage depends on stone size and location." }, { q: "When is a kidney stone an emergency?", a: "Fever with an obstructing stone, inability to pass urine, uncontrolled pain, persistent vomiting or obstruction in a single functioning kidney can require urgent treatment." }, { q: "What is the difference between URS and RIRS?", a: "URS commonly treats ureteric stones, while RIRS uses a flexible scope to reach stones inside the kidney through the urinary tract." }, { q: "What is PCNL used for?", a: "PCNL is commonly used for larger, complex or staghorn kidney stones that are unlikely to be cleared efficiently by simpler methods." }, { q: "Why do I need a DJ stent?", a: "A DJ stent keeps urine flowing from kidney to bladder and may be needed after stone treatment or to bypass an obstruction." }, { q: "Can kidney stones come back?", a: "Yes. Recurrence is common in some patients. Hydration, dietary measures and metabolic evaluation can reduce risk." }] }
    ] }
    ],
    finalCta: { heading: "Kidney stone pain or a stone seen on scan?", text: "Book a urology consultation with Dr XXX to review stone size and location and understand whether observation, medicines, laser treatment, RIRS or PCNL is appropriate." },
  },
  {
    slug: "prostate-surgery",
    title: "Prostate Surgery in Ranchi",
    metaDescription: "Learn about prostate surgery in Ranchi at Hopewell Hospital, including enlarged prostate (BPH), urinary symptoms, PSA and ultrasound evaluation, TURP, laser prostate surgery, HoLEP where applicable, catheter care, recovery, risks, cost guidance and consultation with Dr XXX.",
    category: "Urology",
    eyebrow: "Urology & Endourology",
    heroTitle: "Prostate Surgery in Ranchi",
    heroCopy: "Surgical treatment for selected men with enlarged prostate (BPH) causing troublesome urinary symptoms, repeated retention, recurrent infection, bladder damage or other complications despite appropriate medical treatment.",
    heroCardKicker: "Prostate care from evaluation to recovery",
    heroCardTitle: "Prostate Surgery at Hopewell",
    heroCardText: "Symptom evaluation, PSA and urine testing, ultrasound/uroflow assessment, medication review, endoscopic surgery where indicated and structured catheter and recovery care.",
    doctorName: "Dr XXX",
    doctorSpecialtyMini: "Urology & Endourology",
    heroTags: ["TURP", "Laser prostate surgery", "HoLEP*", "Catheter care"],
    facts: [{ label: "Condition", value: "Enlarged Prostate / BPH" }, { label: "Evaluation", value: "PSA + USG + Uroflow" }, { label: "Procedures", value: "TURP / Laser" }, { label: "Anaesthesia*", value: "Spinal / General" }, { label: "Hospital Stay*", value: "1–3 Days" }, { label: "Catheter*", value: "Temporary" }],
    sections: [
    { id: "overview", kicker: "Overview", heading: "What is prostate surgery?", blocks: [
      { kind: "text", text: "Prostate surgery for benign prostatic hyperplasia (BPH) removes or reduces the part of the prostate that blocks urine flow. It is considered when symptoms are severe, medicines are no longer effective, or complications such as urinary retention, recurrent infection, bladder stones or kidney effects develop." }
    ] },
    { id: "symptoms", kicker: "Symptoms", heading: "Common symptoms of an enlarged prostate", blocks: [
      { kind: "twocol", boxes: [{ title: "Voiding symptoms", items: ["Weak urinary stream.", "Difficulty starting urine.", "Intermittent flow.", "Straining to urinate.", "Feeling of incomplete emptying."] }, { title: "Storage symptoms", items: ["Frequent urination.", "Urgency.", "Night-time urination.", "Occasional leakage.", "Sudden inability to pass urine."] }] }
    ] },
    { id: "urgent", kicker: "When Is It Urgent?", heading: "Seek prompt urology care if", blocks: [
      { kind: "bullets", items: ["You are unable to pass urine.", "There is fever or infection with urinary obstruction.", "Blood in urine is heavy or persistent.", "Kidney function is worsening because of blockage.", "Repeated catheterisation is required.", "Severe lower abdominal pain develops with urinary retention."] },
      { kind: "warning", text: "Acute urinary retention can require urgent catheterisation or another drainage procedure before definitive prostate treatment." }
    ] },
    { id: "diagnosis", kicker: "Diagnosis", heading: "How is prostate enlargement evaluated?", blocks: [
      { kind: "text", text: "Evaluation may include symptom scoring, physical examination, urine testing, PSA blood test, ultrasound of the urinary tract and prostate, post-void residual urine measurement and uroflowmetry. Additional tests are used when cancer, bladder dysfunction or other disease is suspected." }
    ] },
    { id: "options", kicker: "Treatment Options", heading: "Not every enlarged prostate needs surgery", blocks: [
      { kind: "grid", items: [{ title: "Observation", text: "Mild symptoms may be monitored with lifestyle measures and periodic review." }, { title: "Medicines", text: "Alpha blockers, 5-alpha-reductase inhibitors and other medicines may improve symptoms in selected patients." }, { title: "Catheterisation", text: "Temporary drainage may be required during acute urinary retention." }, { title: "TURP", text: "A common endoscopic operation that removes obstructing prostate tissue through the urinary passage." }, { title: "Laser Prostate Surgery", text: "Laser techniques can vaporise or enucleate obstructing prostate tissue in selected patients." }, { title: "Open / Simple Prostatectomy", text: "Reserved for very large glands or selected complex cases when endoscopic options are unsuitable." }] }
    ] },
    { id: "procedures", kicker: "Surgical Options", heading: "Common prostate procedures", blocks: [
      { kind: "grid", items: [{ title: "TURP", text: "Transurethral resection of the prostate uses an endoscopic instrument to remove obstructing tissue." }, { title: "Laser Vaporisation", text: "Laser energy vaporises tissue to create a wider urinary channel." }, { title: "HoLEP*", text: "Holmium laser enucleation removes larger portions of obstructing tissue and may be suitable for selected prostate sizes where available." }, { title: "Bipolar TURP", text: "A modern TURP technique using bipolar energy and saline irrigation." }, { title: "Bladder Stone Surgery", text: "Bladder stones may be treated during the same admission when related to prostate obstruction." }, { title: "Procedure Selection", text: "Depends on prostate size, bleeding risk, medicines, bladder function and local technology availability." }] }
    ] },
    { id: "procedure", kicker: "How Surgery Is Done", heading: "Your prostate surgery journey", blocks: [
      { kind: "timeline", steps: [{ num: "01", title: "Anaesthesia", text: "Spinal or general anaesthesia is used depending on the procedure and patient factors." }, { num: "02", title: "Endoscopic access", text: "The instrument is passed through the urethra, usually without an external incision." }, { num: "03", title: "Tissue removal", text: "Obstructing prostate tissue is resected, vaporised or enucleated according to the chosen technique." }, { num: "04", title: "Bleeding control", text: "Haemostasis is secured and the urinary channel is checked." }, { num: "05", title: "Catheter placement", text: "A urinary catheter is usually placed temporarily to allow drainage during early healing." }] }
    ] },
    { id: "catheter", kicker: "Catheter Care", heading: "Why is a catheter needed after prostate surgery?", blocks: [
      { kind: "text", text: "A catheter keeps urine flowing while swelling and minor bleeding settle. It may be connected to bladder irrigation for a short time after TURP or similar procedures. The catheter is usually removed once urine is sufficiently clear and the patient is ready for a voiding trial." }
    ] },
    { id: "preparation", kicker: "Preparation", heading: "Before prostate surgery", blocks: [
      { kind: "bullets", items: ["PSA, urine tests and ultrasound review.", "Uroflowmetry or residual urine measurement where indicated.", "Treatment of active urinary infection before surgery where possible.", "Pre-anaesthesia assessment.", "Blood tests and kidney-function evaluation.", "Medication review, especially blood thinners.", "Discussion of catheter duration and expected urinary symptoms after surgery."] }
    ] },
    { id: "recovery", kicker: "Recovery", heading: "Recovery after prostate surgery", blocks: [
      { kind: "twocol", boxes: [{ title: "Early recovery", text: "Burning, urgency, frequency and blood-tinged urine can occur temporarily. These usually improve as the urinary tract heals." }, { title: "Return to routine", text: "Light activity often resumes within days, while heavy lifting, cycling and strenuous work may need to be avoided for several weeks." }] }
    ] },
    { id: "sexual", kicker: "Sexual & Urinary Effects", heading: "What changes can occur after prostate surgery?", blocks: [
      { kind: "text", text: "Urine flow often improves significantly. Temporary urgency or frequency can occur during recovery. Retrograde ejaculation—where semen flows into the bladder rather than out through the penis—is common after TURP and several other prostate operations. Erectile function is usually preserved in many patients, but individual outcomes vary." },
      { kind: "warning", text: "Prostate surgery for BPH is different from prostate cancer surgery. The expected effects on continence and sexual function are not the same." }
    ] },
    { id: "risks", kicker: "Possible Risks", heading: "What risks should patients understand?", blocks: [
      { kind: "text", text: "Possible complications include bleeding, infection, temporary urinary retention, clot retention, urethral stricture, bladder-neck contracture, urinary urgency, incontinence, retrograde ejaculation, electrolyte problems in older techniques, need for repeat surgery and anaesthesia-related complications." }
    ] },
    { id: "cost", kicker: "Cost Guidance", heading: "Understanding prostate surgery cost", blocks: [
      { kind: "cost", range: "Depends on Procedure & Prostate Size", note: "Final cost depends on TURP versus laser surgery, prostate size, equipment and disposables, catheter/irrigation needs, anaesthesia, room category, associated bladder-stone treatment and length of stay.", insuranceTitle: "Insurance / TPA / Ayushman", insuranceNote: "Coverage depends on documented urinary obstruction, retention or complications, chosen procedure, policy or scheme rules, empanelment and pre-authorisation." }
    ] },
    { id: "why-hopewell", kicker: "Why Hopewell", heading: "Why choose Hopewell for prostate surgery?", blocks: [
      { kind: "grid", items: [{ title: "Endourology pathway", text: "Diagnosis, catheter care, surgery and follow-up are coordinated within one urology service." }, { title: "Procedure matched to prostate size", text: "Treatment is selected according to gland size, symptoms and medical risk." }, { title: "Minimally invasive options", text: "Endoscopic techniques are used where clinically appropriate." }, { title: "Bleeding-risk planning", text: "Medication review and peri-operative planning are important for older or anticoagulated patients." }, { title: "Catheter & voiding support", text: "Postoperative catheter management and trial of void are built into the pathway." }, { title: "Insurance assistance", text: "Support for cashless, TPA and eligible government scheme processes." }] }
    ] },
    { id: "doctor", kicker: "Doctor", heading: "Meet the urology specialist", blocks: [
      { kind: "doctor", name: "Dr XXX", specialty: "Urology & Endourology • Hopewell Hospital, Ranchi", focus: "Clinical focus may include prostate surgery, TURP, laser prostate treatment, urinary retention, kidney stone surgery and minimally invasive urology." }
    ] },
    { id: "faq", kicker: "FAQs", heading: "Frequently asked questions", blocks: [
      { kind: "faq", items: [{ q: "Does every enlarged prostate need surgery?", a: "No. Many men can be managed with observation or medicines. Surgery is usually considered when symptoms are severe, medicines are ineffective or complications develop." }, { q: "What is TURP?", a: "TURP is an endoscopic operation in which obstructing prostate tissue is removed through the urinary passage to improve urine flow." }, { q: "How long will the catheter stay after surgery?", a: "Catheter duration varies by procedure and bleeding. It is often removed within one to a few days once urine is clear and the surgeon feels it is safe." }, { q: "Will prostate surgery affect sexual function?", a: "Retrograde ejaculation is common after TURP and several other BPH procedures. Erectile function is often preserved, though individual outcomes vary." }, { q: "Can prostate tissue grow back?", a: "Some men may develop recurrent obstruction years later because residual prostate tissue can enlarge over time, though many have durable symptom relief." }, { q: "Is laser surgery better than TURP?", a: "Not always. The best option depends on prostate size, bleeding risk, equipment availability, surgeon expertise and patient factors." }] }
    ] }
    ],
    finalCta: { heading: "Weak urine flow, night urination or repeated urinary retention?", text: "Book a urology consultation with Dr XXX to review your symptoms, PSA, ultrasound and urine flow and understand whether medicines, TURP or laser prostate surgery is appropriate." },
  },
  {
    slug: "urinary-tract-infection-treatment",
    title: "Urinary Tract Infection Treatment in Ranchi",
    metaDescription: "Learn about urinary tract infection treatment in Ranchi at Hopewell Hospital, including UTI symptoms, urine tests and culture, recurrent and complicated UTI, treatment, prevention, admission warning signs, cost guidance and consultation with Dr XXX.",
    category: "Urology",
    eyebrow: "Urology & Urinary Infection Care",
    heroTitle: "Urinary Tract Infection Treatment in Ranchi",
    heroCopy: "Diagnosis and treatment of urinary tract infections ranging from simple bladder infections to recurrent, complicated and kidney infections that need closer evaluation or hospital care.",
    heroCardKicker: "Treat the infection. Find the cause.",
    heroCardTitle: "UTI Care at Hopewell",
    heroCardText: "Urine testing and culture, antibiotic selection, imaging when needed, recurrent-UTI evaluation and management of underlying causes such as stones, obstruction or catheter-related infection.",
    doctorName: "Dr XXX",
    doctorSpecialtyMini: "Urology & Urinary Infection Care",
    heroTags: ["Urine culture", "Recurrent UTI", "Complicated UTI", "Kidney infection care"],
    facts: [{ label: "Condition", value: "Urinary Tract Infection" }, { label: "Diagnosis", value: "Urine Test ± Culture" }, { label: "Treatment", value: "Targeted Medicines" }, { label: "Imaging*", value: "When Indicated" }, { label: "Admission*", value: "For Complicated Cases" }, { label: "Recurrent UTI", value: "Needs Cause Review" }],
    sections: [
    { id: "overview", kicker: "Overview", heading: "What is a urinary tract infection?", blocks: [
      { kind: "text", text: "A urinary tract infection occurs when microorganisms infect part of the urinary system, most commonly the bladder or urethra. Infection can also involve the kidneys. The correct treatment depends on symptoms, patient age, pregnancy status, recurrent infection history, kidney function and whether there is urinary obstruction or another underlying problem." }
    ] },
    { id: "symptoms", kicker: "Symptoms", heading: "Common symptoms of UTI", blocks: [
      { kind: "twocol", boxes: [{ title: "Lower urinary symptoms", items: ["Burning while passing urine.", "Frequent urination.", "Urgency.", "Lower abdominal discomfort.", "Cloudy or foul-smelling urine.", "Blood in urine in some cases."] }, { title: "Possible kidney infection", items: ["Fever or chills.", "Back or flank pain.", "Nausea or vomiting.", "Marked weakness.", "Feeling very unwell."] }] }
    ] },
    { id: "urgent", kicker: "When Is It Urgent?", heading: "Seek prompt medical assessment if", blocks: [
      { kind: "bullets", items: ["Fever or chills occur with urinary symptoms.", "There is severe flank or back pain.", "Vomiting prevents oral medicines or fluids.", "You are pregnant.", "You are elderly, diabetic, immunocompromised or have kidney disease.", "There is a urinary catheter, stone or known obstruction.", "Symptoms persist despite treatment."] },
      { kind: "warning", text: "UTI with urinary obstruction, sepsis, pregnancy or kidney involvement needs prompt medical review and may require hospital treatment." }
    ] },
    { id: "diagnosis", kicker: "Diagnosis", heading: "How is UTI diagnosed?", blocks: [
      { kind: "text", text: "Diagnosis is usually based on symptoms and urine testing. Urine culture is especially important in recurrent, complicated, male, pregnancy-related or treatment-resistant infections. Blood tests and ultrasound or CT may be needed when kidney infection, obstruction, stone disease or another structural problem is suspected." }
    ] },
    { id: "types", kicker: "Types of UTI", heading: "Not all UTIs are the same", blocks: [
      { kind: "grid", items: [{ title: "Cystitis", text: "Infection mainly affecting the bladder, often causing burning, frequency and urgency." }, { title: "Pyelonephritis", text: "Kidney infection causing fever, flank pain and systemic illness." }, { title: "Recurrent UTI", text: "Repeated episodes that may need evaluation for underlying causes." }, { title: "Complicated UTI", text: "Infection associated with stones, obstruction, catheter, male urinary tract or other risk factors." }, { title: "Catheter-Associated UTI", text: "Infection related to an indwelling urinary catheter." }, { title: "Pregnancy-Related UTI", text: "Requires particular attention because of risks to mother and pregnancy." }] }
    ] },
    { id: "treatment", kicker: "Treatment", heading: "How is UTI treated?", blocks: [
      { kind: "grid", items: [{ title: "Antibiotics", text: "Selected according to clinical situation and, where available, urine culture results." }, { title: "Hydration", text: "Adequate fluid intake is usually encouraged unless medically restricted." }, { title: "Pain Relief", text: "Medicines may be used to reduce burning, pain or fever." }, { title: "Culture-Guided Change", text: "Antibiotics may be changed when culture shows resistance or a better option." }, { title: "Drainage", text: "Obstructed infected kidneys may require urgent stent or nephrostomy drainage." }, { title: "Underlying Cause Treatment", text: "Stone, obstruction or catheter-related problems may need separate treatment." }] }
    ] },
    { id: "recurrent", kicker: "Recurrent UTI", heading: "Why does UTI keep coming back?", blocks: [
      { kind: "text", text: "Recurrent infection may be related to incomplete bladder emptying, stones, prostate enlargement, diabetes, catheterisation, sexual activity, anatomical factors or resistant organisms. A recurrent-UTI plan may include culture during episodes, ultrasound or other imaging, post-void residual measurement and selected preventive strategies." }
    ] },
    { id: "complicated", kicker: "Complicated UTI", heading: "When does a UTI need a urologist?", blocks: [
      { kind: "bullets", items: ["UTI in men.", "Repeated infections.", "Kidney stones or urinary obstruction.", "Prostate enlargement with incomplete emptying.", "Indwelling catheter or recent urological procedure.", "Persistent blood in urine.", "Infection not improving with appropriate antibiotics."] }
    ] },
    { id: "admission", kicker: "Hospital Admission", heading: "When may hospital treatment be needed?", blocks: [
      { kind: "text", text: "Admission may be required when there is sepsis, severe kidney infection, dehydration, inability to take oral medicines, pregnancy with significant infection, serious medical comorbidity or an infected blocked urinary system needing urgent drainage and intravenous antibiotics." }
    ] },
    { id: "prevention", kicker: "Prevention", heading: "Reducing the risk of recurrent UTI", blocks: [
      { kind: "bullets", items: ["Maintain adequate hydration unless medically restricted.", "Avoid unnecessarily delaying urination for long periods.", "Ensure complete bladder emptying where possible.", "Address constipation and poor diabetes control.", "Review catheter need regularly if one is present.", "Investigate recurrent infections rather than repeatedly self-treating.", "Follow culture-directed therapy and complete the prescribed course."] }
    ] },
    { id: "risks", kicker: "Possible Complications", heading: "Why should UTI not be ignored?", blocks: [
      { kind: "text", text: "Untreated or inadequately treated infection can spread to the kidneys, bloodstream or surrounding tissues. Recurrent infection can also indicate an underlying urinary problem such as obstruction, stone disease or incomplete bladder emptying that needs treatment." }
    ] },
    { id: "cost", kicker: "Cost Guidance", heading: "Understanding UTI treatment cost", blocks: [
      { kind: "cost", range: "Depends on Severity & Tests", note: "Cost varies according to consultation, urine routine and culture, blood tests, ultrasound/CT, medicines, intravenous antibiotics, hospital stay and any procedure required for obstruction or stones.", insuranceTitle: "Insurance / TPA / Ayushman", insuranceNote: "Outpatient UTI treatment may not always be covered. Admission, imaging and procedures for complicated infection may be covered depending on policy or scheme rules." }
    ] },
    { id: "why-hopewell", kicker: "Why Hopewell", heading: "Why choose Hopewell for UTI treatment?", blocks: [
      { kind: "grid", items: [{ title: "Culture-based treatment", text: "Urine culture can guide antibiotic choice in recurrent or complicated infection." }, { title: "Urology evaluation", text: "Underlying stones, obstruction or prostate problems can be investigated when needed." }, { title: "Imaging support", text: "Ultrasound or CT can be used when kidney involvement or blockage is suspected." }, { title: "Emergency drainage pathway", text: "Infected obstruction can be stabilised quickly when required." }, { title: "Recurrent UTI prevention", text: "Follow-up focuses on reducing repeat infections, not just treating each episode." }, { title: "Insurance assistance", text: "Support for eligible admission, TPA and government-scheme processes." }] }
    ] },
    { id: "doctor", kicker: "Doctor", heading: "Meet the urology specialist", blocks: [
      { kind: "doctor", name: "Dr XXX", specialty: "Urology & Urinary Infection Care • Hopewell Hospital, Ranchi", focus: "Clinical focus may include recurrent UTI, complicated urinary infection, urinary obstruction, kidney stones, prostate problems and endourology." }
    ] },
    { id: "faq", kicker: "FAQs", heading: "Frequently asked questions", blocks: [
      { kind: "faq", items: [{ q: "Can a UTI go away without antibiotics?", a: "Some mild urinary symptoms may have causes other than bacterial infection, but a true UTI often requires appropriate antibiotics. The decision depends on symptoms, risk factors and test results." }, { q: "Do I need a urine culture for every UTI?", a: "Not always. Culture is especially important for recurrent, complicated, male, pregnancy-related or treatment-resistant infections." }, { q: "Why do UTIs keep coming back?", a: "Possible causes include incomplete bladder emptying, stones, prostate enlargement, diabetes, catheterisation, anatomical factors or resistant bacteria." }, { q: "Can a UTI affect the kidneys?", a: "Yes. Infection can spread upward to the kidneys and cause fever, flank pain and more severe illness." }, { q: "When is a UTI an emergency?", a: "Fever with obstruction, severe weakness, sepsis, pregnancy, inability to take fluids, acute retention or infection in a single functioning kidney requires prompt assessment." }, { q: "Should recurrent UTI be treated by a urologist?", a: "Yes, especially when infections are frequent, occur in men, are associated with stones or obstruction, or do not respond as expected." }] }
    ] }
    ],
    finalCta: { heading: "Burning urination, fever or repeated UTI?", text: "Book a urology consultation with Dr XXX to review your symptoms, urine test or culture and understand whether simple treatment or further evaluation is needed." },
  },
  {
    slug: "kidney-transplant-evaluation",
    title: "Kidney Transplant Evaluation in Ranchi",
    metaDescription: "Kidney transplant evaluation in Ranchi at Hopewell Hospital including recipient assessment, donor screening, blood group compatibility, HLA and crossmatch planning, infection screening, cardiac fitness, dialysis review, transplant readiness and consultation with Dr XXX.",
    category: "Urology",
    eyebrow: "Kidney Care & Transplant Readiness",
    heroTitle: "Kidney Transplant Evaluation in Ranchi",
    heroCopy: "A structured evaluation for patients with advanced kidney disease who may benefit from transplantation—covering recipient fitness, donor screening, compatibility testing, infection and cardiac clearance, dialysis review and transplant referral planning.",
    heroCardKicker: "Evaluate. Optimise. Prepare.",
    heroCardTitle: "Transplant Readiness at Hopewell",
    heroCardText: "Medical assessment, donor-recipient work-up, risk optimisation, documentation support and coordination with an authorised transplant centre where transplant surgery is indicated.",
    doctorName: "Dr XXX",
    doctorSpecialtyMini: "Kidney Care, Urology & Transplant Evaluation",
    heroTags: ["Recipient evaluation", "Donor screening", "HLA / crossmatch planning", "Referral coordination"],
    facts: [{ label: "Patient", value: "CKD Stage 5 / ESRD" }, { label: "Donor Review", value: "Living Donor Screening" }, { label: "Compatibility", value: "ABO + HLA + Crossmatch" }, { label: "Fitness", value: "Cardiac + Infection Review" }, { label: "Dialysis", value: "Optimised if Needed" }, { label: "Next Step", value: "Transplant Centre Coordination" }],
    sections: [
    { id: "overview", kicker: "Overview", heading: "What is kidney transplant evaluation?", blocks: [
      { kind: "text", text: "Kidney transplant evaluation is a detailed medical and surgical assessment used to determine whether a patient with advanced kidney failure is suitable for transplantation and whether a potential donor is medically appropriate. The process also identifies problems that should be treated before a transplant is planned." }
    ] },
    { id: "who-needs", kicker: "Who Should Be Evaluated?", heading: "Patients who may benefit from transplant assessment", blocks: [
      { kind: "bullets", items: ["Chronic kidney disease approaching end-stage kidney failure.", "Patients already on haemodialysis or peritoneal dialysis.", "Patients expected to require long-term dialysis.", "Patients with a willing living donor who want early evaluation.", "Selected patients for pre-emptive transplantation before dialysis is started.", "Patients seeking a second opinion about transplant eligibility or readiness."] }
    ] },
    { id: "recipient", kicker: "Recipient Assessment", heading: "What is checked in the transplant recipient?", blocks: [
      { kind: "grid", items: [{ title: "Kidney Disease Review", text: "Cause of kidney failure, progression, dialysis history and residual kidney function." }, { title: "Cardiac Risk", text: "Blood pressure, ECG, echocardiography and further cardiac testing where indicated." }, { title: "Infection Screening", text: "Assessment for active or latent infections that may become dangerous after immunosuppression." }, { title: "Cancer Screening", text: "Age- and risk-appropriate cancer screening before transplantation." }, { title: "Vascular Assessment", text: "Blood-vessel suitability may be assessed when clinically required." }, { title: "Medication & Adherence Review", text: "Current medicines, previous treatment adherence and ability to follow long-term transplant care." }] }
    ] },
    { id: "donor", kicker: "Living Donor Assessment", heading: "What is checked in a potential kidney donor?", blocks: [
      { kind: "text", text: "A living donor must be assessed independently and carefully. The goal is not only compatibility but also long-term donor safety." },
      { kind: "bullets", items: ["Blood group and initial compatibility.", "Kidney function and urine testing.", "Blood pressure and diabetes screening.", "Imaging of both kidneys and renal blood vessels.", "Infection and relevant medical screening.", "Assessment for hereditary kidney disease where indicated.", "Psychosocial and voluntariness assessment.", "Legal documentation and relationship verification as applicable."] }
    ] },
    { id: "tests", kicker: "Tests & Compatibility", heading: "Common transplant evaluation tests", blocks: [
      { kind: "grid", items: [{ title: "ABO Blood Group", text: "Recipient and donor blood groups are reviewed for compatibility." }, { title: "HLA Typing", text: "Human leukocyte antigen testing helps assess tissue compatibility." }, { title: "Crossmatch", text: "Tests whether the recipient has antibodies likely to react against donor cells." }, { title: "Antibody Screening", text: "Sensitised patients may require additional immunological testing." }, { title: "Kidney Function Tests", text: "Creatinine, estimated GFR and other renal parameters are reviewed." }, { title: "Imaging", text: "Ultrasound, vascular or renal imaging may be required for recipient and donor planning." }] }
    ] },
    { id: "fitness", kicker: "Medical Fitness", heading: "Conditions that may need optimisation before transplant", blocks: [
      { kind: "twocol", boxes: [{ title: "Recipient optimisation", items: ["Uncontrolled diabetes.", "Severe hypertension.", "Active infection.", "Significant heart disease.", "Severe anaemia or malnutrition.", "Unresolved urological obstruction."] }, { title: "Additional reviews", items: ["Dental infection when relevant.", "Vaccination status.", "Liver disease.", "Peripheral vascular disease.", "Previous cancer history.", "Psychosocial readiness."] }] }
    ] },
    { id: "dialysis", kicker: "Dialysis Review", heading: "Transplant evaluation does not mean dialysis stops immediately", blocks: [
      { kind: "text", text: "Patients already on dialysis generally continue dialysis until transplantation is completed. During evaluation, dialysis adequacy, dry weight, vascular access, anaemia, mineral-bone disease and fluid status may need optimisation to keep the patient medically stable." }
    ] },
    { id: "legal", kicker: "Documentation & Approvals", heading: "Transplant readiness includes regulatory documentation", blocks: [
      { kind: "text", text: "Kidney transplantation in India is governed by specific transplant laws and hospital authorisation requirements. Depending on donor relationship and transplant pathway, identity, relationship, medical, consent and authorization documentation may be required before surgery at an authorised transplant centre." },
      { kind: "warning", text: "This page describes transplant evaluation and coordination. Transplant surgery should only be performed at a centre that holds the required statutory transplant authorisation." }
    ] },
    { id: "timeline", kicker: "Evaluation Pathway", heading: "How the transplant evaluation process works", blocks: [
      { kind: "timeline", steps: [{ num: "01", title: "Kidney-care consultation", text: "Review kidney disease, dialysis status and transplant suitability." }, { num: "02", title: "Recipient work-up", text: "Blood tests, cardiac evaluation, infection screening and other fitness investigations." }, { num: "03", title: "Potential donor work-up", text: "Independent donor assessment, kidney-function testing and imaging." }, { num: "04", title: "Compatibility testing", text: "ABO group, HLA typing, crossmatch and antibody testing as required." }, { num: "05", title: "Optimisation", text: "Treat infection, cardiac risk, anaemia or other problems before transplant." }, { num: "06", title: "Referral & coordination", text: "Coordinate with an authorised transplant programme for definitive approval and surgery where appropriate." }] }
    ] },
    { id: "not-eligible", kicker: "When Transplant May Be Deferred", heading: "Some conditions need treatment before proceeding", blocks: [
      { kind: "bullets", items: ["Active serious infection.", "Uncontrolled cancer or recent cancer requiring further clearance.", "Severe uncontrolled heart or vascular disease.", "Untreated major urological obstruction.", "Severe uncontrolled psychiatric or substance-use problems affecting adherence.", "Medical conditions where operative or immunosuppression risk is currently too high."] }
    ] },
    { id: "cost", kicker: "Cost Guidance", heading: "Understanding transplant evaluation cost", blocks: [
      { kind: "cost", range: "Depends on Work-Up Required", note: "Evaluation cost varies according to recipient tests, donor tests, HLA/crossmatch studies, cardiac investigations, imaging, infection screening, specialist clearances and legal/documentation requirements.", insuranceTitle: "Insurance / TPA / Government Schemes", insuranceNote: "Coverage differs for outpatient evaluation, dialysis, transplant-related investigations and surgery. Eligibility depends on scheme, insurer, empanelment and authorised transplant-centre requirements." }
    ] },
    { id: "why-hopewell", kicker: "Why Hopewell", heading: "Why choose Hopewell for kidney transplant evaluation?", blocks: [
      { kind: "grid", items: [{ title: "Structured recipient assessment", text: "Kidney disease, dialysis status, cardiac risk and infection status are reviewed systematically." }, { title: "Donor-readiness pathway", text: "Potential living donors can be screened for compatibility and safety before referral." }, { title: "Multidisciplinary clearance", text: "Cardiology, medicine, urology and other specialist reviews can be coordinated where required." }, { title: "Dialysis optimisation", text: "Patients remain medically supported while transplant work-up is completed." }, { title: "Documentation coordination", text: "Evaluation records can be organised for onward transplant-centre review." }, { title: "Continuity of kidney care", text: "Pre-transplant evaluation and post-referral follow-up can remain integrated with local care." }] }
    ] },
    { id: "doctor", kicker: "Doctor", heading: "Meet the kidney-care specialist", blocks: [
      { kind: "doctor", name: "Dr XXX", specialty: "Kidney Care, Urology & Transplant Evaluation • Hopewell Hospital, Ranchi", focus: "Clinical focus may include chronic kidney disease, dialysis readiness, transplant evaluation, donor screening, urinary obstruction and urological optimisation before transplant." }
    ] },
    { id: "faq", kicker: "FAQs", heading: "Frequently asked questions", blocks: [
      { kind: "faq", items: [{ q: "When should kidney transplant evaluation begin?", a: "Evaluation can begin before dialysis is started when kidney failure is advanced and progressive, or after dialysis has already begun." }, { q: "Does a donor need to have the same blood group?", a: "Compatibility depends on the transplant pathway. Standard ABO-compatible donation is common, while some authorised transplant programmes may offer specialised pathways for selected incompatible pairs." }, { q: "What is a crossmatch test?", a: "Crossmatch testing checks whether the recipient has antibodies that react against the donor's cells. It is a key compatibility test before transplantation." }, { q: "Can someone on dialysis still receive a transplant?", a: "Yes. Many kidney transplant recipients are already on dialysis when they are evaluated and transplanted." }, { q: "Can transplant happen before dialysis is started?", a: "In selected patients, pre-emptive transplantation may be possible when kidney failure is advanced and a suitable donor and authorised transplant pathway are available." }, { q: "Does Hopewell perform kidney transplant surgery?", a: "This page is for transplant evaluation and readiness. Definitive transplant surgery should be undertaken only at a hospital holding the required statutory transplant authorisation. Hopewell can coordinate evaluation and referral according to the patient's pathway." }] }
    ] }
    ],
    finalCta: { heading: "Advanced kidney disease or already on dialysis?", text: "Book a kidney transplant evaluation with Dr XXX to understand recipient fitness, donor screening, compatibility testing and the next steps toward an authorised transplant programme." },
  }
];

export function getUrologyProcedure(slug: string) {
  return urologyProcedures.find((p) => p.slug === slug);
}
