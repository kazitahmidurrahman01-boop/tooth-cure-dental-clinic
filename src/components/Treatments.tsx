import { useState } from 'react';
import { motion } from 'framer-motion';
import { treatmentCategories } from '../data/treatments';
import {
  Smile, Shield, Crown, Stethoscope, Sparkles, Award,
  Calendar, Clock, Tag, ChevronRight
} from 'lucide-react';
import clsx from 'clsx';

const ICON_MAP: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Crown,
  Smile,
  Shield,
  Sparkles,
  Award,
  Stethoscope,
};

export default function Treatments() {
  const [activeCategoryId, setActiveCategoryId] = useState(treatmentCategories[0].id);

  const activeCategory = treatmentCategories.find(c => c.id === activeCategoryId) || treatmentCategories[0];

  const scrollToBooking = (treatmentName?: string) => {
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
      if (treatmentName) {
        setTimeout(() => {
          const select = document.querySelector('select[name="treatment"]') as HTMLSelectElement | null;
          if (select) {
            select.value = treatmentName;
            select.dispatchEvent(new Event('change', { bubbles: true }));
          }
        }, 500);
      }
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50/70 relative">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Shield className="w-3.5 h-3.5 text-teal-700" />
            <span>Comprehensive Clinical Portfolio</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight"
          >
            Specialized Dental Treatments at{' '}
            <span className="text-teal-700">Tooth Cure</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg mt-3"
          >
            From single-tooth implants and invisible braces to single-sitting rotary root canal therapies, all procedures are executed with micro-precision.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {treatmentCategories.map((cat) => {
            const IconComponent = ICON_MAP[cat.icon] || Smile;
            const isActive = activeCategoryId === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={clsx(
                  'flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl font-body font-semibold text-xs sm:text-sm transition-all duration-300',
                  isActive
                    ? 'bg-gradient-to-r from-teal-600 to-[#0A2540] text-white shadow-md shadow-teal-700/20 scale-102'
                    : 'bg-white text-slate-700 border border-slate-200/90 hover:border-teal-300 hover:bg-teal-50/40'
                )}
              >
                <IconComponent size={16} className={isActive ? 'text-teal-200' : 'text-slate-500'} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Category Banner */}
        <motion.div
          key={activeCategory.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-wider mb-2">
                {activeCategory.badge}
              </span>
              <h3 className="font-headline font-bold text-2xl sm:text-3xl text-slate-900">
                {activeCategory.name}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base mt-1 max-w-3xl">
                {activeCategory.description}
              </p>
            </div>
            <button
              onClick={() => scrollToBooking()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#0A2540] hover:bg-slate-800 transition-colors shrink-0"
            >
              <Calendar className="w-4 h-4 text-teal-300" />
              <span>Consult for {activeCategory.name}</span>
            </button>
          </div>

          {/* Treatment Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {activeCategory.treatments.map((treatment, idx) => (
              <motion.div
                key={treatment.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className={clsx(
                  'p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between',
                  treatment.highlight
                    ? 'bg-gradient-to-br from-white to-teal-50/40 border-teal-200 shadow-xs hover:shadow-md hover:border-teal-400'
                    : 'bg-slate-50/60 border-slate-200/80 hover:bg-white hover:border-slate-300 hover:shadow-xs'
                )}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h4 className="font-headline font-bold text-slate-900 text-base leading-snug">
                      {treatment.name}
                    </h4>
                    {treatment.highlight && (
                      <span className="px-2 py-0.5 rounded-md bg-teal-100 text-teal-800 text-[10px] font-bold uppercase tracking-wide shrink-0">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {treatment.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    {treatment.duration && (
                      <span className="flex items-center gap-1 text-slate-600 font-medium">
                        <Clock size={13} className="text-teal-600" />
                        <span>{treatment.duration}</span>
                      </span>
                    )}
                    {treatment.priceRange && (
                      <span className="flex items-center gap-1 font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded-md">
                        <Tag size={12} className="text-teal-600" />
                        <span>{treatment.priceRange}</span>
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => scrollToBooking(treatment.name)}
                    className="w-full mt-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold text-teal-800 bg-teal-50/80 hover:bg-teal-100 hover:text-teal-900 transition-colors"
                  >
                    <span>Request Appointment</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
