import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle, AlertCircle, Calendar, Clock, MapPin, Phone } from 'lucide-react';
import { doctors } from '../data/doctors';
import { clinicInfo } from '../data/clinicInfo';

const TIME_SLOTS = [
  '4:30 PM - 5:00 PM',
  '5:00 PM - 5:30 PM',
  '5:30 PM - 6:00 PM',
  '6:00 PM - 6:30 PM',
  '6:30 PM - 7:00 PM',
  '7:00 PM - 7:30 PM',
  '7:30 PM - 8:00 PM',
  '8:00 PM - 8:30 PM',
  '8:30 PM - 9:00 PM',
  '9:00 PM - 9:30 PM',
];

function buildWhatsAppMessage(data: Record<string, string>) {
  return encodeURIComponent(
    `Hello Tooth Cure Dental Orthodontics & Implant Center,\n\nI would like to book a dental consultation.\n\n👤 Patient Name: ${data.name}\n📞 Phone: ${data.phone}\n👨‍⚕️ Preferred Specialist: ${data.doctor || 'Any Specialist'}\n🦷 Service / Problem: ${data.treatment}\n📅 Preferred Date: ${data.date}\n⏰ Preferred Slot: ${data.time}\n💬 Notes: ${data.message || 'None'}\n\nPlease confirm availability for this slot.\n\nThank you!`
  );
}

export default function AppointmentBooking() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    doctor: '',
    treatment: '',
    date: '',
    time: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Please enter patient name.';
    if (!form.phone.trim()) e.phone = 'Please enter phone number.';
    if (!form.treatment) e.treatment = 'Please select a dental service or concern.';
    if (!form.date) e.date = 'Please pick a preferred date.';
    if (!form.time) e.time = 'Please pick an evening time slot.';
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    const msg = buildWhatsAppMessage(form);
    window.open(`https://wa.me/${clinicInfo.whatsapp.number}?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: '' }));
    }
  };

  const inputBase = 'w-full px-4 py-3 rounded-xl border font-body text-sm bg-slate-50 text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none transition-all duration-200';
  const inputNormal = 'border-slate-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/15';
  const inputError = 'border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200';

  const minDate = new Date().toISOString().split('T')[0];

  return (
    <section
      id="booking"
      className="py-20 lg:py-28 bg-slate-50/80 relative overflow-hidden"
    >
      {/* Background soft accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal-50/70 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Left Column — Practice Details & Reassurance */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-4">
                <Calendar className="w-3.5 h-3.5 text-teal-700" />
                <span>Instant Online Reservation</span>
              </span>
              <h2 className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight tracking-tight">
                Schedule Your Visit in{' '}
                <span className="text-teal-700">Lalmatia</span>
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mt-3">
                Reserve your slot with Dr. Pritam Sarker Ratul or Dr. Ornisha Urmi. We confirm all requests rapidly via WhatsApp or phone.
              </p>
            </div>

            {/* Clinic Info Cards */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                <MapPin className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">Location</h4>
                  <p className="text-slate-600 text-xs mt-0.5">
                    1/1E, Block C, Lalmatia (Behind Genetic Plaza, Dhanmondi 27), Dhaka - 1207
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                <Clock className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">Clinical Hours</h4>
                  <p className="text-slate-600 text-xs mt-0.5">
                    Saturday – Thursday: 4:30 PM – 9:30 PM (Friday By Prior Appointment)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                <Phone className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">Hotlines</h4>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-teal-800 font-semibold mt-0.5">
                    <a href={`tel:${clinicInfo.phones.primaryRaw}`} className="hover:underline">
                      {clinicInfo.phones.primary}
                    </a>
                    <span>•</span>
                    <a href={`tel:${clinicInfo.phones.secondaryRaw}`} className="hover:underline">
                      {clinicInfo.phones.secondary}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-teal-50 border border-teal-100 flex items-center gap-3">
              <MessageCircle className="w-6 h-6 text-teal-700 shrink-0" />
              <p className="text-xs text-teal-900 leading-relaxed font-medium">
                Need immediate answers? Click submit below to open WhatsApp with your appointment request auto-filled!
              </p>
            </div>
          </motion.div>

          {/* Right Column — Interactive Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-lg relative">
              
              {submitted ? (
                <div className="text-center py-8 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={36} />
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-2xl text-slate-900 mb-2">
                      Appointment Request Prepared!
                    </h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto">
                      Your appointment details have been prepared for <strong>Tooth Cure Dental Center</strong>. If WhatsApp did not open automatically, tap the button below.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-left text-xs space-y-1.5 max-w-md mx-auto">
                    <div><strong>Patient:</strong> {form.name}</div>
                    <div><strong>Phone:</strong> {form.phone}</div>
                    <div><strong>Doctor:</strong> {form.doctor || 'Any Specialist'}</div>
                    <div><strong>Treatment:</strong> {form.treatment}</div>
                    <div><strong>Date &amp; Slot:</strong> {form.date} ({form.time})</div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={`https://wa.me/${clinicInfo.whatsapp.number}?text=${buildWhatsAppMessage(form)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-[#25D366] hover:bg-[#1EBE5D] transition-colors text-sm shadow-sm"
                    >
                      <MessageCircle size={18} />
                      <span>Open WhatsApp Now</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-3 rounded-xl font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors text-sm"
                    >
                      Book Another Slot
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Patient Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. Tanvir Ahmed"
                        className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
                      />
                      {errors.name && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="01XXXXXXXXX"
                        className={`${inputBase} ${errors.phone ? inputError : inputNormal}`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Doctor & Treatment */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Preferred Specialist
                      </label>
                      <select
                        name="doctor"
                        value={form.doctor}
                        onChange={handleChange}
                        className={`${inputBase} ${inputNormal}`}
                      >
                        <option value="">Any Available Specialist</option>
                        {doctors.map(d => (
                          <option key={d.id} value={d.name}>
                            {d.name} ({d.specialization.split('&')[0].trim()})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Service / Dental Concern *
                      </label>
                      <select
                        name="treatment"
                        value={form.treatment}
                        onChange={handleChange}
                        className={`${inputBase} ${errors.treatment ? inputError : inputNormal}`}
                      >
                        <option value="">Select Dental Service</option>
                        <option value="Dental Implants Consultation">Dental Implants Consultation</option>
                        <option value="Clear Aligners / Braces Evaluation">Clear Aligners / Braces Evaluation</option>
                        <option value="Single-Sitting Root Canal (RCT)">Single-Sitting Root Canal (RCT)</option>
                        <option value="Laser Teeth Whitening">Laser Teeth Whitening</option>
                        <option value="Zirconia Crown / Ceramic Bridge">Zirconia Crown / Ceramic Bridge</option>
                        <option value="Surgical Wisdom Tooth Removal">Surgical Wisdom Tooth Removal</option>
                        <option value="Ultrasonic Scaling & Deep Cleaning">Ultrasonic Scaling &amp; Deep Cleaning</option>
                        <option value="Tooth Pain / Emergency Checkup">Tooth Pain / Emergency Checkup</option>
                        <option value="General Consultation & Digital RVG">General Consultation &amp; Digital RVG</option>
                      </select>
                      {errors.treatment && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.treatment}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        min={minDate}
                        value={form.date}
                        onChange={handleChange}
                        className={`${inputBase} ${errors.date ? inputError : inputNormal}`}
                      />
                      {errors.date && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.date}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Evening Time Slot *
                      </label>
                      <select
                        name="time"
                        value={form.time}
                        onChange={handleChange}
                        className={`${inputBase} ${errors.time ? inputError : inputNormal}`}
                      >
                        <option value="">Select Preferred Time</option>
                        {TIME_SLOTS.map(slot => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                      {errors.time && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.time}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Note */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Symptoms or Specific Notes (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Briefly mention pain location, bleeding gums, prior treatments, or aligner interest..."
                      className={`${inputBase} ${inputNormal} resize-none`}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-body font-semibold text-white bg-gradient-to-r from-teal-600 to-[#0A2540] shadow-md hover:from-teal-500 hover:to-slate-900 active:scale-98 transition-all duration-200 text-sm sm:text-base"
                  >
                    <MessageCircle className="w-5 h-5 text-teal-300" />
                    <span>Send Appointment Request via WhatsApp</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-500">
                    🔒 Strictly confidential. Your contact is only used for clinical appointment confirmations.
                  </p>
                </form>
              )}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
