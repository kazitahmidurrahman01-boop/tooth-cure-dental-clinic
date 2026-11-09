import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { clinicInfo } from '../data/clinicInfo';
import { getAssetUrl } from '../utils/assets';

const ClinicIntro: React.FC = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-teal-50/60 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Shield className="w-3.5 h-3.5 text-teal-700" />
            <span>About Tooth Cure Dental Center</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight"
          >
            A Modern Center for{' '}
            <span className="text-teal-700">Implantology &amp; Orthodontics</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-16 h-1 bg-gradient-to-r from-teal-600 to-sky-600 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Two-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Clinic Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 aspect-[4/3] bg-slate-900 group">
              <img
                src={getAssetUrl('images/gmap/gmap-3.jpg')}
                alt="Tooth Cure Dental Real Clinic Interior (Lalmatia Google Maps Photo)"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

              {/* In-Image Floating Tag */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/50 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-teal-800 uppercase tracking-wider">
                    Lalmatia, Dhanmondi 27
                  </div>
                  <div className="text-sm font-semibold text-slate-800">
                    State-of-the-Art Ergonomic Dental Suite
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                  <Sparkles size={20} />
                </div>
              </div>
            </div>

            {/* Experience badge */}
            <div className="hidden sm:flex absolute -top-4 -right-4 bg-gradient-to-br from-[#0A2540] to-teal-800 text-white p-4 rounded-2xl shadow-xl items-center gap-3 border border-white/20">
              <div className="text-3xl font-extrabold text-teal-300">15+</div>
              <div className="text-xs font-medium leading-tight">
                Years Combined<br />Clinical Mastery
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-4 text-slate-600 leading-relaxed text-base sm:text-lg">
              <p>
                Situated at the heart of Lalmatia behind Genetic Plaza (Dhanmondi 27), <strong>Tooth Cure Dental Orthodontics &amp; Implant Center</strong> was established to provide the residents of Dhaka with internationally recognized standards of dental health.
              </p>
              <p>
                Under the clinical stewardship of <strong>Dr. Pritam Sarker Ratul</strong> (Dental Implants &amp; Maxillofacial Surgery) and <strong>Dr. Ornisha Urmi</strong> (Clear Aligners, Orthodontics &amp; Aesthetic Endodontics), we focus on gentle, pain-free treatments utilizing advanced digital imaging, rotary technologies, and multi-stage hospital-grade sterilization.
              </p>
            </div>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                { title: 'Zero Cross-Infection Guarantee', desc: 'Autoclave Class-B vacuum sterilization for all handpieces and surgical instruments.' },
                { title: 'Minimally Invasive Dentistry', desc: 'Preserving maximal natural tooth structure through micro-endodontics and aesthetic bonding.' },
                { title: 'Personalized Treatment Plans', desc: 'Transparent diagnosis, step-by-step cost breakdown, and zero hidden fees.' },
                { title: 'Evening & Emergency Consultations', desc: 'Convenient 4:30 PM – 9:30 PM hours tailored for professionals and families.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">{item.title}</h4>
                    <p className="text-slate-500 text-xs mt-0.5 leading-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={scrollToBooking}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-teal-600 to-[#0A2540] shadow-sm hover:shadow-md transition-all active:scale-95 text-sm"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={scrollToServices}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-all text-sm"
              >
                <span>View All Services</span>
              </button>
            </div>
          </motion.div>

        </div>

        {/* Clinic Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-slate-100">
          {clinicInfo.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-4 rounded-2xl bg-slate-50/70 border border-slate-100"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2540] mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClinicIntro;
