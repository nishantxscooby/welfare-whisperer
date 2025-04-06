
export interface Scheme {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  eligibility: {
    age?: [number, number] | number; // min-max range or specific value
    gender?: string[];
    maritalStatus?: string[];
    disability?: boolean;
    caste?: string[];
    income?: number; // maximum annual income in INR
    occupation?: string[];
    bplStatus?: boolean;
    state?: string[];
    area?: string[]; // Urban/Rural
    education?: string[];
  };
  applicationProcess: string;
  documentRequired: string[];
  website?: string;
}

export const schemes: Scheme[] = [
  {
    id: "pm-kisan",
    name: "PM-KISAN",
    description: "Pradhan Mantri Kisan Samman Nidhi provides income support to farmers.",
    benefits: [
      "₹6,000 per year in three equal installments",
      "Direct benefit transfer to bank account",
      "Financial assistance for agricultural activities"
    ],
    eligibility: {
      occupation: ["Farmer"],
      income: 100000,
      area: ["Rural", "Urban"]
    },
    applicationProcess: "Apply online through the PM-KISAN portal or visit your nearest Common Service Centre (CSC).",
    documentRequired: ["Aadhaar Card", "Land Records", "Bank Account Details"],
    website: "https://pmkisan.gov.in/"
  },
  {
    id: "pmjay",
    name: "Ayushman Bharat (PM-JAY)",
    description: "Health insurance scheme providing coverage for secondary and tertiary care hospitalization.",
    benefits: [
      "Health coverage up to ₹5 lakh per family per year",
      "Cashless treatment at empanelled hospitals",
      "Pre and post-hospitalization expenses covered"
    ],
    eligibility: {
      bplStatus: true,
      income: 250000
    },
    applicationProcess: "Apply through Ayushman Bharat Pradhan Mantri Jan Arogya Yojana portal or visit nearest Ayushman Mitra.",
    documentRequired: ["Aadhaar Card", "Ration Card/BPL Card", "Income Certificate"],
    website: "https://pmjay.gov.in/"
  },
  {
    id: "pmuy",
    name: "Pradhan Mantri Ujjwala Yojana",
    description: "Provides LPG connections to women from Below Poverty Line (BPL) households.",
    benefits: [
      "Free LPG connection",
      "Financial assistance for first refill and stove",
      "Improved health conditions for women and children"
    ],
    eligibility: {
      gender: ["Female"],
      bplStatus: true,
      income: 150000
    },
    applicationProcess: "Apply through nearest LPG distributor or Common Service Centre.",
    documentRequired: ["Aadhaar Card", "BPL Certificate", "Bank Account Details"],
    website: "https://pmuy.gov.in/"
  },
  {
    id: "pmay",
    name: "Pradhan Mantri Awas Yojana",
    description: "Housing scheme for urban and rural areas to provide affordable houses to all.",
    benefits: [
      "Financial assistance for house construction",
      "Interest subsidy on housing loans",
      "Improved living conditions"
    ],
    eligibility: {
      income: 300000,
      area: ["Urban", "Rural"]
    },
    applicationProcess: "Apply online through PMAY portal or visit your nearest municipal office.",
    documentRequired: ["Aadhaar Card", "Income Certificate", "Land Documents"],
    website: "https://pmaymis.gov.in/"
  },
  {
    id: "pmsby",
    name: "Pradhan Mantri Suraksha Bima Yojana",
    description: "Accident insurance scheme offering coverage for accidental death and disability.",
    benefits: [
      "Accidental death coverage of ₹2 lakh",
      "Partial disability coverage of ₹1 lakh",
      "Annual premium of just ₹12"
    ],
    eligibility: {
      age: [18, 70]
    },
    applicationProcess: "Apply through your bank branch where you have a savings account.",
    documentRequired: ["Aadhaar Card", "Bank Account Details"],
    website: "https://www.jansuraksha.gov.in/"
  },
  {
    id: "pmjjby",
    name: "Pradhan Mantri Jeevan Jyoti Bima Yojana",
    description: "Life insurance scheme providing coverage in case of death.",
    benefits: [
      "Life insurance coverage of ₹2 lakh",
      "Annual premium of just ₹330",
      "Financial protection for family"
    ],
    eligibility: {
      age: [18, 50]
    },
    applicationProcess: "Apply through your bank branch where you have a savings account.",
    documentRequired: ["Aadhaar Card", "Bank Account Details"],
    website: "https://www.jansuraksha.gov.in/"
  },
  {
    id: "pmmy",
    name: "Pradhan Mantri Mudra Yojana",
    description: "Provides loans to small business owners and entrepreneurs.",
    benefits: [
      "Loans up to ₹10 lakh without collateral",
      "Three categories: Shishu, Kishore, and Tarun",
      "Low interest rates"
    ],
    eligibility: {
      occupation: ["Self-employed", "Entrepreneur", "Small Business Owner"]
    },
    applicationProcess: "Apply through banks, MFIs, NBFCs, or online through Mudra website.",
    documentRequired: ["Aadhaar Card", "Business Plan", "Bank Account Details"],
    website: "https://www.mudra.org.in/"
  },
  {
    id: "pmsym",
    name: "Pradhan Mantri Shram Yogi Maandhan",
    description: "Pension scheme for unorganized sector workers.",
    benefits: [
      "Monthly pension of ₹3,000 after age 60",
      "Matching contribution by government",
      "Financial security in old age"
    ],
    eligibility: {
      age: [18, 40],
      occupation: ["Unorganized Sector Worker"],
      income: 180000
    },
    applicationProcess: "Apply through nearest Common Service Centre or Labor Department office.",
    documentRequired: ["Aadhaar Card", "Income Certificate", "Bank Account Details"],
    website: "https://maandhan.in/"
  },
  {
    id: "sukanya",
    name: "Sukanya Samriddhi Yojana",
    description: "Small savings scheme for girl child to provide for education and marriage expenses.",
    benefits: [
      "High interest rate (currently around 8%)",
      "Tax benefits under Section 80C",
      "Secure investment for girl child's future"
    ],
    eligibility: {
      gender: ["Female"],
      age: [0, 10]
    },
    applicationProcess: "Open an account at any post office or authorized banks.",
    documentRequired: ["Birth Certificate of Girl Child", "Parent's ID Proof", "Address Proof"],
    website: "https://www.india.gov.in/spotlight/sukanya-samriddhi-yojana"
  },
  {
    id: "pmgdisha",
    name: "Pradhan Mantri Gramin Digital Saksharta Abhiyan",
    description: "Digital literacy program for rural India.",
    benefits: [
      "Free digital literacy training",
      "Certificate upon completion",
      "Enhanced employment opportunities"
    ],
    eligibility: {
      age: [14, 60],
      area: ["Rural"]
    },
    applicationProcess: "Register at nearest PMGDISHA authorized training center.",
    documentRequired: ["Aadhaar Card", "Address Proof"],
    website: "https://www.pmgdisha.in/"
  },
  {
    id: "ddugky",
    name: "Deen Dayal Upadhyaya Grameen Kaushalya Yojana",
    description: "Skill development program for rural youth.",
    benefits: [
      "Free skill training",
      "Placement assistance",
      "Post-placement support"
    ],
    eligibility: {
      age: [15, 35],
      area: ["Rural"]
    },
    applicationProcess: "Apply through nearest DDU-GKY training center or block office.",
    documentRequired: ["Aadhaar Card", "Educational Certificates"],
    website: "https://ddugky.gov.in/"
  },
  {
    id: "scholarship-sc",
    name: "Post-Matric Scholarship for SC Students",
    description: "Scholarship scheme for SC students pursuing post-matriculation education.",
    benefits: [
      "Full tuition fee reimbursement",
      "Maintenance allowance",
      "Support for educational expenses"
    ],
    eligibility: {
      caste: ["SC"],
      income: 250000,
      education: ["Post-Matriculation"]
    },
    applicationProcess: "Apply online through National Scholarship Portal.",
    documentRequired: ["Caste Certificate", "Income Certificate", "Educational Certificates"],
    website: "https://scholarships.gov.in/"
  },
  {
    id: "scholarship-st",
    name: "Post-Matric Scholarship for ST Students",
    description: "Scholarship scheme for ST students pursuing post-matriculation education.",
    benefits: [
      "Full tuition fee reimbursement",
      "Maintenance allowance",
      "Support for educational expenses"
    ],
    eligibility: {
      caste: ["ST"],
      income: 250000,
      education: ["Post-Matriculation"]
    },
    applicationProcess: "Apply online through National Scholarship Portal.",
    documentRequired: ["Tribe Certificate", "Income Certificate", "Educational Certificates"],
    website: "https://scholarships.gov.in/"
  },
  {
    id: "adips",
    name: "Assistance to Disabled Persons for Purchase/Fitting of Aids and Appliances",
    description: "Provides assistive devices to persons with disabilities.",
    benefits: [
      "Free assistive devices",
      "Maintenance of devices",
      "Support for accessibility needs"
    ],
    eligibility: {
      disability: true,
      income: 200000
    },
    applicationProcess: "Apply through implementing agencies or directly to the Department of Empowerment of Persons with Disabilities.",
    documentRequired: ["Disability Certificate", "Income Certificate", "Aadhaar Card"],
    website: "http://disabilityaffairs.gov.in/content/page/adip-scheme.php"
  },
  {
    id: "mgnrega",
    name: "Mahatma Gandhi National Rural Employment Guarantee Act",
    description: "Provides at least 100 days of wage employment to every rural household.",
    benefits: [
      "Guaranteed 100 days of employment per year",
      "Fixed minimum wage",
      "Unemployment allowance if work not provided"
    ],
    eligibility: {
      area: ["Rural"]
    },
    applicationProcess: "Register with Gram Panchayat, apply for job card, and submit application for work.",
    documentRequired: ["Aadhaar Card", "Bank Account Details", "Photograph"],
    website: "https://nrega.nic.in/"
  }
];

// Function to filter schemes based on user input
export const filterSchemes = (userProfile: {
  age: number;
  gender: string;
  maritalStatus: string;
  disability: boolean;
  caste: string;
  income: number;
  occupation: string;
  bplStatus: boolean;
  state: string;
  area: string;
  education: string;
}) => {
  return schemes.filter(scheme => {
    // Check age criteria
    if (scheme.eligibility.age) {
      if (Array.isArray(scheme.eligibility.age)) {
        const [min, max] = scheme.eligibility.age;
        if (userProfile.age < min || userProfile.age > max) return false;
      } else if (userProfile.age !== scheme.eligibility.age) {
        return false;
      }
    }

    // Check gender criteria
    if (scheme.eligibility.gender && 
        !scheme.eligibility.gender.includes(userProfile.gender)) {
      return false;
    }

    // Check marital status criteria
    if (scheme.eligibility.maritalStatus && 
        !scheme.eligibility.maritalStatus.includes(userProfile.maritalStatus)) {
      return false;
    }

    // Check disability criteria
    if (scheme.eligibility.disability !== undefined && 
        scheme.eligibility.disability !== userProfile.disability) {
      return false;
    }

    // Check caste criteria
    if (scheme.eligibility.caste && 
        !scheme.eligibility.caste.includes(userProfile.caste)) {
      return false;
    }

    // Check income criteria
    if (scheme.eligibility.income && 
        userProfile.income > scheme.eligibility.income) {
      return false;
    }

    // Check occupation criteria
    if (scheme.eligibility.occupation && 
        !scheme.eligibility.occupation.includes(userProfile.occupation)) {
      return false;
    }

    // Check BPL status criteria
    if (scheme.eligibility.bplStatus !== undefined && 
        scheme.eligibility.bplStatus !== userProfile.bplStatus) {
      return false;
    }

    // Check area criteria
    if (scheme.eligibility.area && 
        !scheme.eligibility.area.includes(userProfile.area)) {
      return false;
    }

    // Check education criteria
    if (scheme.eligibility.education && 
        !scheme.eligibility.education.includes(userProfile.education)) {
      return false;
    }

    // If all checks passed, include the scheme
    return true;
  });
};
