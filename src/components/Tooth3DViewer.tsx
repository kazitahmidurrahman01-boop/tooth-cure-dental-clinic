import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCw, Scan, Eye, Layers, ShieldCheck, Activity } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

const TOTAL_FRAMES = 50;
const FRAME_PATHS = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
  const pad = String(i).padStart(2, '0');
  return getAssetUrl(`tooth-3d/frame-${pad}.webp`);
});

export default function Tooth3DViewer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  const [currentFrame, setCurrentFrame] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [scanActive, setScanActive] = useState(false);
  const [activeTab, setActiveTab] = useState<'intact' | 'exploded'>('intact');
  const [activePin, setActivePin] = useState<string | null>(null);

  // Physics and rotation state
  const targetFrameRef = useRef(0);
  const displayedFrameRef = useRef(0);
  const pointerStartRef = useRef<{ x: number; y: number; frame: number } | null>(null);
  const userInteractedRef = useRef(false);
  const lastInteractionTimeRef = useRef(Date.now());
  const idleOscillationRef = useRef(0);

  // 3D perspective tilt
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Draw current frame to canvas with high DPI rendering
  const renderFrame = useCallback((frameIdx: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const safeIdx = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(frameIdx)));
    const img = imagesRef.current[safeIdx];
    if (!img || !img.complete) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    if (canvas.width !== Math.round(rect.width * dpr) || canvas.height !== Math.round(rect.height * dpr)) {
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, rect.width, rect.height);

    // Center and scale image proportionally
    const scale = Math.min(rect.width / img.width, rect.height / img.height) * 1.05;
    const drawW = img.width * scale;
    const drawH = img.height * scale;
    const drawX = (rect.width - drawW) / 2;
    const drawY = (rect.height - drawH) / 2;

    ctx.drawImage(img, drawX, drawY, drawW, drawH);
    ctx.restore();
  }, []);

  // Preload all 50 transparent WebP frames
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    FRAME_PATHS.forEach((src, i) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (i === 0) {
          renderFrame(0);
        }
        if (loadedCount === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };
      loadedImages.push(img);
    });

    imagesRef.current = loadedImages;
  }, [renderFrame]);

  // Main 60fps render and lerp physics loop
  useEffect(() => {
    let animId: number;

    const tick = () => {
      const now = Date.now();

      // Idle floating / breathing rotation if user hasn't interacted for 3s
      if (!userInteractedRef.current && now - lastInteractionTimeRef.current > 3000) {
        idleOscillationRef.current += 0.012;
        if (activeTab === 'intact') {
          // Gentle rotation around intact angles
          const idleFrame = Math.sin(idleOscillationRef.current) * 7 + 7;
          targetFrameRef.current = idleFrame;
        } else {
          // Exploded view gentle breathing
          const idleFrame = 33 + Math.sin(idleOscillationRef.current) * 5;
          targetFrameRef.current = idleFrame;
        }
      }

      // Smooth interpolation towards target frame
      const diff = targetFrameRef.current - displayedFrameRef.current;
      displayedFrameRef.current += diff * 0.14;

      const roundedFrame = Math.round(displayedFrameRef.current);
      renderFrame(displayedFrameRef.current);
      setCurrentFrame(Math.max(0, Math.min(TOTAL_FRAMES - 1, roundedFrame)));

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [renderFrame, activeTab]);

  // Scroll listener: scrolls change the 3D tooth rotation (laptop wheel, phone touch scroll)
  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById('home');
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      const heroHeight = heroEl ? heroEl.offsetHeight : window.innerHeight;

      // Map scroll progress through hero to 3D rotation
      if (scrollY <= heroHeight * 1.2) {
        const progress = Math.min(1, Math.max(0, scrollY / (heroHeight * 0.85)));
        const target = progress * (TOTAL_FRAMES - 1);
        targetFrameRef.current = target;
        lastInteractionTimeRef.current = Date.now();
        userInteractedRef.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse wheel directly over the tooth visualizer to scrub rotation without requiring page scroll
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    userInteractedRef.current = true;
    lastInteractionTimeRef.current = Date.now();

    const delta = e.deltaY > 0 ? 1.5 : -1.5;
    let next = targetFrameRef.current + delta;
    if (next < 0) next = TOTAL_FRAMES - 1;
    if (next >= TOTAL_FRAMES) next = 0;
    targetFrameRef.current = next;
  };

  // Pointer drag interaction (Both desktop mouse click & phone touch swipe)
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    userInteractedRef.current = true;
    lastInteractionTimeRef.current = Date.now();

    pointerStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      frame: targetFrameRef.current,
    };

    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    // 3D perspective tilt calculation
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      setTilt({ x: -py * 14, y: px * 16 });
    }

    if (!isDragging || !pointerStartRef.current) return;

    const deltaX = e.clientX - pointerStartRef.current.x;
    const sensitivity = TOTAL_FRAMES / 280;
    let newFrame = pointerStartRef.current.frame + deltaX * sensitivity;

    if (newFrame < 0) newFrame = (newFrame % TOTAL_FRAMES) + TOTAL_FRAMES;
    if (newFrame >= TOTAL_FRAMES) newFrame = newFrame % TOTAL_FRAMES;

    targetFrameRef.current = newFrame;
    lastInteractionTimeRef.current = Date.now();
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    pointerStartRef.current = null;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const handlePointerLeave = () => {
    setTilt({ x: 0, y: 0 });
    if (!isDragging) {
      setTimeout(() => {
        userInteractedRef.current = false;
      }, 2500);
    }
  };

  const setViewMode = (mode: 'intact' | 'exploded') => {
    setActiveTab(mode);
    userInteractedRef.current = true;
    lastInteractionTimeRef.current = Date.now();
    targetFrameRef.current = mode === 'intact' ? 0 : 33;
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveTab('intact');
    targetFrameRef.current = 0;
    lastInteractionTimeRef.current = Date.now();
    userInteractedRef.current = false;
  };

  // Calculate rotation angle in degrees (0° to 360°)
  const rotationAngle = Math.round((currentFrame / (TOTAL_FRAMES - 1)) * 360);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square max-w-[440px] lg:max-w-[500px] mx-auto flex items-center justify-center select-none"
      onPointerLeave={handlePointerLeave}
      onWheel={handleWheel}
      style={{ perspective: '1400px' }}
    >
      {/* Ambient background golden aura glow */}
      <div
        className="absolute -inset-10 rounded-full opacity-35 blur-3xl pointer-events-none transition-all duration-1000"
        style={{
          background: 'radial-gradient(circle, rgba(200,155,60,0.4) 0%, rgba(11,42,85,0.6) 50%, transparent 75%)',
        }}
      />

      {/* Futuristic Holographic Podium (Pedestal Base) under the tooth */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[78%] h-20 pointer-events-none">
        {/* Glow ellipse ground reflection */}
        <div
          className="absolute inset-0 rounded-full blur-md opacity-70"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(200,155,60,0.5) 0%, rgba(7,29,65,0.8) 60%, transparent 80%)',
          }}
        />

        {/* Holographic neon rings */}
        <div
          className="absolute inset-x-4 top-2 h-14 rounded-full border border-gold/40 shadow-[0_0_20px_rgba(200,155,60,0.4)] animate-pulse-gold"
        />
        <div
          className="absolute inset-x-8 top-4 h-10 rounded-full border border-dashed border-gold/25 animate-spin-slow"
        />

        {/* Pedestal ticks / compass degrees */}
        <div className="absolute inset-x-12 top-6 flex justify-between text-[9px] font-mono text-gold/60">
          <span>0°</span>
          <span>90°</span>
          <span>180°</span>
          <span>270°</span>
          <span>360°</span>
        </div>
      </div>

      {/* 3D Visualizer Hologram Stage (Floating smoothly without any harsh white card) */}
      <motion.div
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
          y: isDragging ? 0 : [0, -10, 0],
        }}
        transition={{
          rotateX: { duration: 0.1, ease: 'easeOut' },
          rotateY: { duration: 0.1, ease: 'easeOut' },
          y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
        }}
        className={`relative w-full h-full rounded-[3rem] p-4 flex flex-col items-center justify-center transition-all duration-500 ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{
          background: 'radial-gradient(ellipse at center, rgba(11,42,85,0.4) 0%, rgba(7,29,65,0.6) 70%, transparent 100%)',
          border: '1px solid rgba(200,155,60,0.25)',
          boxShadow: '0 25px 50px -12px rgba(5,15,34,0.7), inset 0 0 40px rgba(200,155,60,0.08)',
          transformStyle: 'preserve-3d',
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {/* Top Control Bar: Mode Toggle + Degree Indicator + Reset */}
        <div className="absolute top-4 left-5 right-5 z-20 flex items-center justify-between pointer-events-none">
          {/* Mode Switcher */}
          <div className="pointer-events-auto flex items-center p-1 rounded-2xl bg-navy/90 backdrop-blur-xl border border-gold/30 shadow-lg">
            <button
              onClick={() => setViewMode('intact')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-headline font-bold transition-all duration-300 ${
                activeTab === 'intact'
                  ? 'bg-gold text-navy shadow-gold'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Eye size={12} />
              <span>360° Intact</span>
            </button>

            <button
              onClick={() => setViewMode('exploded')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-headline font-bold transition-all duration-300 ${
                activeTab === 'exploded'
                  ? 'bg-gold text-navy shadow-gold'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Layers size={12} />
              <span>Exploded View</span>
            </button>
          </div>

          {/* Action Buttons: Scan Toggle & Reset */}
          <div className="pointer-events-auto flex items-center gap-2">
            <button
              onClick={() => setScanActive(!scanActive)}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 border ${
                scanActive
                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.5)]'
                  : 'bg-navy/80 hover:bg-navy border-white/15 text-white/70 hover:text-gold'
              }`}
              title={scanActive ? 'Disable Medical Scan' : 'Enable Medical Laser Scan'}
              aria-label="Toggle Laser Scan"
            >
              <Scan size={14} />
            </button>

            <button
              onClick={handleReset}
              className="w-8 h-8 rounded-full bg-navy/80 hover:bg-navy border border-white/15 text-white/70 hover:text-gold flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95"
              title="Reset View"
              aria-label="Reset View"
            >
              <RotateCw size={13} />
            </button>
          </div>
        </div>

        {/* Animated Medical Laser Scan Beam */}
        {scanActive && (
          <div className="absolute inset-x-8 top-12 bottom-16 pointer-events-none overflow-hidden z-15">
            <motion.div
              animate={{ y: ['0%', '100%', '0%'] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_#22d3ee]"
            />
            <motion.div
              animate={{ opacity: [0.1, 0.25, 0.1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent pointer-events-none"
            />
          </div>
        )}

        {/* The 3D Canvas Viewport */}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-contain relative z-10 block"
          style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))' }}
        />

        {/* Loading Spinner */}
        {!isLoaded && (
          <div className="absolute inset-0 z-15 flex flex-col items-center justify-center bg-navy/40 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-full border-2 border-gold border-t-transparent animate-spin mb-3" />
            <span className="text-xs font-body text-gold font-semibold tracking-wider uppercase">Loading 3D Anatomy...</span>
          </div>
        )}

        {/* Bottom Interactive Guidance Pill with Real-Time Angle Dial */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 pointer-events-none w-full px-6 flex items-center justify-between">
          {/* Angle degree readout */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-navy/85 backdrop-blur-md border border-gold/30 text-gold text-[11px] font-mono font-bold shadow-md">
            <Activity size={12} className="text-gold animate-pulse" />
            <span>{rotationAngle}° ROTATION</span>
          </div>

          {/* Interactive Hint */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy/90 backdrop-blur-xl border border-gold/40 text-white shadow-xl">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-[11px] font-body font-medium text-white/95">
              {isDragging ? 'Rotating 3D Model...' : 'Scroll or drag to rotate 3D'}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Floating Anatomical Badge 1: Enamel Crown */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-2 -right-2 sm:-right-6 z-30 cursor-pointer"
        onClick={() => setActivePin(activePin === 'crown' ? null : 'crown')}
      >
        <div className="glass-navy px-3.5 py-2.5 rounded-2xl border border-gold/40 shadow-xl flex items-center gap-3 backdrop-blur-xl hover:border-gold transition-all duration-300">
          <div className="w-7 h-7 rounded-xl bg-gold/15 flex items-center justify-center text-gold">
            <ShieldCheck size={16} />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <p className="text-[10px] text-gold/90 font-body uppercase tracking-wider font-bold">Crown</p>
            </div>
            <p className="text-xs font-headline font-bold text-white">Mineral Enamel</p>
          </div>
        </div>

        {/* Interactive Tooltip Card */}
        <AnimatePresence>
          {activePin === 'crown' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 5 }}
              className="absolute right-0 top-full mt-2 w-52 p-3 rounded-xl bg-navy/95 border border-gold/40 shadow-2xl backdrop-blur-xl z-40 text-left"
            >
              <p className="text-xs text-white/90 leading-relaxed font-body">
                The hardest substance in the human body, protecting against decay and everyday wear.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Floating Anatomical Badge 2: Dentin & Pulp Core */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -bottom-2 -left-2 sm:-left-6 z-30 cursor-pointer"
        onClick={() => setActivePin(activePin === 'dentin' ? null : 'dentin')}
      >
        <div className="glass-navy px-3.5 py-2.5 rounded-2xl border border-gold/40 shadow-xl flex items-center gap-3 backdrop-blur-xl hover:border-gold transition-all duration-300">
          <div className="w-7 h-7 rounded-xl bg-gold/15 flex items-center justify-center text-gold">
            <Layers size={16} />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <p className="text-[10px] text-gold/90 font-body uppercase tracking-wider font-bold">Internal Core</p>
            </div>
            <p className="text-xs font-headline font-bold text-white">Dentin &amp; Root Canal</p>
          </div>
        </div>

        {/* Interactive Tooltip Card */}
        <AnimatePresence>
          {activePin === 'dentin' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -5 }}
              className="absolute left-0 bottom-full mb-2 w-56 p-3 rounded-xl bg-navy/95 border border-gold/40 shadow-2xl backdrop-blur-xl z-40 text-left"
            >
              <p className="text-xs text-white/90 leading-relaxed font-body">
                Vital living tissue containing nerves and blood vessels, anchored by dual anatomical roots.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
