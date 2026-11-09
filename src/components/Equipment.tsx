import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Settings, ShieldCheck, Cpu } from 'lucide-react';

const equipment = [
  {
    icon: <Zap className="w-7 h-7 text-teal-700" />,
    name: 'Digital RVG Intraoral Radiography',
    tag: 'Ultra-Low Radiation (<90% reduction)',
    description: 'Instant computerized sensor imaging revealing microscopic root morphology, apical bone integrity, and bone density with almost zero X-ray exposure.',
  },
  {
    icon: <Target className="w-7 h-7 text-teal-700" />,
    name: 'Multi-Frequency Apex Locator',
    tag: 'Sub-Millimeter Accuracy',
    description: 'Electronic apex distance measurement determining the exact anatomical apical foramen to achieve 100% complete canal obturation without overfills.',
  },
  {
    icon: <Settings className="w-7 h-7 text-teal-700" />,
    name: 'Advanced Rotary Endomotor',
    tag: 'Painless Single-Sitting RCT',
    description: 'Micro-torque controlled nickel-titanium rotary file system creating smooth, tapered canal paths rapidly while eliminating treatment discomfort.',
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-teal-700" />,
    name: 'Class-B Vacuum Autoclave',
    tag: 'Hospital-Grade Sterilization',
    description: 'Pre-vacuum thermal cycle eliminating 100% of bacterial and viral spores. All handpieces and surgical burs are sterile-sealed in single-patient pouches.',
  },
];

const Equipment: React.FC = () => {
  return (
    <section id="technology" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Soft ambient background */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-teal-50/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-sky-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Cpu className="w-3.5 h-3.5 text-teal-700" />
            <span>Modern Clinical Equipment</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight"
          >
            Technology &amp; <span className="text-teal-700">Sterilization Rigor</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg mt-3"
          >
            At Tooth Cure Dental Center, modern diagnostic apparatus and rigorous infection-control protocols ensure rapid, painless, and completely safe dental visits.
          </motion.p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipment.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-slate-50/70 rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:border-teal-200 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white border border-teal-100 flex items-center justify-center mb-5 shadow-2xs">
                  {item.icon}
                </div>
                <span className="inline-block px-2.5 py-1 rounded-md bg-teal-100/70 text-teal-800 text-[11px] font-bold uppercase tracking-wider mb-2">
                  {item.tag}
                </span>
                <h3 className="font-headline font-bold text-lg text-slate-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/60 text-[11px] font-semibold text-teal-800">
                <span>Tooth Cure Quality Assurance</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Equipment;
