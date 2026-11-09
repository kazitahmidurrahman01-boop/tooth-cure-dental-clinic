export interface Doctor {
  id: number;
  name: string;
  qualifications: string[];
  designation: string;
  hospital: string;
  specialization: string;
  bmdc?: string;
  bio: string;
  photoPlaceholder: boolean;
  photoUrl?: string;
  specialties: string[];
}

export const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Pritam Sarker Ratul',
    qualifications: [
      'BDS (DU)',
      'PGT (Oral & Maxillofacial Surgery)',
      'Trained in Fixed Orthodontics & Clear Aligners',
      'Ex-Honorary Medical Officer (DMCH)'
    ],
    designation: 'Chief Consultant & Oral Surgeon',
    hospital: 'Tooth Cure Dental Orthodontics & Implant Center',
    specialization: 'Dental Implants, Oral & Maxillofacial Surgery',
    bmdc: 'BMDC Registered (DU)',
    bio: 'Chief Consultant at Tooth Cure Dental. Ex-Honorary Medical Officer at Dhaka Medical College & Hospital. Renowned for 3D guided titanium implant surgery, surgical wisdom tooth removal, and comprehensive reconstructive dental therapies in Lalmatia, Dhanmondi.',
    photoPlaceholder: false,
    photoUrl: '/images/doctor-ratul.jpg',
    specialties: [
      'Immediate & Delayed Dental Implants',
      'Surgical Wisdom Tooth Removal',
      'Full Mouth Rehabilitation & Prosthetics',
      'Bone Grafting & Sinus Floor Elevation',
      'Oral Cyst & Soft Tissue Surgery'
    ]
  },
  {
    id: 2,
    name: 'Dr. Ornisha Urmi',
    qualifications: [
      'BDS (DU)',
      'PGT (OMFS) - Dhaka Dental College',
      'Certified Clear Aligner Specialist',
      'Ex-Honorary Medical Officer (DDC & Hospital)'
    ],
    designation: 'Consultant Orthodontics & Aesthetic Dentistry',
    hospital: 'Tooth Cure Dental Orthodontics & Implant Center',
    specialization: 'Orthodontics, Clear Aligners & Cosmetic Smile Design',
    bmdc: 'BMDC Reg. #15034',
    bio: 'Senior Consultant specializing in modern clear aligner therapy, aesthetic ceramic brackets, and smile makeovers with over 5 years of dedicated clinical mastery. Trained at Dhaka Dental College & Hospital in rotary endodontics and minimally invasive cosmetic dentistry.',
    photoPlaceholder: false,
    photoUrl: '/images/doctor-urmi.jpg',
    specialties: [
      'Invisible Clear Aligners',
      'Aesthetic Ceramic & Metal Braces',
      'Single-Visit Rotary Root Canal (RCT)',
      'Laser Smile Whitening & Veneers',
      'Cosmetic Diastema Closure & Bonding'
    ]
  },
  {
    id: 3,
    name: 'Dr. Farzana Aman Sharmin',
    qualifications: [
      'BDS (CU)',
      'PGT (Periodontology)',
      'Advanced Training in Rotary Endodontics & Implants',
      'Aesthetic Restorative Dentistry'
    ],
    designation: 'Associate Dental Surgeon',
    hospital: 'Tooth Cure Dental Orthodontics & Implant Center',
    specialization: 'Periodontology & Micro-Endodontics',
    bmdc: 'BMDC Registered',
    bio: 'Specialist in periodontal gum health, advanced rotary endodontics, and restorative oral therapies ensuring painless treatments and long-term tooth preservation.',
    photoPlaceholder: true,
    photoUrl: undefined,
    specialties: [
      'Ultrasonic Deep Scaling & Root Planing',
      'Rotary Root Canal Therapies',
      'Aesthetic Composite Restorations',
      'Pediatric Dental Care',
      'Preventive Oral Hygiene Management'
    ]
  }
];
