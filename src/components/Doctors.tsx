import { useState } from 'react';
import { motion } from 'framer-motion';
import { doctors } from '../data/doctors';
import { User, Calendar, ShieldCheck, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

export default function Doctors() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const scrollToBooking = (doctorName?: string) => {
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
      if (doctorName) {
        setTimeout(() => {
          const select = document.querySelector('select[name="doctor"]') as HTMLSelectElement | null;
          if (select) {
            select.value = doctorName;
            select.dispatchEvent(new Event('change', { bubbles: true }));
          }
        }, 500);
      }
    }
  };

  return (
    <section id="doctors" className="py-20 lg:py-28 bg-white relative">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-teal-700" />
            <span>Consultant Clinical Team</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight"
          >
            Meet Our <span className="text-teal-700">Specialist Surgeons</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg mt-3"
          >
            Qualified, post-graduate trained dental clinicians from Dhaka University affiliated institutions dedicated to patient wellness and clinical perfection.
          </motion.p>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {doctors.map((doctor, i) => {
            const isExpanded = expandedId === doctor.id;

            return (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="bg-slate-50/80 rounded-3xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                {/* Doctor Avatar / Header Banner */}
                <div className="p-6 sm:p-8 bg-gradient-to-br from-teal-900 via-[#0A2540] to-slate-900 text-white relative">
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/10 border-2 border-teal-400/30 overflow-hidden flex items-center justify-center shrink-0 shadow-lg">
                      <User size={48} className="text-teal-200" />
                    </div>
                    <div>
                      <div className="inline-block px-2.5 py-0.5 rounded-full bg-teal-400/20 text-teal-300 text-[11px] font-semibold tracking-wide uppercase mb-1">
                        {doctor.bmdc}
                      </div>
                      <h3 className="font-headline font-bold text-xl sm:text-2xl text-white leading-tight">
                        {doctor.name}
                      </h3>
                      <p className="text-teal-200 text-xs sm:text-sm font-medium mt-1">
                        {doctor.designation}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6 bg-white">
                  
                  {/* Qualifications */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                      Degrees &amp; Credentials
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {doctor.qualifications.map((q, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-teal-50 border border-teal-100 text-teal-900 text-xs font-medium"
                        >
                          {q}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bio */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Clinical Focus &amp; Profile
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {doctor.bio}
                    </p>
                  </div>

                  {/* Clinical Specialties */}
                  <div>
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : doctor.id)}
                      className="flex items-center justify-between w-full text-xs font-bold uppercase tracking-wider text-teal-800 hover:text-teal-900 transition-colors py-1 border-t border-slate-100"
                    >
                      <span>Key Clinical Procedures ({doctor.specialties.length})</span>
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {isExpanded && (
                      <ul className="mt-3 space-y-1.5">
                        {doctor.specialties.map((s, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                            <CheckCircle2 size={13} className="text-teal-600 shrink-0" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Booking CTA */}
                  <div className="pt-2">
                    <button
                      onClick={() => scrollToBooking(doctor.name)}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-body font-semibold text-sm text-white bg-gradient-to-r from-teal-600 to-[#0A2540] shadow-xs hover:shadow-md active:scale-98 transition-all"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book with {doctor.name.split(' ')[1]}</span>
                    </button>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
