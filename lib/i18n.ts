// Translation dictionaries for the Hindi (hi) version of the site. Every
// component that renders user-facing chrome text accepts a `locale` prop
// (default "en") and looks its strings up here instead of hardcoding Hindi
// inline.
//
// Scope: UI chrome (plus, for Services/Doctors/Health Packages, the short
// card/list labels) is translated here. Real records — doctor profiles from
// /api/doctors and the patient testimonials in components/Reviews.tsx — are
// never translated or altered. Full procedure-page and blog-article body
// content is translated separately (parallel `*-hi.ts` content files), not
// in this dictionary, because of its length and medical-accuracy stakes.

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

// Chrome for components/services/ProcedurePageTemplate.tsx — shared by all
// ~63 procedure pages. The procedure's own content (hero text, sections,
// FAQs, facts) is translated separately per procedure (parallel `*-hi.ts`
// content files), not here.
export const procedureChromeDict: Bilingual<{
  breadcrumbServices: string;
  getCostEstimate: string;
  onThisPage: string;
  bookAppointment: string;
  callHospital: string;
  footnote: string;
  bookConsultation: string;
}> = {
  en: {
    breadcrumbServices: "Services",
    getCostEstimate: "Get Cost Estimate",
    onThisPage: "On this page",
    bookAppointment: "Book Appointment",
    callHospital: "Call Hospital",
    footnote:
      "*Procedure time, hospital stay and recovery are indicative and vary by individual clinical condition. This page is for patient education and does not replace medical consultation.",
    bookConsultation: "Book Consultation",
  },
  hi: {
    breadcrumbServices: "सेवाएं",
    getCostEstimate: "कॉस्ट एस्टिमेट प्राप्त करें",
    onThisPage: "इस पेज पर",
    bookAppointment: "अपॉइंटमेंट बुक करें",
    callHospital: "हॉस्पिटल को कॉल करें",
    footnote:
      "*प्रक्रिया का समय, हॉस्पिटल में रहने की अवधि एवं रिकवरी संकेतात्मक हैं और व्यक्तिगत क्लिनिकल स्थिति के अनुसार भिन्न हो सकते हैं। यह पेज रोगी शिक्षा के लिए है और मेडिकल सलाह का स्थान नहीं लेता।",
    bookConsultation: "कंसल्टेशन बुक करें",
  },
};

// Chrome for components/blog/BlogPostTemplate.tsx — shared by all 13 blog
// posts. Each post's own content (title, quick answer, sections, FAQs) is
// translated separately (lib/blog-content-hi.ts), not here.
export const blogChromeDict: Bilingual<{
  breadcrumbBlog: string;
  onThisPage: string;
  faqsNavLabel: string;
  quickAnswerLabel: string;
  authorLabel: string;
  reviewerLabel: string;
  ctaHeading: string;
  ctaText: string;
  bookAppointment: string;
  callHospital: string;
  faqHeading: string;
  disclaimerHeading: string;
  referencesHeading: string;
  relatedServicesHeading: string;
  relatedArticlesHeading: string;
}> = {
  en: {
    breadcrumbBlog: "Blog",
    onThisPage: "On this page",
    faqsNavLabel: "FAQs",
    quickAnswerLabel: "Quick answer: ",
    authorLabel: "Author:",
    reviewerLabel: "Medical reviewer:",
    ctaHeading: "Have questions about this condition?",
    ctaText: "Speak with the Hopewell Hospital team for a personalised assessment and treatment plan.",
    bookAppointment: "Book Appointment",
    callHospital: "Call Hopewell Hospital",
    faqHeading: "Frequently asked questions",
    disclaimerHeading: "Medical disclaimer",
    referencesHeading: "References",
    relatedServicesHeading: "Related services",
    relatedArticlesHeading: "Related articles",
  },
  hi: {
    breadcrumbBlog: "ब्लॉग",
    onThisPage: "इस पेज पर",
    faqsNavLabel: "सामान्य प्रश्न",
    quickAnswerLabel: "संक्षिप्त उत्तर: ",
    authorLabel: "लेखक:",
    reviewerLabel: "मेडिकल रिव्यूअर:",
    ctaHeading: "इस स्थिति के बारे में कोई प्रश्न है?",
    ctaText: "व्यक्तिगत मूल्यांकन एवं उपचार योजना के लिए हॉपवेल हॉस्पिटल टीम से बात करें।",
    bookAppointment: "अपॉइंटमेंट बुक करें",
    callHospital: "हॉपवेल हॉस्पिटल को कॉल करें",
    faqHeading: "सामान्य प्रश्न",
    disclaimerHeading: "मेडिकल डिस्क्लेमर",
    referencesHeading: "संदर्भ",
    relatedServicesHeading: "संबंधित सेवाएं",
    relatedArticlesHeading: "संबंधित लेख",
  },
};

// Chrome for components/services/ProcedureBlocks.tsx — the small reusable
// blocks (cost estimate, doctor card) rendered inside procedure sections.
export const procedureBlockDict: Bilingual<{
  indicativeTreatmentRange: string;
  sharedAfterEvaluation: string;
  getExactEstimate: string;
  bookAppointment: string;
}> = {
  en: {
    indicativeTreatmentRange: "Indicative treatment range",
    sharedAfterEvaluation: "Shared after clinical evaluation",
    getExactEstimate: "Get exact estimate",
    bookAppointment: "Book Appointment",
  },
  hi: {
    indicativeTreatmentRange: "संकेतात्मक उपचार मूल्य सीमा",
    sharedAfterEvaluation: "क्लिनिकल मूल्यांकन के बाद बताई जाएगी",
    getExactEstimate: "सटीक एस्टिमेट प्राप्त करें",
    bookAppointment: "अपॉइंटमेंट बुक करें",
  },
};

type ServiceCardCopy = { name: string; description?: string; learnMore: string; items: string[] };

// Full content for components/services/ServicesGrid.tsx (the /services
// listing). Array order must match the `services` array in that file
// exactly (12 cards). `items` are display labels only — hrefs stay on the
// English procedure pages until each category's Hindi pages exist.
export const servicesListingDict: Bilingual<{
  kicker: string;
  h2: string;
  subtitle: string;
  showLess: string;
  learnMoreLabel: string;
  services: ServiceCardCopy[];
}> = {
  en: {
    kicker: "Centres of Excellence",
    h2: "Specialised care, close to home.",
    subtitle: "Simple, premium care across every major speciality, built around the patient.",
    showLess: "Show less",
    learnMoreLabel: "Learn more",
    services: [
      {
        name: "General, GI & Laparoscopic Surgery",
        description: "Keyhole procedures across general and gastrointestinal surgery, with smaller incisions, less pain, and a quicker return home than open surgery.",
        learnMore: "Comprehensive surgical care for abdominal, gastrointestinal and common general surgical conditions. The department focuses on minimally invasive and laparoscopic techniques wherever appropriate, helping reduce pain, scars and recovery time. Services include gallbladder, hernia, appendix, colorectal and GI surgery, along with laser treatment for piles, fissure and fistula and advanced procedures such as ERCP.",
        items: ["Gallbladder Surgery", "Hernia Surgery", "Appendix Surgery", "Laser Piles Treatment", "Fistula Treatment", "Fissure Treatment", "ERCP", "GI Surgery", "Colorectal Surgery", "Varicose Vein Treatment"],
      },
      {
        name: "IVF, Gynaecology & Women's Health",
        description: "Personalized fertility evaluation, gynaecological care and assisted reproduction for couples building their family.",
        learnMore: "Comprehensive women's healthcare covering fertility, pregnancy, gynaecological disorders and minimally invasive surgery. Services include IVF and infertility treatment, laparoscopic gynaecology, fibroid treatment, hysterectomy and high-risk pregnancy care. The focus is on personalised treatment, reproductive health and supporting women through every stage of life.",
        items: ["IVF", "Infertility Treatment", "Laparoscopic Gynaecology", "Hysterectomy", "Fibroid Treatment", "High-Risk Pregnancy"],
      },
      {
        name: "General Medicine",
        description: "Everyday medical care for common illnesses, chronic conditions and preventive health check-ups.",
        learnMore: "Comprehensive physician-led care for adult medical conditions, preventive healthcare and long-term disease management. Services include preventive health check-ups, chronic disease management, fever and infection treatment, and infectious disease evaluation. The department focuses strongly on early diagnosis, prevention of complications and continuous management of lifestyle-related and infectious diseases.",
        items: ["Preventive Health Checkups", "Chronic Disease Management", "Fever & Infection Care", "Infectious Disease"],
      },
      {
        name: "Diabetology & Diabetes Care",
        description: "Integrated diabetes and blood-sugar care to reduce long-term complications affecting the heart, kidneys and eyes.",
        learnMore: "Structured diabetes and blood-sugar management, including HbA1c monitoring, blood pressure control, kidney protection and cardiovascular risk reduction. Care is coordinated as part of Hopewell's General Medicine department to keep blood-sugar control linked with overall medical monitoring rather than treated in isolation.",
        items: ["Diabetology & Diabetes Care in Ranchi — Details & Booking"],
      },
      {
        name: "Orthopaedics & Joint Replacement",
        description: "Comprehensive bone and joint care, from sports injuries and fractures to joint replacement and long-term mobility restoration.",
        learnMore: "Specialised care for bone, joint, ligament and musculoskeletal conditions—from everyday injuries to advanced reconstructive surgery. Services include knee and hip replacement, arthroscopy, ACL reconstruction, fracture surgery and sports injury treatment. Our approach combines accurate diagnosis, modern surgical techniques and structured rehabilitation to help patients return to mobility and independence.",
        items: ["Knee Replacement", "Hip Replacement", "Arthroscopy", "ACL Reconstruction", "Fracture Surgery", "Sports Medicine", "Spine Procedures"],
      },
      {
        name: "ENT",
        learnMore: "Medical and surgical care for conditions affecting the ear, nose, throat, sinuses and related structures. Services include mastoidectomy, tympanoplasty, Functional Endoscopic Sinus Surgery (FESS), septoplasty, tonsillectomy and grommet insertion. Treatment focuses on improving hearing, breathing, sinus health and overall quality of life.",
        items: ["Tympanoplasty", "Functional Endoscopic Sinus Surgery (FESS)", "Mastoidectomy", "Septoplasty", "Tonsillectomy", "Grommet Insertion (Myringotomy)"],
      },
      {
        name: "Paediatrics & Neonatology",
        description: "Sensitive newborn, infant and child care, including NICU support.",
        learnMore: "Specialised healthcare for newborns, infants, children and adolescents, with dedicated neonatal support for babies requiring closer monitoring. Services include newborn care, NICU, child immunisation and paediatric emergency care. The department focuses on safe treatment, growth, nutrition, development and family-centred care.",
        items: ["Newborn Care", "NICU", "Child Immunization", "Paediatric Emergency"],
      },
      {
        name: "Urology",
        description: "Diagnosis and treatment of urinary tract and prostate conditions, from kidney stones to transplant evaluation.",
        learnMore: "Comprehensive diagnosis and treatment of conditions affecting the kidneys, urinary tract, bladder and prostate. Services include kidney stone treatment, prostate surgery and urinary tract infection management. Minimally invasive and endoscopic treatment options are considered wherever clinically appropriate.",
        items: ["Kidney Stone Treatment", "Prostate Surgery", "Urinary Tract Infection Treatment"],
      },
      {
        name: "Vascular Surgery",
        description: "Surgical and minimally invasive treatment for blood vessel conditions affecting circulation throughout the body.",
        learnMore: "Specialised treatment for diseases affecting arteries, veins and blood circulation. Services include dialysis access surgery, peripheral vascular disease treatment, aneurysm repair and deep vein thrombosis management, along with evaluation of varicose veins and diabetic vascular complications. The emphasis is on early detection, limb preservation and restoring healthy circulation.",
        items: ["Dialysis Access Surgery", "Peripheral Vascular Disease Treatment", "Aneurysm Repair", "Deep Vein Thrombosis Treatment"],
      },
      {
        name: "Spine",
        description: "Surgical and non-surgical treatment for conditions affecting the spine, aimed at relieving pain and restoring function.",
        learnMore: "Comprehensive evaluation and treatment for back pain, neck pain and disorders affecting the spine, discs and nerves. Services include slip disc treatment, minimally invasive spine surgery, spinal fusion and scoliosis correction. Treatment is individualised, with surgery considered when clinically necessary to relieve pain, protect neurological function and restore mobility.",
        items: ["Slip Disc Treatment", "Spinal Fusion", "Minimally Invasive Spine Surgery", "Scoliosis Correction"],
      },
      {
        name: "CT Scan",
        description: "Detailed cross-sectional imaging for accurate diagnosis, emergency evaluation and treatment planning.",
        learnMore: "Computed Tomography (CT) combines X-rays with computer processing to create detailed cross-sectional images. It is especially useful when doctors need rapid and precise information about the brain, chest, abdomen, bones, blood vessels or injuries — including CT Brain, CT Chest, CT Abdomen & Pelvis, CT KUB, CT Angiography and trauma imaging.",
        items: ["CT Scan in Ranchi — Details & Booking"],
      },
      {
        name: "Diagnostics",
        learnMore: "Integrated diagnostic services supporting faster and more accurate clinical decision-making across the hospital. The department includes Digital X-Ray and Pathology Laboratory, along with diagnostic support for preventive health check-ups. By bringing imaging, laboratory testing and specialist care together, patients can move more efficiently from investigation to diagnosis and treatment.",
        items: ["Pathology Lab", "Digital X-Ray"],
      },
    ],
  },
  hi: {
    kicker: "उत्कृष्टता केंद्र",
    h2: "विशेषीकृत देखभाल, आपके घर के नज़दीक।",
    subtitle: "रोगी को केंद्र में रखकर बनाई गई, हर प्रमुख विशेषता में सरल एवं प्रीमियम देखभाल।",
    showLess: "कम दिखाएं",
    learnMoreLabel: "अधिक जानें",
    services: [
      {
        name: "जनरल, जीआई एवं लेप्रोस्कोपिक सर्जरी",
        description: "जनरल एवं गैस्ट्रोइंटेस्टाइनल सर्जरी में कीहोल प्रक्रियाएं, जिनमें ओपन सर्जरी की तुलना में छोटे चीरे, कम दर्द एवं जल्दी घर वापसी होती है।",
        learnMore: "पेट, गैस्ट्रोइंटेस्टाइनल एवं सामान्य सर्जिकल स्थितियों के लिए व्यापक सर्जिकल देखभाल। यह विभाग जहां उपयुक्त हो वहां मिनिमली इनवेसिव एवं लेप्रोस्कोपिक तकनीकों पर ध्यान केंद्रित करता है, जिससे दर्द, निशान एवं रिकवरी समय कम होता है। सेवाओं में पित्ताशय, हर्निया, अपेंडिक्स, कोलोरेक्टल एवं जीआई सर्जरी के साथ-साथ पाइल्स, फिशर एवं फिस्टुला के लिए लेज़र उपचार और ईआरसीपी जैसी उन्नत प्रक्रियाएं शामिल हैं।",
        items: ["पित्ताशय की सर्जरी", "हर्निया सर्जरी", "अपेंडिक्स सर्जरी", "लेज़र पाइल्स उपचार", "फिस्टुला उपचार", "फिशर उपचार", "ईआरसीपी", "जीआई सर्जरी", "कोलोरेक्टल सर्जरी", "वेरिकोज़ वेन उपचार"],
      },
      {
        name: "आईवीएफ, स्त्री रोग एवं महिला स्वास्थ्य",
        description: "परिवार बनाने की योजना बना रहे दंपतियों के लिए व्यक्तिगत फर्टिलिटी मूल्यांकन, स्त्री रोग देखभाल एवं सहायक प्रजनन सेवाएं।",
        learnMore: "फर्टिलिटी, प्रेगनेंसी, स्त्री रोग संबंधी विकारों एवं मिनिमली इनवेसिव सर्जरी को कवर करने वाली व्यापक महिला स्वास्थ्य सेवा। सेवाओं में आईवीएफ एवं इनफर्टिलिटी उपचार, लेप्रोस्कोपिक स्त्री रोग, फाइब्रॉइड उपचार, हिस्टेरेक्टॉमी एवं हाई-रिस्क प्रेगनेंसी केयर शामिल हैं। ध्यान व्यक्तिगत उपचार, प्रजनन स्वास्थ्य एवं जीवन के हर चरण में महिलाओं का साथ देने पर है।",
        items: ["आईवीएफ", "इनफर्टिलिटी उपचार", "लेप्रोस्कोपिक स्त्री रोग", "हिस्टेरेक्टॉमी", "फाइब्रॉइड उपचार", "हाई-रिस्क प्रेगनेंसी"],
      },
      {
        name: "जनरल मेडिसिन",
        description: "सामान्य बीमारियों, पुरानी स्थितियों एवं निवारक स्वास्थ्य जांच के लिए दैनिक चिकित्सा देखभाल।",
        learnMore: "वयस्क चिकित्सा स्थितियों, निवारक स्वास्थ्य सेवा एवं लंबे समय तक चलने वाली बीमारियों के प्रबंधन के लिए फिजिशियन-नेतृत्व वाली व्यापक देखभाल। सेवाओं में निवारक स्वास्थ्य जांच, क्रॉनिक डिजीज मैनेजमेंट, बुखार एवं संक्रमण उपचार तथा संक्रामक रोग मूल्यांकन शामिल हैं। यह विभाग शीघ्र निदान, जटिलताओं की रोकथाम एवं जीवनशैली व संक्रामक रोगों के निरंतर प्रबंधन पर विशेष ध्यान देता है।",
        items: ["निवारक स्वास्थ्य जांच", "क्रॉनिक डिजीज मैनेजमेंट", "बुखार एवं संक्रमण देखभाल", "संक्रामक रोग"],
      },
      {
        name: "डायबिटोलॉजी एवं डायबिटीज केयर",
        description: "हृदय, किडनी एवं आंखों को प्रभावित करने वाली लंबी अवधि की जटिलताओं को कम करने के लिए एकीकृत डायबिटीज एवं ब्लड-शुगर केयर।",
        learnMore: "संरचित डायबिटीज एवं ब्लड-शुगर प्रबंधन, जिसमें HbA1c मॉनिटरिंग, ब्लड प्रेशर नियंत्रण, किडनी सुरक्षा एवं कार्डियोवैस्कुलर जोखिम में कमी शामिल है। देखभाल को हॉपवेल के जनरल मेडिसिन विभाग के हिस्से के रूप में समन्वित किया जाता है, ताकि ब्लड-शुगर नियंत्रण को अलग से नहीं बल्कि समग्र चिकित्सा निगरानी के साथ जोड़कर रखा जा सके।",
        items: ["रांची में डायबिटोलॉजी एवं डायबिटीज केयर — विवरण एवं बुकिंग"],
      },
      {
        name: "ऑर्थोपेडिक्स एवं जॉइंट रिप्लेसमेंट",
        description: "स्पोर्ट्स इंजरी एवं फ्रैक्चर से लेकर जॉइंट रिप्लेसमेंट एवं लंबी अवधि की मोबिलिटी रिकवरी तक, व्यापक बोन एवं जॉइंट केयर।",
        learnMore: "बोन, जॉइंट, लिगामेंट एवं मस्कुलोस्केलेटल स्थितियों के लिए विशेषीकृत देखभाल — सामान्य चोटों से लेकर उन्नत रिकंस्ट्रक्टिव सर्जरी तक। सेवाओं में नी एवं हिप रिप्लेसमेंट, आर्थ्रोस्कोपी, एसीएल रिकंस्ट्रक्शन, फ्रैक्चर सर्जरी एवं स्पोर्ट्स इंजरी उपचार शामिल हैं। हमारा तरीका सटीक निदान, आधुनिक सर्जिकल तकनीकों एवं संरचित पुनर्वसन को जोड़कर रोगियों को गतिशीलता एवं स्वतंत्रता में वापस लाने में मदद करता है।",
        items: ["नी रिप्लेसमेंट", "हिप रिप्लेसमेंट", "आर्थ्रोस्कोपी", "एसीएल रिकंस्ट्रक्शन", "फ्रैक्चर सर्जरी", "स्पोर्ट्स मेडिसिन", "स्पाइन प्रक्रियाएं"],
      },
      {
        name: "ईएनटी",
        learnMore: "कान, नाक, गला, साइनस एवं संबंधित संरचनाओं को प्रभावित करने वाली स्थितियों के लिए मेडिकल एवं सर्जिकल देखभाल। सेवाओं में मास्टॉइडेक्टॉमी, टिम्पैनोप्लास्टी, फंक्शनल एंडोस्कोपिक साइनस सर्जरी (FESS), सेप्टोप्लास्टी, टॉन्सिलेक्टॉमी एवं ग्रोमेट इंसर्शन शामिल हैं। उपचार का ध्यान सुनने की क्षमता, श्वास, साइनस स्वास्थ्य एवं समग्र जीवन गुणवत्ता में सुधार पर है।",
        items: ["टिम्पैनोप्लास्टी", "फंक्शनल एंडोस्कोपिक साइनस सर्जरी (FESS)", "मास्टॉइडेक्टॉमी", "सेप्टोप्लास्टी", "टॉन्सिलेक्टॉमी", "ग्रोमेट इंसर्शन (मायरिंगोटॉमी)"],
      },
      {
        name: "पीडियाट्रिक्स एवं नियोनेटोलॉजी",
        description: "एनआईसीयू सहायता सहित नवजात, शिशु एवं बाल देखभाल, पूरी संवेदनशीलता के साथ।",
        learnMore: "नवजातों, शिशुओं, बच्चों एवं किशोरों के लिए विशेषीकृत स्वास्थ्य सेवा, तथा करीबी मॉनिटरिंग की आवश्यकता वाले शिशुओं के लिए समर्पित नियोनेटल सहायता। सेवाओं में नवजात देखभाल, एनआईसीयू, बाल टीकाकरण एवं पीडियाट्रिक इमरजेंसी केयर शामिल हैं। यह विभाग सुरक्षित उपचार, वृद्धि, पोषण, विकास एवं परिवार-केंद्रित देखभाल पर ध्यान केंद्रित करता है।",
        items: ["नवजात देखभाल", "एनआईसीयू", "बाल टीकाकरण", "पीडियाट्रिक इमरजेंसी"],
      },
      {
        name: "यूरोलॉजी",
        description: "किडनी स्टोन से लेकर ट्रांसप्लांट मूल्यांकन तक, यूरिनरी ट्रैक्ट एवं प्रोस्टेट स्थितियों का निदान एवं उपचार।",
        learnMore: "किडनी, यूरिनरी ट्रैक्ट, ब्लैडर एवं प्रोस्टेट को प्रभावित करने वाली स्थितियों का व्यापक निदान एवं उपचार। सेवाओं में किडनी स्टोन उपचार, प्रोस्टेट सर्जरी एवं यूरिनरी ट्रैक्ट इंफेक्शन प्रबंधन शामिल हैं। जहां चिकित्सकीय रूप से उपयुक्त हो वहां मिनिमली इनवेसिव एवं एंडोस्कोपिक उपचार विकल्पों पर विचार किया जाता है।",
        items: ["किडनी स्टोन उपचार", "प्रोस्टेट सर्जरी", "यूरिनरी ट्रैक्ट इंफेक्शन उपचार"],
      },
      {
        name: "वैस्कुलर सर्जरी",
        description: "शरीर में रक्त संचार को प्रभावित करने वाली ब्लड वेसल स्थितियों के लिए सर्जिकल एवं मिनिमली इनवेसिव उपचार।",
        learnMore: "धमनियों, शिराओं एवं रक्त संचार को प्रभावित करने वाली बीमारियों के लिए विशेषीकृत उपचार। सेवाओं में डायलिसिस एक्सेस सर्जरी, पेरिफेरल वैस्कुलर डिजीज उपचार, एन्यूरिज्म रिपेयर एवं डीप वेन थ्रॉम्बोसिस प्रबंधन के साथ-साथ वेरिकोज़ वेन्स एवं डायबिटिक वैस्कुलर जटिलताओं का मूल्यांकन शामिल है। जोर शीघ्र पहचान, अंग संरक्षण एवं स्वस्थ रक्त संचार की बहाली पर है।",
        items: ["डायलिसिस एक्सेस सर्जरी", "पेरिफेरल वैस्कुलर डिजीज उपचार", "एन्यूरिज्म रिपेयर", "डीप वेन थ्रॉम्बोसिस उपचार"],
      },
      {
        name: "स्पाइन",
        description: "स्पाइन को प्रभावित करने वाली स्थितियों के लिए सर्जिकल एवं नॉन-सर्जिकल उपचार, जिसका उद्देश्य दर्द से राहत एवं कार्यक्षमता की बहाली है।",
        learnMore: "कमर दर्द, गर्दन दर्द एवं स्पाइन, डिस्क एवं नर्व्स को प्रभावित करने वाले विकारों का व्यापक मूल्यांकन एवं उपचार। सेवाओं में स्लिप डिस्क उपचार, मिनिमली इनवेसिव स्पाइन सर्जरी, स्पाइनल फ्यूज़न एवं स्कोलियोसिस करेक्शन शामिल हैं। उपचार व्यक्तिगत रूप से तय किया जाता है, तथा दर्द से राहत, न्यूरोलॉजिकल कार्यक्षमता की सुरक्षा एवं गतिशीलता की बहाली के लिए चिकित्सकीय रूप से आवश्यक होने पर सर्जरी पर विचार किया जाता है।",
        items: ["स्लिप डिस्क उपचार", "स्पाइनल फ्यूज़न", "मिनिमली इनवेसिव स्पाइन सर्जरी", "स्कोलियोसिस करेक्शन"],
      },
      {
        name: "सीटी स्कैन",
        description: "सटीक निदान, आपातकालीन मूल्यांकन एवं उपचार योजना के लिए विस्तृत क्रॉस-सेक्शनल इमेजिंग।",
        learnMore: "कंप्यूटेड टोमोग्राफी (सीटी) एक्स-रे को कंप्यूटर प्रोसेसिंग के साथ जोड़कर विस्तृत क्रॉस-सेक्शनल इमेज बनाती है। यह खासतौर पर तब उपयोगी होती है जब डॉक्टरों को मस्तिष्क, छाती, पेट, हड्डियों, ब्लड वेसल्स या चोटों के बारे में तेज़ एवं सटीक जानकारी चाहिए — जिसमें सीटी ब्रेन, सीटी चेस्ट, सीटी एब्डोमेन एवं पेल्विस, सीटी केयूबी, सीटी एंजियोग्राफी एवं ट्रॉमा इमेजिंग शामिल हैं।",
        items: ["रांची में सीटी स्कैन — विवरण एवं बुकिंग"],
      },
      {
        name: "डायग्नोस्टिक्स",
        learnMore: "संपूर्ण हॉस्पिटल में तेज़ एवं अधिक सटीक क्लिनिकल निर्णय लेने में सहायक एकीकृत डायग्नोस्टिक सेवाएं। इस विभाग में डिजिटल एक्स-रे एवं पैथोलॉजी लैबोरेटरी शामिल हैं, साथ ही निवारक स्वास्थ्य जांच के लिए डायग्नोस्टिक सहायता भी दी जाती है। इमेजिंग, लैबोरेटरी टेस्टिंग एवं विशेषज्ञ देखभाल को एक साथ लाकर, रोगी जांच से निदान एवं उपचार तक अधिक कुशलता से आगे बढ़ सकते हैं।",
        items: ["पैथोलॉजी लैब", "डिजिटल एक्स-रे"],
      },
    ],
  },
};

export const doctorsPageDict: Bilingual<{
  kicker: string;
  h1: string;
  heroText: string;
  searchPlaceholder: string;
  noDoctorsFound: string;
  tryDifferentFilter: string;
  yearsShort: (exp: number) => string;
  yearsExperienceFull: (exp: number) => string;
  expertSpecialist: string;
  bookAppointmentWithDr: (name: string) => string;
  all: string;
  departmentLabels: Record<string, string>;
}> = {
  en: {
    kicker: "Meet Our Team",
    h1: "Our Specialists",
    heroText: "Internationally trained, locally committed — our doctors bring global expertise to Ranchi.",
    searchPlaceholder: "Search doctors by name or specialty…",
    noDoctorsFound: "No doctors found.",
    tryDifferentFilter: "Try a different filter or search term.",
    yearsShort: (exp) => `${exp}+ yrs`,
    yearsExperienceFull: (exp) => `${exp}+ Years Experience`,
    expertSpecialist: "Expert Specialist",
    bookAppointmentWithDr: (name) => `Book Appointment with Dr. ${name}`,
    all: "All",
    departmentLabels: {
      "GI & Laparoscopic Surgery": "GI & Laparoscopic Surgery",
      "Obs & Gynaecology": "Obs & Gynaecology",
      "Medicine": "Medicine",
      "Orthopaedics": "Orthopaedics",
      "Critical Care": "Critical Care",
      "Neurology": "Neurology",
      "Paediatrics": "Paediatrics",
    },
  },
  hi: {
    kicker: "हमारी टीम से मिलें",
    h1: "हमारे विशेषज्ञ",
    heroText: "अंतरराष्ट्रीय स्तर पर प्रशिक्षित, स्थानीय स्तर पर समर्पित — हमारे डॉक्टर रांची में वैश्विक विशेषज्ञता लाते हैं।",
    searchPlaceholder: "नाम या विशेषता से डॉक्टर खोजें…",
    noDoctorsFound: "कोई डॉक्टर नहीं मिला।",
    tryDifferentFilter: "कोई अलग फ़िल्टर या खोज शब्द आज़माएं।",
    yearsShort: (exp) => `${exp}+ वर्ष`,
    yearsExperienceFull: (exp) => `${exp}+ वर्षों का अनुभव`,
    expertSpecialist: "विशेषज्ञ",
    bookAppointmentWithDr: (name) => `डॉ. ${name} के साथ अपॉइंटमेंट बुक करें`,
    all: "सभी",
    departmentLabels: {
      "GI & Laparoscopic Surgery": "जीआई एवं लेप्रोस्कोपिक सर्जरी",
      "Obs & Gynaecology": "ऑब्स एवं गायनेकोलॉजी",
      "Medicine": "मेडिसिन",
      "Orthopaedics": "ऑर्थोपेडिक्स",
      "Critical Care": "क्रिटिकल केयर",
      "Neurology": "न्यूरोलॉजी",
      "Paediatrics": "पीडियाट्रिक्स",
    },
  },
};

// `packages` order must match lib/health-packages.ts `HEALTH_PACKAGES`
// exactly (zipped by index on the Hindi page) — that file stays the single
// source of truth for package data (also used by the chatbot), so this
// dict only supplies the Hindi text, never rendered on its own for English.
export const healthPackagesDict: Bilingual<{
  h1: string;
  subtitle: string;
  priceOnConsultation: string;
  bookAppointment: string;
  packages: { name: string; text: string; items: string[] }[];
}> = {
  en: {
    h1: "Health Packages",
    subtitle: "Preventive health checkup packages designed to catch concerns early and keep you well.",
    priceOnConsultation: "Price on Consultation",
    bookAppointment: "Book an Appointment",
    packages: [
      { name: "Basic Health Checkup", text: "A foundational screening for general wellness, ideal for a routine annual checkup.", items: ["Complete Blood Count", "Blood Sugar (Fasting)", "Lipid Profile", "Urine Routine", "BMI & Vitals"] },
      { name: "Executive Health Checkup", text: "A comprehensive screening for working professionals, covering major organ systems.", items: ["Full Body Blood Panel", "ECG", "Chest X-Ray", "Ultrasound Abdomen", "Physician Consultation"] },
      { name: "Cardiac Health Checkup", text: "Focused screening for heart health and early detection of cardiac risk factors.", items: ["ECG & Echocardiography", "Lipid Profile", "Blood Sugar", "Cardiologist Consultation", "Stress Test (TMT)"] },
      { name: "Women's Wellness Package", text: "A screening package tailored to women's health across every life stage.", items: ["Complete Blood Count", "Thyroid Profile", "Pap Smear", "Ultrasound Pelvis", "Gynaecologist Consultation"] },
      { name: "Senior Citizen Checkup", text: "A thorough screening designed for the health needs of older adults.", items: ["Full Body Blood Panel", "ECG & Echocardiography", "Bone Density Screening", "Eye & Ear Checkup", "Physician Consultation"] },
      { name: "Diabetes Screening Package", text: "Focused evaluation for diagnosing and monitoring diabetes and related risk factors.", items: ["Blood Sugar (Fasting & PP)", "HbA1c", "Kidney Function Test", "Lipid Profile", "Physician Consultation"] },
    ],
  },
  hi: {
    h1: "हेल्थ पैकेज",
    subtitle: "समस्याओं को समय पर पहचानने एवं आपको स्वस्थ रखने के लिए डिज़ाइन किए गए निवारक स्वास्थ्य जांच पैकेज।",
    priceOnConsultation: "कीमत सलाह पर",
    bookAppointment: "अपॉइंटमेंट बुक करें",
    packages: [
      { name: "बेसिक हेल्थ चेकअप", text: "सामान्य स्वास्थ्य के लिए एक आधारभूत जांच, जो नियमित वार्षिक चेकअप के लिए उपयुक्त है।", items: ["कंप्लीट ब्लड काउंट", "ब्लड शुगर (फास्टिंग)", "लिपिड प्रोफाइल", "यूरिन रूटीन", "बीएमआई एवं वाइटल्स"] },
      { name: "एग्जीक्यूटिव हेल्थ चेकअप", text: "कामकाजी पेशेवरों के लिए एक व्यापक जांच, जो प्रमुख अंग प्रणालियों को कवर करती है।", items: ["फुल बॉडी ब्लड पैनल", "ईसीजी", "चेस्ट एक्स-रे", "अल्ट्रासाउंड एब्डोमेन", "फिजिशियन कंसल्टेशन"] },
      { name: "कार्डियक हेल्थ चेकअप", text: "हृदय स्वास्थ्य एवं कार्डियक जोखिम कारकों की शीघ्र पहचान के लिए फोकस्ड जांच।", items: ["ईसीजी एवं इकोकार्डियोग्राफी", "लिपिड प्रोफाइल", "ब्लड शुगर", "कार्डियोलॉजिस्ट कंसल्टेशन", "स्ट्रेस टेस्ट (टीएमटी)"] },
      { name: "वुमेंस वेलनेस पैकेज", text: "जीवन के हर चरण में महिलाओं के स्वास्थ्य के अनुरूप तैयार की गई जांच पैकेज।", items: ["कंप्लीट ब्लड काउंट", "थायरॉइड प्रोफाइल", "पैप स्मीयर", "अल्ट्रासाउंड पेल्विस", "गायनेकोलॉजिस्ट कंसल्टेशन"] },
      { name: "सीनियर सिटीज़न चेकअप", text: "वृद्ध व्यक्तियों की स्वास्थ्य आवश्यकताओं के लिए डिज़ाइन की गई गहन जांच।", items: ["फुल बॉडी ब्लड पैनल", "ईसीजी एवं इकोकार्डियोग्राफी", "बोन डेंसिटी स्क्रीनिंग", "आई एवं ईयर चेकअप", "फिजिशियन कंसल्टेशन"] },
      { name: "डायबिटीज स्क्रीनिंग पैकेज", text: "डायबिटीज एवं संबंधित जोखिम कारकों के निदान एवं मॉनिटरिंग के लिए फोकस्ड मूल्यांकन।", items: ["ब्लड शुगर (फास्टिंग एवं पीपी)", "HbA1c", "किडनी फंक्शन टेस्ट", "लिपिड प्रोफाइल", "फिजिशियन कंसल्टेशन"] },
    ],
  },
};

// Chrome for the /blog listing page. Individual post title/excerpt/
// category/readingTime come from lib/blog-content.ts (English) until
// lib/blog-content-hi.ts exists with Hindi versions of all 13 posts.
export const blogListingDict: Bilingual<{ kicker: string; h1: string; subtitle: string; readLabel: string }> = {
  en: {
    kicker: "Patient Guides",
    h1: "Hopewell Hospital Blog",
    subtitle: "Medically reviewed articles to help patients and families in Ranchi and across Jharkhand understand their treatment options before a consultation.",
    readLabel: "Read",
  },
  hi: {
    kicker: "पेशेंट गाइड",
    h1: "हॉपवेल हॉस्पिटल ब्लॉग",
    subtitle: "रांची एवं झारखंड भर में रोगियों एवं परिवारों को सलाह से पहले अपने उपचार विकल्पों को समझने में मदद करने के लिए मेडिकली रिव्यूड लेख।",
    readLabel: "पढ़ें",
  },
};
