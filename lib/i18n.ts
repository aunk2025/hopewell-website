// Translation dictionaries for the Hindi (hi) version of the Homepage,
// Contact and Appointment pages. Every component that renders user-facing
// chrome text on those three pages accepts a `locale` prop (default "en")
// and looks its strings up here instead of hardcoding Hindi inline.
//
// Scope: UI chrome only. Real records — doctor profiles from /api/doctors
// and the patient testimonials in components/Reviews.tsx — are never
// translated or altered; they stay in the language they were written in.

export type Locale = "en" | "hi";

type Bilingual<T> = Record<Locale, T>;

export const LANGUAGE_SWITCH: Bilingual<{ label: string; name: string }> = {
  en: { label: "EN", name: "English" },
  hi: { label: "हिं", name: "हिन्दी" },
};

export const navDict: Bilingual<{
  topBarEmergency: string;
  topBarLocation: string;
  links: { home: string; doctors: string; services: string; healthPackages: string; blogs: string; contact: string };
  bookAppointment: string;
  toggleNav: string;
}> = {
  en: {
    topBarEmergency: "24×7 Emergency & Critical Care",
    topBarLocation: "Ranchi, Jharkhand",
    links: { home: "Home", doctors: "Doctors", services: "Services", healthPackages: "Health Packages", blogs: "Blogs", contact: "Contact" },
    bookAppointment: "Book Appointment",
    toggleNav: "Toggle navigation",
  },
  hi: {
    topBarEmergency: "24×7 आपातकालीन एवं गंभीर रोग सेवा",
    topBarLocation: "रांची, झारखंड",
    links: { home: "होम", doctors: "डॉक्टर", services: "सेवाएं", healthPackages: "हेल्थ पैकेज", blogs: "ब्लॉग", contact: "संपर्क करें" },
    bookAppointment: "अपॉइंटमेंट बुक करें",
    toggleNav: "मेनू खोलें/बंद करें",
  },
};

export const footerDict: Bilingual<{
  tagline: string;
  exploreHeading: string;
  explore: { doctors: string; services: string; healthPackages: string; blogs: string; bookAppointment: string; contactUs: string };
  centresHeading: string;
  centres: {
    surgery: string; ivf: string; paediatrics: string; orthopaedics: string;
    generalMedicine: string; urology: string; vascular: string; ent: string; spine: string; diagnostics: string;
  };
  contactHeading: string;
  getDirections: string;
  copyright: (year: number) => string;
}> = {
  en: {
    tagline: "Advanced surgical and medical care designed around safety, coordination and compassion.",
    exploreHeading: "Explore",
    explore: { doctors: "Doctors", services: "Services", healthPackages: "Health Packages", blogs: "Blogs", bookAppointment: "Book Appointment", contactUs: "Contact Us" },
    centresHeading: "Centres of Excellence",
    centres: {
      surgery: "General, GI & Laparoscopic Surgery",
      ivf: "IVF, Gynaecology & Women's Health",
      paediatrics: "Paediatrics & Neonatology",
      orthopaedics: "Orthopaedics & Joint Replacement",
      generalMedicine: "General Medicine",
      urology: "Urology",
      vascular: "Vascular Surgery",
      ent: "ENT",
      spine: "Spine",
      diagnostics: "Diagnostics",
    },
    contactHeading: "Contact",
    getDirections: "Get directions",
    copyright: (year) => `© ${year} Hopewell Hospital, Ranchi. All rights reserved.`,
  },
  hi: {
    tagline: "सुरक्षा, समन्वय एवं करुणा को केंद्र में रखकर डिज़ाइन की गई उन्नत सर्जिकल एवं मेडिकल केयर।",
    exploreHeading: "एक्सप्लोर करें",
    explore: { doctors: "डॉक्टर", services: "सेवाएं", healthPackages: "हेल्थ पैकेज", blogs: "ब्लॉग", bookAppointment: "अपॉइंटमेंट बुक करें", contactUs: "संपर्क करें" },
    centresHeading: "उत्कृष्टता केंद्र",
    centres: {
      surgery: "जनरल, जीआई एवं लेप्रोस्कोपिक सर्जरी",
      ivf: "आईवीएफ, स्त्री रोग एवं महिला स्वास्थ्य",
      paediatrics: "पीडियाट्रिक्स एवं नियोनेटोलॉजी",
      orthopaedics: "ऑर्थोपेडिक्स एवं जॉइंट रिप्लेसमेंट",
      generalMedicine: "जनरल मेडिसिन",
      urology: "यूरोलॉजी",
      vascular: "वैस्कुलर सर्जरी",
      ent: "ईएनटी",
      spine: "स्पाइन",
      diagnostics: "डायग्नोस्टिक्स",
    },
    contactHeading: "संपर्क करें",
    getDirections: "दिशा-निर्देश प्राप्त करें",
    copyright: (year) => `© ${year} हॉपवेल हॉस्पिटल, रांची। सर्वाधिकार सुरक्षित।`,
  },
};

export const heroDict: Bilingual<{
  kicker: string;
  h1: string;
  paragraph: string;
  bookAppointment: string;
  exploreCentres: string;
  stats: [string, string][];
  cardTitle: string;
  cardHeading: string;
  journeyKicker: string;
  journeyHeading: string;
  journeyText: string;
}> = {
  en: {
    kicker: "Trusted Care. Healing Ranchi. Serving Jharkhand.",
    h1: "Advanced Multispeciality Healthcare in Ranchi",
    paragraph:
      "Hopewell Hospital is a modern 70 bed multispeciality hospital in Ranchi, Jharkhand, combining advanced medical and surgical care, experienced specialists and compassionate, patient centred healthcare.",
    bookAppointment: "Book an Appointment",
    exploreCentres: "Explore Centres of Excellence",
    stats: [["24×7", "Emergency"], ["70", "Advanced Beds"], ["8+", "Specialty Centres"]],
    cardTitle: "Advanced Medicine",
    cardHeading: "Compassionate Care",
    journeyKicker: "Patient Journey",
    journeyHeading: "One coordinated pathway",
    journeyText: "From first enquiry to recovery and follow-up.",
  },
  hi: {
    kicker: "भरोसेमंद इलाज। रांची को स्वस्थ बनाना। झारखंड की सेवा।",
    h1: "रांची में उन्नत मल्टीस्पेशलिटी स्वास्थ्य सेवा",
    paragraph:
      "हॉपवेल हॉस्पिटल रांची, झारखंड का एक आधुनिक 70 बेड मल्टीस्पेशलिटी हॉस्पिटल है, जो उन्नत मेडिकल एवं सर्जिकल केयर, अनुभवी विशेषज्ञों और दयालु, रोगी केंद्रित स्वास्थ्य सेवा को एक साथ लाता है।",
    bookAppointment: "अपॉइंटमेंट बुक करें",
    exploreCentres: "उत्कृष्टता केंद्र देखें",
    stats: [["24×7", "आपातकालीन सेवा"], ["70", "एडवांस्ड बेड"], ["8+", "विशेषज्ञ केंद्र"]],
    cardTitle: "उन्नत चिकित्सा",
    cardHeading: "दयालु देखभाल",
    journeyKicker: "रोगी यात्रा",
    journeyHeading: "एक समन्वित मार्ग",
    journeyText: "पहली पूछताछ से लेकर स्वास्थ्य लाभ एवं फॉलो-अप तक।",
  },
};

export const trustRailDict: Bilingual<{ items: string[] }> = {
  en: { items: ["Compassion-led", "Technology-enabled", "Safety designed", "24×7 coordinated", "Outcome focused"] },
  hi: { items: ["दयालु देखभाल", "तकनीक-सक्षम", "सुरक्षा केंद्रित", "24×7 समन्वित", "परिणाम उन्मुख"] },
};

export const centresDict: Bilingual<{
  kicker: string;
  h2: string;
  subtitle: string;
  exploreCentre: string;
  viewAll: string;
  items: {
    surgery: { name: string; text: string; stat: string; items: string[] };
    ivf: { name: string; text: string; stat: string; items: string[] };
    generalMedicine: { name: string; text: string; stat: string; items: string[] };
    ortho: { name: string; text: string; stat: string; items: string[] };
  };
}> = {
  en: {
    kicker: "Centres of Excellence",
    h2: "Specialized care, connected as one intelligent system.",
    subtitle:
      "Instead of making patients navigate departments, Hopewell connects expertise, diagnostics, critical care and recovery around the patient.",
    exploreCentre: "Explore centre",
    viewAll: "View all specialities",
    items: {
      surgery: {
        name: "General, GI & Laparoscopic Surgery",
        text: "Precision-led general, laparoscopic and gastrointestinal surgery.",
        stat: "Advanced OT",
        items: ["Gallbladder Surgery", "Hernia Surgery", "Appendix Surgery", "Laser Piles Treatment", "Fistula Treatment", "Fissure Treatment", "ERCP", "GI Surgery", "Colorectal Surgery", "Varicose Vein Treatment"],
      },
      ivf: {
        name: "IVF, Gynaecology & Women's Health",
        text: "Personalized fertility evaluation, gynaecological care and assisted reproduction.",
        stat: "Fertility care",
        items: ["IVF", "Infertility Treatment", "Laparoscopic Gynaecology", "Hysterectomy", "Fibroid Treatment", "High-Risk Pregnancy"],
      },
      generalMedicine: {
        name: "General Medicine",
        text: "Everyday medical care for common illnesses, chronic conditions and preventive health check-ups.",
        stat: "Preventive care",
        items: ["Preventive Health Checkups", "Chronic Disease Management", "Diabetes & Hypertension Care", "Fever & Infection Care", "Infectious Disease"],
      },
      ortho: {
        name: "Orthopaedics & Joint Replacement",
        text: "Joint preservation, trauma care and advanced mobility restoration.",
        stat: "Mobility",
        items: ["Knee Replacement", "Hip Replacement", "Arthroscopy", "ACL Reconstruction", "Fracture Surgery", "Sports Medicine", "Spine Procedures"],
      },
    },
  },
  hi: {
    kicker: "उत्कृष्टता केंद्र",
    h2: "विशेषीकृत देखभाल, एक बुद्धिमान प्रणाली के रूप में जुड़ी हुई।",
    subtitle:
      "रोगियों को विभागों में भटकाने के बजाय, हॉपवेल विशेषज्ञता, डायग्नोस्टिक्स, गंभीर देखभाल एवं स्वास्थ्य लाभ को रोगी के इर्द-गिर्द जोड़ता है।",
    exploreCentre: "केंद्र देखें",
    viewAll: "सभी विशेषताएं देखें",
    items: {
      surgery: {
        name: "जनरल, जीआई एवं लेप्रोस्कोपिक सर्जरी",
        text: "सटीकता-आधारित जनरल, लेप्रोस्कोपिक एवं गैस्ट्रोइंटेस्टाइनल सर्जरी।",
        stat: "एडवांस्ड ओटी",
        items: ["पित्ताशय की सर्जरी", "हर्निया सर्जरी", "अपेंडिक्स सर्जरी", "लेज़र पाइल्स उपचार", "फिस्टुला उपचार", "फिशर उपचार", "ईआरसीपी", "जीआई सर्जरी", "कोलोरेक्टल सर्जरी", "वेरिकोज़ वेन उपचार"],
      },
      ivf: {
        name: "आईवीएफ, स्त्री रोग एवं महिला स्वास्थ्य",
        text: "व्यक्तिगत फर्टिलिटी मूल्यांकन, स्त्री रोग देखभाल एवं सहायक प्रजनन सेवाएं।",
        stat: "फर्टिलिटी केयर",
        items: ["आईवीएफ", "इनफर्टिलिटी उपचार", "लेप्रोस्कोपिक स्त्री रोग", "हिस्टेरेक्टॉमी", "फाइब्रॉइड उपचार", "हाई-रिस्क प्रेगनेंसी"],
      },
      generalMedicine: {
        name: "जनरल मेडिसिन",
        text: "सामान्य बीमारियों, पुरानी स्थितियों एवं निवारक स्वास्थ्य जांच के लिए दैनिक चिकित्सा देखभाल।",
        stat: "निवारक देखभाल",
        items: ["निवारक स्वास्थ्य जांच", "क्रॉनिक डिजीज मैनेजमेंट", "डायबिटीज एवं हाइपरटेंशन केयर", "बुखार एवं संक्रमण देखभाल", "संक्रामक रोग"],
      },
      ortho: {
        name: "ऑर्थोपेडिक्स एवं जॉइंट रिप्लेसमेंट",
        text: "जॉइंट संरक्षण, ट्रॉमा केयर एवं उन्नत मोबिलिटी रिकवरी।",
        stat: "मोबिलिटी",
        items: ["नी रिप्लेसमेंट", "हिप रिप्लेसमेंट", "आर्थ्रोस्कोपी", "एसीएल रिकंस्ट्रक्शन", "फ्रैक्चर सर्जरी", "स्पोर्ट्स मेडिसिन", "स्पाइन प्रक्रियाएं"],
      },
    },
  },
};

export const journeyDict: Bilingual<{
  kicker: string;
  h2Line1: string;
  h2Line2: string;
  promises: { title: string; text: string }[];
  closing: string;
}> = {
  en: {
    kicker: "The Hopewell Promise",
    h2Line1: "What you should expect",
    h2Line2: "from every Hopewell experience.",
    promises: [
      { title: "You will know what happens next.", text: "We believe patients and families should understand the next step in their care." },
      { title: "Your time will be respected.", text: "Our workflows are designed to reduce avoidable waiting, repeated movement and unnecessary delays." },
      { title: "Your care will be connected.", text: "Doctors, nursing, diagnostics, pharmacy and support teams work as one coordinated care system." },
      { title: "You will be heard.", text: "Questions, concerns and feedback are part of care, not an interruption to it." },
      { title: "Safety will come before convenience.", text: "Clinical protocols, medication safety, infection control and escalation systems are built into everyday operations." },
      { title: "Your family will remain informed.", text: "Especially during emergency, surgery and critical care, communication with attendants should never become an afterthought." },
    ],
    closing: "You shouldn't have to understand how a hospital works to receive good healthcare. It is our responsibility to make the hospital work for you.",
  },
  hi: {
    kicker: "द हॉपवेल प्रॉमिस",
    h2Line1: "हर हॉपवेल अनुभव से",
    h2Line2: "आपको यह अपेक्षा रखनी चाहिए।",
    promises: [
      { title: "आपको पता रहेगा कि आगे क्या होगा।", text: "हमारा मानना है कि रोगियों एवं परिवारों को अपनी देखभाल के अगले चरण की जानकारी होनी चाहिए।" },
      { title: "आपके समय का सम्मान किया जाएगा।", text: "हमारी कार्यप्रणाली अनावश्यक प्रतीक्षा, बार-बार आने-जाने एवं अनावश्यक देरी को कम करने के लिए बनाई गई है।" },
      { title: "आपकी देखभाल जुड़ी हुई होगी।", text: "डॉक्टर, नर्सिंग, डायग्नोस्टिक्स, फार्मेसी एवं सहायक टीमें एक समन्वित देखभाल प्रणाली के रूप में कार्य करती हैं।" },
      { title: "आपकी बात सुनी जाएगी।", text: "प्रश्न, चिंताएं एवं फीडबैक देखभाल का हिस्सा हैं, न कि उसमें बाधा।" },
      { title: "सुविधा से पहले सुरक्षा को प्राथमिकता दी जाएगी।", text: "क्लिनिकल प्रोटोकॉल, दवा सुरक्षा, संक्रमण नियंत्रण एवं एस्केलेशन सिस्टम हमारी दैनिक कार्यप्रणाली में शामिल हैं।" },
      { title: "आपके परिवार को हर जानकारी मिलती रहेगी।", text: "विशेष रूप से आपातकाल, सर्जरी एवं गंभीर देखभाल के दौरान, परिजनों से संवाद को कभी भी नज़रअंदाज़ नहीं किया जाना चाहिए।" },
    ],
    closing: "अच्छी स्वास्थ्य सेवा पाने के लिए आपको यह समझने की ज़रूरत नहीं कि हॉस्पिटल कैसे काम करता है। हॉस्पिटल को आपके लिए सुगम बनाना हमारी ज़िम्मेदारी है।",
  },
};

export const doctorsDict: Bilingual<{
  kicker: string;
  h2: string;
  searchPlaceholder: string;
  searchLabel: string;
  available: string;
  viewProfile: string;
  loading: string;
  noMatch: string;
  moreDoctors: string;
}> = {
  en: {
    kicker: "Find a Doctor",
    h2: "Expertise made easier to discover.",
    searchPlaceholder: "Search by doctor or speciality",
    searchLabel: "Search doctors",
    available: "Available",
    viewProfile: "View Profile",
    loading: "Loading doctors…",
    noMatch: "No matching doctor found.",
    moreDoctors: "More Doctors",
  },
  hi: {
    kicker: "डॉक्टर खोजें",
    h2: "विशेषज्ञता को खोजना हुआ आसान।",
    searchPlaceholder: "डॉक्टर या विशेषता से खोजें",
    searchLabel: "डॉक्टर खोजें",
    available: "उपलब्ध",
    viewProfile: "प्रोफ़ाइल देखें",
    loading: "डॉक्टर लोड हो रहे हैं…",
    noMatch: "कोई मेल खाता डॉक्टर नहीं मिला।",
    moreDoctors: "और डॉक्टर देखें",
  },
};

export const reviewsDict: Bilingual<{ kicker: string; h2: string; subtitle: string; loadMore: string }> = {
  en: {
    kicker: "Patient Voices",
    h2: "What our patients say.",
    subtitle: "Real reviews from patients and families cared for at Hopewell Hospital.",
    loadMore: "Load more reviews",
  },
  hi: {
    kicker: "रोगियों की राय",
    h2: "हमारे रोगी क्या कहते हैं।",
    subtitle: "हॉपवेल हॉस्पिटल में उपचार करा चुके रोगियों एवं परिवारों की असली प्रतिक्रियाएं।",
    loadMore: "और रिव्यू देखें",
  },
};

export const contactDict: Bilingual<{
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  heroKicker: string;
  h1: string;
  heroParagraph: string;
  bookAppointment: string;
  emergencyHelp: string;
  getDirectionsBtn: string;
  quickAccessHeading: string;
  quickAccess: { label: string; text: string }[];
  optionsHeading: string;
  optionsSubtitle: string;
  optionCards: { title: string; text: string }[];
  contactThisTeam: string;
  findHospital: string;
  planVisit: string;
  hospitalAddress: string;
  byCar: string;
  byCarText: string;
  byAmbulance: string;
  byAmbulanceText: string;
  publicTransport: string;
  publicTransportText: string;
  openInMaps: string;
  getDirections: string;
  formHeading: string;
  formSubtitle: string;
  successHeading: string;
  successText: string;
  submitAnother: string;
  fullName: string;
  fullNamePlaceholder: string;
  mobileNumber: string;
  emailAddress: string;
  enquiryType: string;
  department: string;
  selectIfApplicable: string;
  preferredDateTime: string;
  preferredDateTimePlaceholder: string;
  message: string;
  messagePlaceholder: string;
  consent: string;
  errorMessage: string;
  sending: string;
  submit: string;
  emergencyNote: (phone: string) => string;
  departments: string[];
  enquiryTypeLabels: Record<string, string>;
}> = {
  en: {
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Contact Hopewell",
    heroKicker: "Contact Hopewell",
    h1: "How can we help you today?",
    heroParagraph:
      "Whether you need an appointment, emergency assistance, directions, ambulance support, insurance guidance, career information or a corporate enquiry, we will help connect you to the appropriate Hopewell team.",
    bookAppointment: "Book Appointment",
    emergencyHelp: "Emergency Help",
    getDirectionsBtn: "Get Directions",
    quickAccessHeading: "Choose what you need",
    quickAccess: [
      { label: "Emergency", text: "Urgent help and hospital access" },
      { label: "Appointments", text: "OPD and specialist booking" },
      { label: "Ambulance", text: "Transport and patient transfer assistance" },
      { label: "TPA / Insurance", text: "Cashless and insurance enquiries" },
      { label: "Careers", text: "Recruitment and job enquiries" },
      { label: "Feedback", text: "Share your experience with us" },
    ],
    optionsHeading: "Reach the right team directly",
    optionsSubtitle: "Each enquiry is different. Choose the appropriate category so your request can reach the correct department without unnecessary delay.",
    optionCards: [
      { title: "Emergency", text: "For urgent medical conditions and emergency hospital access." },
      { title: "Appointments", text: "Book consultations with Hopewell specialist doctors." },
      { title: "Ambulance", text: "Request ambulance assistance or patient-transfer support." },
      { title: "Feedback", text: "Compliments, concerns, suggestions and patient-experience feedback." },
      { title: "Corporate Enquiries", text: "Corporate tie-ups, employee healthcare, health check-ups and institutional services." },
      { title: "TPA / Insurance Enquiries", text: "Cashless treatment, insurance documentation, TPA coordination and pre-authorisation support." },
      { title: "Career Enquiries", text: "Open positions, recruitment, interviews and joining-related enquiries." },
      { title: "Media Enquiries", text: "Press, interviews and authorised hospital communications." },
      { title: "General Enquiries", text: "For requests that do not fall into another category." },
    ],
    contactThisTeam: "Contact this team",
    findHospital: "Find Hopewell Hospital",
    planVisit: "Plan Your Visit",
    hospitalAddress: "Hospital Address",
    byCar: "By Car",
    byCarText: "Landmark-based driving directions will be added here. Please use the map or call ahead for the best route to the hospital.",
    byAmbulance: "By Ambulance",
    byAmbulanceText: "For emergency ambulance access, call our emergency line so the team can guide you to the correct hospital entrance.",
    publicTransport: "Public Transport",
    publicTransportText: "Nearby transport and landmark information will be added here.",
    openInMaps: "Open in Google Maps",
    getDirections: "Get Directions",
    formHeading: "Contact Hopewell",
    formSubtitle: "Tell us how we can help. Select the appropriate enquiry type and our team will receive your request.",
    successHeading: "Thank you",
    successText: "Your enquiry has been submitted successfully. The Hopewell team will contact you shortly.",
    submitAnother: "Submit another enquiry",
    fullName: "Full Name *",
    fullNamePlaceholder: "Your full name",
    mobileNumber: "Mobile Number *",
    emailAddress: "Email Address",
    enquiryType: "Enquiry Type *",
    department: "Department / Service",
    selectIfApplicable: "Select if applicable",
    preferredDateTime: "Preferred Date / Time",
    preferredDateTimePlaceholder: "e.g. Weekday mornings, or a specific date",
    message: "Message *",
    messagePlaceholder: "Tell us how we can help…",
    consent: "I consent to Hopewell Hospital contacting me regarding this enquiry. I understand that this website form should not be used for a life-threatening medical emergency. *",
    errorMessage: "We could not submit your enquiry at this time. Please try again or contact Hopewell Hospital directly.",
    sending: "Sending your enquiry...",
    submit: "Submit Enquiry",
    emergencyNote: (phone) => `For life-threatening emergencies, please call ${phone} directly instead of using this form.`,
    departments: [
      "General, GI & Laparoscopic Surgery",
      "Orthopaedics & Joint Replacement",
      "IVF, Gynaecology & Women's Health",
      "Paediatrics & Neonatology",
      "Urology",
      "Vascular Surgery",
      "ENT",
      "Spine",
      "Diagnostics",
      "General Medicine",
    ],
    enquiryTypeLabels: {
      Appointment: "Appointment",
      Emergency: "Emergency",
      Ambulance: "Ambulance",
      Feedback: "Feedback",
      "Corporate Enquiry": "Corporate Enquiry",
      "TPA / Insurance Enquiry": "TPA / Insurance Enquiry",
      "Career Enquiry": "Career Enquiry",
      "Media Enquiry": "Media Enquiry",
      "General Enquiry": "General Enquiry",
    },
  },
  hi: {
    breadcrumbHome: "होम",
    breadcrumbCurrent: "हॉपवेल से संपर्क करें",
    heroKicker: "हॉपवेल से संपर्क करें",
    h1: "आज हम आपकी किस प्रकार सहायता कर सकते हैं?",
    heroParagraph:
      "चाहे आपको अपॉइंटमेंट, आपातकालीन सहायता, दिशा-निर्देश, एम्बुलेंस सहायता, बीमा संबंधी जानकारी, करियर संबंधी जानकारी या कॉर्पोरेट पूछताछ की आवश्यकता हो, हम आपको हॉपवेल की संबंधित टीम से जोड़ने में मदद करेंगे।",
    bookAppointment: "अपॉइंटमेंट बुक करें",
    emergencyHelp: "आपातकालीन सहायता",
    getDirectionsBtn: "दिशा-निर्देश प्राप्त करें",
    quickAccessHeading: "अपनी आवश्यकता चुनें",
    quickAccess: [
      { label: "आपातकाल", text: "तुरंत सहायता एवं हॉस्पिटल पहुंच" },
      { label: "अपॉइंटमेंट", text: "ओपीडी एवं विशेषज्ञ बुकिंग" },
      { label: "एम्बुलेंस", text: "परिवहन एवं रोगी स्थानांतरण सहायता" },
      { label: "टीपीए / बीमा", text: "कैशलेस एवं बीमा संबंधी पूछताछ" },
      { label: "करियर", text: "भर्ती एवं नौकरी संबंधी पूछताछ" },
      { label: "फीडबैक", text: "हमारे साथ अपना अनुभव साझा करें" },
    ],
    optionsHeading: "सीधे सही टीम से संपर्क करें",
    optionsSubtitle: "हर पूछताछ अलग होती है। सही श्रेणी चुनें ताकि आपका अनुरोध बिना किसी देरी के सही विभाग तक पहुंच सके।",
    optionCards: [
      { title: "आपातकाल", text: "आपातकालीन चिकित्सा स्थितियों एवं हॉस्पिटल पहुंच के लिए।" },
      { title: "अपॉइंटमेंट", text: "हॉपवेल के विशेषज्ञ डॉक्टरों के साथ कंसल्टेशन बुक करें।" },
      { title: "एम्बुलेंस", text: "एम्बुलेंस सहायता या रोगी स्थानांतरण सहायता के लिए अनुरोध करें।" },
      { title: "फीडबैक", text: "प्रशंसा, चिंताएं, सुझाव एवं रोगी अनुभव से जुड़ा फीडबैक।" },
      { title: "कॉर्पोरेट पूछताछ", text: "कॉर्पोरेट टाई-अप, कर्मचारी स्वास्थ्य सेवा, स्वास्थ्य जांच एवं संस्थागत सेवाएं।" },
      { title: "टीपीए / बीमा पूछताछ", text: "कैशलेस उपचार, बीमा दस्तावेज़ीकरण, टीपीए समन्वय एवं प्री-ऑथराइज़ेशन सहायता।" },
      { title: "करियर पूछताछ", text: "रिक्त पद, भर्ती, इंटरव्यू एवं जॉइनिंग संबंधी पूछताछ।" },
      { title: "मीडिया पूछताछ", text: "प्रेस, इंटरव्यू एवं हॉस्पिटल की अधिकृत जानकारी।" },
      { title: "सामान्य पूछताछ", text: "उन अनुरोधों के लिए जो किसी अन्य श्रेणी में नहीं आते।" },
    ],
    contactThisTeam: "इस टीम से संपर्क करें",
    findHospital: "हॉपवेल हॉस्पिटल खोजें",
    planVisit: "अपनी यात्रा की योजना बनाएं",
    hospitalAddress: "हॉस्पिटल का पता",
    byCar: "कार द्वारा",
    byCarText: "लैंडमार्क आधारित ड्राइविंग दिशा-निर्देश यहां जोड़े जाएंगे। कृपया मैप का उपयोग करें या हॉस्पिटल तक सबसे अच्छे रूट के लिए पहले से कॉल करें।",
    byAmbulance: "एम्बुलेंस द्वारा",
    byAmbulanceText: "आपातकालीन एम्बुलेंस पहुंच के लिए, हमारी आपातकालीन लाइन पर कॉल करें ताकि टीम आपको हॉस्पिटल के सही प्रवेश द्वार तक मार्गदर्शन कर सके।",
    publicTransport: "सार्वजनिक परिवहन",
    publicTransportText: "नज़दीकी परिवहन एवं लैंडमार्क की जानकारी यहां जोड़ी जाएगी।",
    openInMaps: "गूगल मैप्स में खोलें",
    getDirections: "दिशा-निर्देश प्राप्त करें",
    formHeading: "हॉपवेल से संपर्क करें",
    formSubtitle: "हमें बताएं कि हम कैसे मदद कर सकते हैं। उपयुक्त पूछताछ प्रकार चुनें और हमारी टीम को आपका अनुरोध प्राप्त होगा।",
    successHeading: "धन्यवाद",
    successText: "आपकी पूछताछ सफलतापूर्वक सबमिट हो गई है। हॉपवेल टीम शीघ्र ही आपसे संपर्क करेगी।",
    submitAnother: "एक और पूछताछ सबमिट करें",
    fullName: "पूरा नाम *",
    fullNamePlaceholder: "आपका पूरा नाम",
    mobileNumber: "मोबाइल नंबर *",
    emailAddress: "ईमेल पता",
    enquiryType: "पूछताछ का प्रकार *",
    department: "विभाग / सेवा",
    selectIfApplicable: "यदि लागू हो तो चुनें",
    preferredDateTime: "पसंदीदा तारीख / समय",
    preferredDateTimePlaceholder: "जैसे सप्ताह के दिनों की सुबह, या कोई विशेष तारीख",
    message: "संदेश *",
    messagePlaceholder: "हमें बताएं कि हम कैसे मदद कर सकते हैं…",
    consent: "मैं सहमति देता/देती हूं कि हॉपवेल हॉस्पिटल इस पूछताछ के संबंध में मुझसे संपर्क करे। मैं समझता/समझती हूं कि इस वेबसाइट फॉर्म का उपयोग जीवन-घातक मेडिकल आपातकाल के लिए नहीं किया जाना चाहिए। *",
    errorMessage: "इस समय हम आपकी पूछताछ सबमिट नहीं कर सके। कृपया पुनः प्रयास करें या सीधे हॉपवेल हॉस्पिटल से संपर्क करें।",
    sending: "आपकी पूछताछ भेजी जा रही है...",
    submit: "पूछताछ सबमिट करें",
    emergencyNote: (phone) => `जीवन-घातक आपातकाल की स्थिति में, कृपया इस फॉर्म का उपयोग करने के बजाय सीधे ${phone} पर कॉल करें।`,
    departments: [
      "General, GI & Laparoscopic Surgery",
      "Orthopaedics & Joint Replacement",
      "IVF, Gynaecology & Women's Health",
      "Paediatrics & Neonatology",
      "Urology",
      "Vascular Surgery",
      "ENT",
      "Spine",
      "Diagnostics",
      "General Medicine",
    ],
    enquiryTypeLabels: {
      Appointment: "अपॉइंटमेंट",
      Emergency: "आपातकाल",
      Ambulance: "एम्बुलेंस",
      Feedback: "फीडबैक",
      "Corporate Enquiry": "कॉर्पोरेट पूछताछ",
      "TPA / Insurance Enquiry": "टीपीए / बीमा पूछताछ",
      "Career Enquiry": "करियर पूछताछ",
      "Media Enquiry": "मीडिया पूछताछ",
      "General Enquiry": "सामान्य पूछताछ",
    },
  },
};

export const appointmentDict: Bilingual<{
  steps: string[];
  h1: string;
  subtitle: string;
  selectDoctor: string;
  showingSpecialists: (specialty: string) => string;
  anyDoctor: string;
  anyDoctorText: string;
  selectDate: string;
  selectTime: string;
  continueBtn: string;
  patientInformation: string;
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  fullNamePlaceholder: string;
  phonePlaceholder: string;
  emailPlaceholder: string;
  reasonForVisit: string;
  reasonPlaceholder: string;
  back: string;
  reviewBooking: string;
  confirmBooking: string;
  summaryLabels: { doctor: string; date: string; time: string; patient: string; phone: string; email: string; reason: string };
  confirmAppointment: string;
  booking: string;
  appointmentBooked: string;
  refNumberText: string;
  confirmationSentText: (email: string) => string;
  backToHome: string;
  invalidFieldsError: string;
  genericError: string;
}> = {
  en: {
    steps: ["Doctor & Date", "Patient Details", "Confirm"],
    h1: "Book an Appointment",
    subtitle: "Choose your doctor, date, and time in just a few steps.",
    selectDoctor: "Select Doctor (Optional)",
    showingSpecialists: (specialty) => `Showing ${specialty} specialists`,
    anyDoctor: "Any Available Doctor",
    anyDoctorText: "We'll assign the best match",
    selectDate: "Select Date",
    selectTime: "Select Time",
    continueBtn: "Continue to Patient Details",
    patientInformation: "Patient Information",
    fullName: "Full Name",
    phoneNumber: "Phone Number",
    emailAddress: "Email Address",
    fullNamePlaceholder: "Your full name",
    phonePlaceholder: "+91 XXXXX XXXXX",
    emailPlaceholder: "you@example.com",
    reasonForVisit: "Reason for Visit",
    reasonPlaceholder: "Brief description of your symptoms or reason…",
    back: "Back",
    reviewBooking: "Review Booking",
    confirmBooking: "Confirm Your Booking",
    summaryLabels: { doctor: "Doctor", date: "Date", time: "Time", patient: "Patient", phone: "Phone", email: "Email", reason: "Reason" },
    confirmAppointment: "Confirm Appointment",
    booking: "Booking…",
    appointmentBooked: "Appointment Booked!",
    refNumberText: "Your booking reference number is:",
    confirmationSentText: (email) => `A confirmation has been sent to ${email}. Please arrive 15 minutes before your scheduled time.`,
    backToHome: "Back to Home",
    invalidFieldsError: "Please check the highlighted fields and try again.",
    genericError: "Something went wrong",
  },
  hi: {
    steps: ["डॉक्टर एवं तारीख", "रोगी विवरण", "पुष्टि"],
    h1: "अपॉइंटमेंट बुक करें",
    subtitle: "कुछ ही चरणों में अपने डॉक्टर, तारीख एवं समय चुनें।",
    selectDoctor: "डॉक्टर चुनें (वैकल्पिक)",
    showingSpecialists: (specialty) => `${specialty} विशेषज्ञ दिखाए जा रहे हैं`,
    anyDoctor: "कोई भी उपलब्ध डॉक्टर",
    anyDoctorText: "हम सबसे उपयुक्त डॉक्टर नियुक्त करेंगे",
    selectDate: "तारीख चुनें",
    selectTime: "समय चुनें",
    continueBtn: "रोगी विवरण जारी रखें",
    patientInformation: "रोगी की जानकारी",
    fullName: "पूरा नाम",
    phoneNumber: "फ़ोन नंबर",
    emailAddress: "ईमेल पता",
    fullNamePlaceholder: "आपका पूरा नाम",
    phonePlaceholder: "+91 XXXXX XXXXX",
    emailPlaceholder: "you@example.com",
    reasonForVisit: "विज़िट का कारण",
    reasonPlaceholder: "अपने लक्षणों या कारण का संक्षिप्त विवरण…",
    back: "पीछे",
    reviewBooking: "बुकिंग देखें",
    confirmBooking: "अपनी बुकिंग की पुष्टि करें",
    summaryLabels: { doctor: "डॉक्टर", date: "तारीख", time: "समय", patient: "रोगी", phone: "फ़ोन", email: "ईमेल", reason: "कारण" },
    confirmAppointment: "अपॉइंटमेंट पुष्टि करें",
    booking: "बुकिंग हो रही है…",
    appointmentBooked: "अपॉइंटमेंट बुक हो गया!",
    refNumberText: "आपका बुकिंग संदर्भ नंबर है:",
    confirmationSentText: (email) => `एक पुष्टिकरण ${email} पर भेजा गया है। कृपया अपने निर्धारित समय से 15 मिनट पहले पहुंचें।`,
    backToHome: "होम पर वापस जाएं",
    invalidFieldsError: "कृपया हाइलाइट किए गए फ़ील्ड जांचें और पुनः प्रयास करें।",
    genericError: "कुछ गड़बड़ हो गई",
  },
};
