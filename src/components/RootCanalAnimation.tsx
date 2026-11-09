import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, RotateCcw, ShieldCheck, Calendar } from 'lucide-react';

const STEPS = [
  {
    id: 0,
    title: 'Healthy Tooth Structure',
    description: 'Enamel and dentin shield the vital inner pulp. When bacterial decay or trauma breaches these layers, sensitivity and throbbing begin.',
    detail: 'Early evaluation prevents deep infection and saves the tooth structure.',
  },
  {
    id: 1,
    title: 'Pulp Chamber Inflammation',
    description: 'Deep bacteria colonize the pulp tissue, irritating sensory nerve endings and causing clinical inflammation and toothache.',
    detail: 'Without intervention, bacteria can migrate past the root apex into the surrounding bone.',
  },
  {
    id: 2,
    title: 'Precision Micro-Access',
    description: 'Under gentle local anesthesia, a microscopic access opening is crafted through the crown to expose the infected canal system.',
    detail: 'Completely painless and performed with modern magnification for precision.',
  },
  {
    id: 3,
    title: 'Rotary Cleaning & Disinfection',
    description: 'High-tech flexible rotary nickel-titanium files and irrigants clear out bacteria and diseased tissue, shaping canals smoothly.',
    detail: 'Apex locators measure root lengths accurately to within 0.1 mm.',
  },
  {
    id: 4,
    title: 'Biocompatible Canal Sealing',
    description: 'Canals are hermetically obturated with thermoplastic gutta-percha and bioceramic sealer to prevent future reinfection.',
    detail: 'This 3D hermetic seal permanently shields the root interior.',
  },
  {
    id: 5,
    title: 'Final Restoration & Crown',
    description: 'The coronal access is restored with high-strength composite bonding and a full ceramic or zirconia crown for long-term function.',
    detail: 'The saved natural tooth is now fully pain-free and ready for normal chewing.',
  },
];

export default function RootCanalAnimation() {
  const [step, setStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const next = () => setStep(s => Math.min(s + 1, STEPS.length - 1));
  const prev = () => setStep(s => Math.max(s - 1, 0));
  const reset = () => setStep(0);

  useEffect(() => {
    let timer: number;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        timer = window.setTimeout(() => {
          setStep(s => (s === 0 ? 1 : s));
        }, 1200);
      }
    }, { threshold: 0.15 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const currentStep = STEPS[step];
  const pulpColor = step >= 1 ? (step >= 4 ? '#0E4D6E' : '#E11D48') : '#F472B6';
  const accessVisible = step >= 2;
  const instrumentVisible = step === 3;
  const restoredFilling = step === 5;

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="root-canal"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0E4D6E] text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#0E4D6E]" />
            <span>Conservative Endodontics</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight"
          >
            Understanding <span className="text-[#0E4D6E]">Root Canal Treatment</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg mt-3"
          >
            Discover how modern rotary endodontics relieves severe tooth pain and preserves your natural tooth comfortably.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Interactive Tooth Visualizer */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-60 sm:w-72 bg-slate-50 p-6 rounded-3xl border border-blue-100 shadow-[0_10px_30px_rgba(14,77,110,0.06)]">
              <svg viewBox="0 0 220 380" className="w-full">
                <defs>
                  <linearGradient id="rcToothGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="100%" stopColor="#E2E8F0" />
                  </linearGradient>
                  <linearGradient id="rcRootGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F1E8D9" />
                    <stop offset="100%" stopColor="#D9C7AE" />
                  </linearGradient>
                  <linearGradient id="rcFillingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0E4D6E" />
                    <stop offset="100%" stopColor="#072738" />
                  </linearGradient>
                  <clipPath id="canalClip">
                    <rect x="95" y="130" width="30" height="120" rx="8" />
                  </clipPath>
                </defs>

                {/* Gum */}
                <path d="M 30 240 Q 30 265 55 278 Q 80 285 110 285 Q 140 285 165 278 Q 190 265 190 240 L 185 225 L 35 225 Z" fill="rgba(244,114,182,0.3)" stroke="rgba(244,114,182,0.5)" strokeWidth="1" />

                {/* Root */}
                <path d="M 75 228 Q 65 265 72 308 Q 80 338 110 345 Q 140 338 148 308 Q 155 265 145 228 Z" fill="url(#rcRootGrad)" stroke="#CBD5E1" strokeWidth="1" />

                {/* Dentin body */}
                <path d="M 45 175 Q 35 140 45 100 Q 57 55 85 35 Q 110 20 135 35 Q 163 55 175 100 Q 185 140 175 175 Q 165 210 150 225 Q 130 238 110 238 Q 90 238 70 225 Q 55 210 45 175 Z"
                  fill="url(#rcToothGrad)" stroke="#94A3B8" strokeWidth="1.5" />

                {/* Pulp chamber */}
                <motion.path
                  d="M 95 105 Q 88 135 90 170 Q 92 195 110 200 Q 128 195 130 170 Q 132 135 125 105 Q 118 90 110 88 Q 102 90 95 105 Z"
                  fill={pulpColor}
                  animate={{ fill: pulpColor }}
                  transition={{ duration: 0.4 }}
                  stroke="rgba(0,0,0,0.15)" strokeWidth="1"
                />

                {/* Access opening */}
                {accessVisible && (
                  <motion.ellipse cx="110" cy="42" rx="15" ry="10"
                    fill="#334155" stroke="#0E4D6E" strokeWidth="1.5"
                    initial={{ opacity: 0, scaleY: 0 }} animate={{ opacity: 1, scaleY: 1 }}
                    transition={{ duration: 0.3 }} />
                )}

                {/* Canal filling */}
                {step >= 4 && (
                  <motion.rect x="96" y="130" width="28" height="120" rx="8"
                    fill="url(#rcFillingGrad)"
                    initial={{ scaleY: 0, originY: 'bottom' }} animate={{ scaleY: 1 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    style={{ transformOrigin: '110px 250px' }}
                    clipPath="url(#canalClip)" />
                )}

                {/* Rotary Instrument */}
                {instrumentVisible && (
                  <motion.g
                    initial={{ y: -40, opacity: 0 }}
                    animate={{ y: [0, 60, 0], opacity: 1 }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <rect x="108" y="20" width="4" height="100" rx="2" fill="#64748B" stroke="#0E4D6E" strokeWidth="1" />
                    <polygon points="108,120 112,120 110,135" fill="#334155" />
                  </motion.g>
                )}

                {/* Restoration filling */}
                {restoredFilling && (
                  <motion.ellipse cx="110" cy="42" rx="15" ry="10"
                    fill="#0E4D6E" stroke="#0A3850" strokeWidth="1.5"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} />
                )}
              </svg>
            </div>

            {/* Step name */}
            <div className="text-center mt-4">
              <span className="text-[#0E4D6E] font-headline font-bold text-base sm:text-lg">
                Step {step + 1}: {currentStep.title}
              </span>
            </div>

            {/* Stepper Dots */}
            <div className="flex gap-1.5 mt-3">
              {STEPS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setStep(i)}
                  aria-label={`Go to step ${i + 1}`}
                  className={`rounded-full transition-all duration-200 ${
                    i === step ? 'w-6 h-2 bg-[#0E4D6E]' : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            {/* Step Navigation Controls */}
            <div className="flex items-center gap-3 mt-5">
              <button
                onClick={prev}
                disabled={step === 0}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-slate-200 bg-white text-slate-700 disabled:opacity-40 hover:bg-slate-50 transition-all text-xs font-semibold"
              >
                <ChevronLeft size={15} /> Prev
              </button>
              <button
                onClick={reset}
                className="w-8 h-8 rounded-full border border-slate-200 bg-white text-slate-500 flex items-center justify-center hover:bg-slate-50 transition-all"
                title="Reset animation"
              >
                <RotateCcw size={13} />
              </button>
              <button
                onClick={next}
                disabled={step === STEPS.length - 1}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-[#0E4D6E] text-white disabled:opacity-40 hover:bg-[#0A3850] transition-all text-xs font-semibold"
              >
                Next <ChevronRight size={15} />
              </button>
            </div>
          </div>

          {/* Right: Step Details */}
          <div className="lg:col-span-7 space-y-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="bg-slate-50 border border-blue-100 rounded-3xl p-6 sm:p-7"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-[#0E4D6E] text-white font-headline font-bold text-sm flex items-center justify-center">
                    {step + 1}
                  </div>
                  <h3 className="font-headline font-bold text-slate-900 text-xl sm:text-2xl">
                    {currentStep.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-base leading-relaxed mb-4">
                  {currentStep.description}
                </p>
                <div className="bg-white border border-blue-100 rounded-xl p-3.5 text-xs text-slate-600 font-medium">
                  {currentStep.detail}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Quick Step Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {STEPS.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setStep(i)}
                  className={`p-3 rounded-xl text-left border text-xs font-semibold transition-all ${
                    i === step
                      ? 'bg-blue-50 border-[#0E4D6E] text-[#0E4D6E]'
                      : i < step
                      ? 'bg-white border-slate-200 text-slate-700'
                      : 'bg-white/60 border-slate-100 text-slate-400'
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0E4D6E]" />
                    <span>Step {i + 1}</span>
                  </div>
                  <div className="truncate font-normal">{s.title.split(' ')[0]}</div>
                </button>
              ))}
            </div>

            {/* Callout */}
            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-headline font-bold text-slate-900 text-sm">
                  Experiencing Tooth Sensitivity or Pain?
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Consult our endodontic specialists for single-visit rotary pain relief.
                </p>
              </div>
              <button
                onClick={scrollToBooking}
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0E4D6E] text-white text-xs sm:text-sm font-semibold hover:bg-[#0A3850] transition-colors"
              >
                <Calendar size={14} />
                <span>Book Consultation</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
