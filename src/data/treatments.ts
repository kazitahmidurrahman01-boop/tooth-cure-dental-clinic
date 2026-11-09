export interface Treatment {
  name: string;
  description: string;
  highlight?: boolean;
  duration?: string;
  priceRange?: string;
}

export interface TreatmentCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  badge: string;
  description: string;
  treatments: Treatment[];
}

export const treatmentCategories: TreatmentCategory[] = [
  {
    id: 'implants',
    name: 'Dental Implants',
    icon: 'Crown',
    color: 'from-blue-600 to-cyan-700',
    badge: 'Speciality Care',
    description: 'Permanent, biomechanically superior titanium root replacements restoring missing teeth with lifelike strength, function, and aesthetics.',
    treatments: [
      { name: 'Single Tooth Titanium Implant', description: 'Biocompatible grade-IV titanium post with custom zirconia abutment and lifelike ceramic crown.', highlight: true, duration: '2 - 3 sittings', priceRange: '৳45,000 - ৳75,000' },
      { name: 'Immediate Loading Implants', description: 'Same-day implant placement and temporary crown restoration following atraumatic extraction.', highlight: true, duration: 'Same day', priceRange: '৳55,000 - ৳85,000' },
      { name: 'Full-Arch All-on-4 / All-on-6', description: 'Fixed prosthetic rehabilitation of completely edentulous upper or lower dental arches.', highlight: true, duration: 'Multidisciplinary', priceRange: 'Custom Consultation' },
      { name: 'Bone Grafting & Ridge Augmentation', description: 'Regenerative osteoconductive particulate grafting to rebuild lost alveolar bone height and width.', duration: '1 sitting', priceRange: '৳15,000 - ৳35,000' },
      { name: 'Direct & Indirect Sinus Floor Lift', description: 'Specialized sinus membrane elevation allowing secure implant anchorage in posterior maxilla.', duration: '1 sitting', priceRange: '৳25,000 - ৳45,000' },
    ],
  },
  {
    id: 'orthodontics',
    name: 'Orthodontics & Aligners',
    icon: 'Smile',
    color: 'from-teal-600 to-emerald-700',
    badge: 'Smile Alignment',
    description: 'Custom orthodontic solutions to align crowded or spaced teeth, rectify bite malocclusions, and craft harmonious facial symmetry.',
    treatments: [
      { name: 'Invisible Clear Aligners', description: 'Custom-molded transparent removable trays gently guiding teeth into position without visible wires.', highlight: true, duration: '6 - 18 months', priceRange: '৳80,000 - ৳180,000' },
      { name: 'Aesthetic Ceramic Braces', description: 'Tooth-colored crystalline brackets that blend naturally with tooth enamel for discreet straightening.', highlight: true, duration: '12 - 24 months', priceRange: '৳65,000 - ৳95,000' },
      { name: 'Precision Metal Braces', description: 'Low-profile medical grade stainless steel brackets engineered for complex orthodontic torque control.', highlight: true, duration: '12 - 24 months', priceRange: '৳45,000 - ৳70,000' },
      { name: 'Habit-Breaking & Growth Modifiers', description: 'Early interceptive orthopedic appliances correcting thumb-sucking, tongue-thrusting, and jaw discrepancy.', duration: 'Phase-1 treatment', priceRange: '৳18,000 - ৳30,000' },
      { name: 'Essix & Fixed Lingual Retainers', description: 'Dual-phase post-orthodontic retention guaranteeing long-term smile stability.', duration: 'Lifetime care', priceRange: '৳6,000 - ৳12,000' },
    ],
  },
  {
    id: 'endodontics',
    name: 'Painless Root Canal (RCT)',
    icon: 'Shield',
    color: 'from-sky-700 to-indigo-800',
    badge: 'Tooth Preservation',
    description: 'Advanced rotary endodontics and computerized apex-guided canal disinfection to save deep infected natural teeth painlessly.',
    treatments: [
      { name: 'Single-Sitting Rotary RCT', description: 'High-speed nickel-titanium motorized canal shaping and warm gutta-percha hermetic obturation in 1 comfortable visit.', highlight: true, duration: '45 - 60 mins', priceRange: '৳5,000 - ৳8,500' },
      { name: 'Molar Multi-Canal Endodontics', description: 'Meticulous micro-endodontic treatment for curved and accessory root canal morphologies.', highlight: true, duration: '1 - 2 visits', priceRange: '৳7,000 - ৳10,000' },
      { name: 'Re-Root Canal Revision Therapy', description: 'Safe removal of old canal fillings, acoustic ultrasonic irrigation, and re-treatment of chronic apical lesions.', duration: '2 visits', priceRange: '৳8,000 - ৳12,000' },
      { name: 'Fiber Post & Core Foundation', description: 'Glass-fiber reinforced intra-radicular post cementing providing structural reinforcement for weakened teeth.', duration: '1 sitting', priceRange: '৳3,000 - ৳5,500' },
    ],
  },
  {
    id: 'cosmetic',
    name: 'Cosmetic & Aesthetic Dentistry',
    icon: 'Sparkles',
    color: 'from-amber-600 to-yellow-700',
    badge: 'Smile Makeover',
    description: 'Artistic dental transformations using ultra-thin ceramic veneers, laser teeth whitening, and seamless composite artistry.',
    treatments: [
      { name: 'In-Office Laser Teeth Whitening', description: 'Hydrogen peroxide clinical photo-activation lifting years of tea, coffee, and tobacco stains by up to 6 shades.', highlight: true, duration: '45 mins', priceRange: '৳10,000 - ৳16,000' },
      { name: 'E-Max Porcelain Veneers', description: 'Custom artisan-crafted lithium disilicate laminates bonded directly to front teeth for ultimate Hollywood glamour.', highlight: true, duration: '2 visits', priceRange: '৳15,000 - ৳25,000 / tooth' },
      { name: 'Diastema Gap Closure', description: 'Polychromatic nano-composite layering closing midline diastema and spacing in a single non-invasive session.', highlight: true, duration: '45 mins', priceRange: '৳3,500 - ৳6,000' },
      { name: 'Ultrasonic Scaling & Air-Flow Polishing', description: 'Pain-free supra and subgingival calculus removal and air-flow polishing for silky clean enamel and healthy gums.', duration: '30 mins', priceRange: '৳1,500 - ৳3,000' },
    ],
  },
  {
    id: 'prosthetics',
    name: 'Crowns, Bridges & Dentures',
    icon: 'Award',
    color: 'from-indigo-600 to-purple-800',
    badge: 'Full Function',
    description: 'Precision CAD/CAM computer-milled restorations to protect weakened teeth and replace lost masticatory performance.',
    treatments: [
      { name: 'Monolithic Multilayer Zirconia Crowns', description: 'CAD/CAM precision-milled unbreakable zirconia crowns with natural gradient translucency and 10-year warranty.', highlight: true, duration: '2 visits', priceRange: '৳8,000 - ৳15,000' },
      { name: 'Porcelain-Fused-to-Metal (PFM)', description: 'High-strength bio-alloy framework covered in natural porcelain ceramic for rear load-bearing molars.', duration: '2 visits', priceRange: '৳4,500 - ৳7,000' },
      { name: 'Fixed Dental Bridges', description: 'Permanent, non-removable dental prosthesis seamlessly replacing missing adjacent teeth.', duration: '2 visits', priceRange: '৳12,000 - ৳30,000' },
      { name: 'Flexible Valplast & BPS Dentures', description: 'Lightweight, unbreakable aesthetic partial and full dentures offering snug suction and chew comfort.', duration: '3 - 4 visits', priceRange: '৳18,000 - ৳40,000' },
    ],
  },
  {
    id: 'surgery',
    name: 'Oral & Maxillofacial Surgery',
    icon: 'Stethoscope',
    color: 'from-rose-600 to-red-800',
    badge: 'Surgical Precision',
    description: 'Specialist surgical interventions performed under strict sterile protocols for impacted teeth, cysts, and trauma.',
    treatments: [
      { name: 'Surgical Impacted Wisdom Tooth Extraction', description: 'Minimally invasive piezo/surgical sectioning and removal of impacted third molars with accelerated recovery.', highlight: true, duration: '30 - 45 mins', priceRange: '৳6,000 - ৳12,000' },
      { name: 'Atraumatic Tooth Extractions', description: 'Gentle socket-preserving extraction utilizing luxators to minimize post-operative bone resorption.', duration: '20 mins', priceRange: '৳1,500 - ৳3,500' },
      { name: 'Apicoectomy & Cyst Enucleation', description: 'Microsurgical root apex resection and retrograde bioceramic filling for refractory periapical pathologies.', duration: '45 mins', priceRange: '৳10,000 - ৳20,000' },
      { name: 'Laser Frenectomy & Gum Recontouring', description: 'Bloodless diode laser excision of restricted lingual/labial frena and cosmetic gingival levelling.', duration: '20 mins', priceRange: '৳5,000 - ৳10,000' },
    ],
  },
];
