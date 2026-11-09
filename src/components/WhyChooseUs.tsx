import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Heart, CheckCircle2, Building2, Sparkles, Clock } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-6 h-6 text-teal-700" />,
    title: 'Consultant-Led Specialist Care',
    description: 'Post-graduate trained dental clinicians from DU affiliated institutions oversee every consultation, surgery, and aligner milestone.',
  },
  {
    icon: <Cpu className="w-6 h-6 text-teal-700" />,
    title: 'Digital RVG & Apex Guidance',
    description: 'Ultra-low radiation digital intraoral radiography and apex locators for pain-free, sub-millimeter precision in root canals and implants.',
  },
  {
    icon: <Heart className="w-6 h-6 text-teal-700" />,
    title: 'Anxiety-Free Gentle Treatment',
    description: 'Empathetic bedside manner, effective micro-anesthesia, and relaxing operatory setups so even dental-anxious patients feel completely safe.',
  },
  {
    icon: <Building2 className="w-6 h-6 text-teal-700" />,
    title: 'Class-B Autoclave Sterilization',
    description: 'Hospital-grade autoclaving and vacuum sealed pouches for 100% sterile cross-infection safety for your entire family.',
  },
  {
    icon: <Sparkles className="w-6 h-6 text-teal-700" />,
    title: 'Orthodontics & Implants Focused',
    description: 'Dedicated focus on 3D titanium implants, clear invisible aligners, and aesthetic smile transformations under one roof in Lalmatia.',
  },
  {
    icon: <Clock className="w-6 h-6 text-teal-700" />,
    title: 'Dhanmondi 27 Evening Availability',
    description: 'Convenient 4:30 PM – 9:30 PM appointment slots perfectly designed around work and school schedules.',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Soft ambient blur */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-teal-50/60 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-700" />
            <span>Why Dhanmondi &amp; Lalmatia Patients Choose Us</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight"
          >
            The <span className="text-teal-700">Tooth Cure Dental</span> Standard
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg mt-3"
          >
            Delivering advanced dental solutions with honesty, clinical rigor, and compassionate care.
          </motion.p>
        </div>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="bg-slate-50/70 rounded-3xl p-7 border border-slate-200/80 shadow-xs hover:border-teal-200 hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-13 h-13 rounded-2xl bg-white border border-teal-100 flex items-center justify-center mb-5 shadow-2xs group-hover:scale-105 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="font-headline font-bold text-xl text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-slate-200/70 flex items-center gap-1.5 text-xs font-semibold text-teal-800">
                <span>Tooth Cure Promise</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
