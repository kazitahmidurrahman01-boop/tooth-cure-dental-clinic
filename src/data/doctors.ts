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
      'Advanced Implantology Certification',
      'Clinical Fellowship in Minor Oral Surgery'
    ],
    designation: 'Chief Consultant & Implantologist',
    hospital: 'Tooth Cure Dental Orthodontics & Implant Center',
    specialization: 'Dental Implants & Oral & Maxillofacial Surgery',
    bmdc: 'Reg. Surgeon (DU)',
    bio: 'Renowned dental implantologist and oral surgeon with specialized post-graduate training from Dhaka University affiliated medical institutions. Dedicated to 3D guided titanium implant placement, atraumatic impacted wisdom tooth surgery, and complete smile rehabilitations.',
    photoPlaceholder: true,
    photoUrl: '/images/doctor-ratul.jpg',
    specialties: [
      'Immediate & Delayed Dental Implants',
      'Surgical Wisdom Tooth Removal',
      'Bone Grafting & Sinus Lift Procedures',
      'Full Mouth Prosthetic Rehabilitation',
      'Oral Cyst & Soft Tissue Surgery'
    ]
  },
  {
    id: 2,
    name: 'Dr. Ornisha Urmi',
    qualifications: [
      'BDS (DU)',
      'PGT (Conservative Dentistry & Endodontics)',
      'Certified Clear Aligner Specialist',
      'Cosmetic Smile Design Fellowship'
    ],
    designation: 'Consultant Orthodontics & Aesthetic Dentistry',
    hospital: 'Tooth Cure Dental Orthodontics & Implant Center',
    specialization: 'Orthodontics, Clear Aligners & Cosmetic Smile Design',
    bmdc: 'Reg. Specialist (DU)',
    bio: 'Experienced orthodontist and aesthetic dental specialist specializing in clear aligner therapy, aesthetic ceramic brackets, and micro-invasive smile makeovers. Passionate about single-visit pain-free rotary root canals and natural tooth preservation.',
    photoPlaceholder: true,
    photoUrl: '/images/doctor-urmi.jpg',
    specialties: [
      'Invisible Clear Aligners',
      'Ceramic & Metallic Braces',
      'Single-Visit Rotary Root Canal (RCT)',
      'Porcelain Veneers & Laminates',
      'Laser Smile Whitening & Bonding'
    ]
  }
];
