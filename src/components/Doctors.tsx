import { useState } from 'react';
import { motion } from 'framer-motion';
import { doctors } from '../data/doctors';
import { handleImageError } from '../utils/assets';
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
            <span>Consultant Clinical Leadership</span>
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
            Qualified, post-graduate trained dental clinicians from Dhaka University (DU) and Dhaka Dental College (DDC) dedicated to precision oral care in Lalmatia, Dhanmondi 27.
          </motion.p>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {doctors.map((doctor, i) => {
            const isExpanded = expandedId === doctor.id;

            return (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg hover:border-teal-300 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Doctor Portrait Area */}
                <div className="relative w-full h-80 bg-gradient-to-t from-slate-900 via-slate-800 to-teal-950 overflow-hidden flex items-center justify-center">
                  {doctor.photoUrl ? (
                    <img
                      src={doctor.photoUrl}
                      alt={doctor.name}
                      onError={handleImageError}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#0A2540] via-teal-950 to-slate-900 w-full h-full">
                      <div className="w-24 h-24 rounded-3xl bg-teal-800/30 border border-teal-500/30 text-teal-300 flex items-center justify-center mb-3 shadow-lg">
                        <User size={44} className="text-teal-300/80" />
                      </div>
                      <span className="text-xs font-semibold tracking-wider uppercase text-teal-300/90">
                        Associate Dental Surgeon
                      </span>
                      <span className="text-[11px] text-slate-400 mt-1">
                        Tooth Cure Clinical Team
                      </span>
                    </div>
                  )}

                  {/* Gradient shadow overlay on photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                  {/* BMDC Pill */}
                  {doctor.bmdc && (
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-teal-800 shadow-sm border border-teal-100">
                      {doctor.bmdc}
                    </div>
                  )}

                  {/* In-Photo Name Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-headline font-bold text-xl text-white leading-tight drop-shadow-sm">
                      {doctor.name}
                    </h3>
                    <p className="text-teal-300 text-xs font-medium mt-0.5 drop-shadow-sm">
                      {doctor.designation}
                    </p>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5 bg-white">
                  
                  {/* Qualifications */}
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Degrees &amp; Certifications
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
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Clinical Focus
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {doctor.bio}
                    </p>
                  </div>

                  {/* Clinical Specialties Collapsible */}
                  <div>
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : doctor.id)}
                      className="flex items-center justify-between w-full text-xs font-bold uppercase tracking-wider text-teal-800 hover:text-teal-900 transition-colors py-1.5 border-t border-slate-100"
                    >
                      <span>Key Procedures ({doctor.specialties.length})</span>
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {isExpanded && (
                      <ul className="mt-2.5 space-y-1.5">
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
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-body font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-teal-600 to-[#0A2540] shadow-xs hover:shadow-md active:scale-98 transition-all"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Appointment with {doctor.name.split(' ')[1]}</span>
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
