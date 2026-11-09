import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Sparkles, SlidersHorizontal } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';
import { getAssetUrl } from '../utils/assets';

interface ClinicalCase {
  id: string;
  title: string;
  category: string;
  duration: string;
  description: string;
  beforeImg: string;
  afterImg: string;
}

const clinicalCases: ClinicalCase[] = [
  {
    id: 'braces',
    title: 'Orthodontic Alignment & Arch Harmony',
    category: 'Ceramic & Clear Aligners',
    duration: '12 Months Treatment',
    description: 'Correction of maxillary anterior crowding, rotated canine, and asymmetric smile arc by Dr. Ornisha Urmi using discreet orthodontic systems.',
    beforeImg: getAssetUrl('images/cases/braces-before.webp'),
    afterImg: getAssetUrl('images/cases/braces-after.webp'),
  },
  {
    id: 'whitening',
    title: 'Laser Teeth Whitening & Smile Makeover',
    category: 'Aesthetic Dentistry',
    duration: '45-Minute In-Clinic Session',
    description: 'Removal of severe tea and extrinsic stains with chairside cold-light bleaching, enhancing tooth luminosity by 5 natural shades.',
    beforeImg: getAssetUrl('images/cases/whitening-before.webp'),
    afterImg: getAssetUrl('images/cases/whitening-after.webp'),
  },
];

const orthodonticHighlights = [
  'Digital cephalometric smile evaluation & 3D treatment simulation',
  'Tooth-colored aesthetic ceramic braces for discreet daytime wear',
  'Custom invisible clear aligners — comfortable, removable, and easy to clean',
  'Habit-breaking appliances for young children & adolescents',
  'Precision lingual wire & Essix clear retention guarantees',
];

const OrthodonticsShowcase: React.FC = () => {
  const [activeCase, setActiveCase] = useState<ClinicalCase>(clinicalCases[0]);

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="orthodontics" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background ambient decorative shapes */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-teal-50/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-0 w-96 h-96 bg-sky-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-teal-700" />
            <span>Smile Architecture &amp; Orthodontics</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight"
          >
            Straighten Your Smile Discreetly with{' '}
            <span className="text-teal-700">Aligners &amp; Braces</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg mt-3"
          >
            Dr. Ornisha Urmi specializes in non-invasive aligner treatments and aesthetic brackets that align your bite while maintaining confident daily aesthetics.
          </motion.p>
        </div>

        {/* Clinical Case Selection Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
            {clinicalCases.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCase(c)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCase.id === c.id
                    ? 'bg-white text-teal-800 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>
        </div>

        {/* Main Grid: Interactive Slider + Case Highlights */}
        <div id="cases" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Interactive Before/After Comparison */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 p-4 sm:p-5 rounded-3xl border border-slate-200/80 shadow-xs">
              <BeforeAfterSlider
                beforeImage={activeCase.beforeImg}
                afterImage={activeCase.afterImg}
                beforeLabel="Before Treatment"
                afterLabel="After Treatment"
                aspectRatio="aspect-[4/3]"
              />
              <div className="mt-4 flex items-center justify-between text-xs text-slate-500 px-2">
                <span className="flex items-center gap-1 font-medium text-teal-800">
                  <SlidersHorizontal size={13} />
                  <span>Interactive Clinical Result</span>
                </span>
                <span className="font-semibold text-slate-700 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                  {activeCase.duration}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Case Details & Orthodontic Tech */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200/70 space-y-4">
              <span className="inline-block px-3 py-1 rounded-md bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
                {activeCase.category}
              </span>
              <h3 className="font-headline font-bold text-2xl text-slate-900">
                {activeCase.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {activeCase.description}
              </p>
            </div>

            {/* Why Patients Choose Tooth Cure Orthodontics */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Orthodontic Excellence Standard
              </h4>
              <ul className="space-y-2">
                {orthodonticHighlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-teal-600 to-[#0A2540] shadow-sm hover:shadow-md transition-all active:scale-95 text-sm"
              >
                <span>Consult for Clear Aligners</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default OrthodonticsShowcase;
