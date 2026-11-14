import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  Play,
  Pause,
  Sliders,
  Maximize2,
  FileText,
  Info,
  CheckCircle2,
  Layers,
  Sparkles,
} from 'lucide-react';
import type { CourseItem } from '../data/courses';

interface InteriorHeroInteractiveProps {
  course: CourseItem;
  themeColor: string;
}

interface RoomScene {
  id: string;
  name: string;
  image: string;
  headlineMain: string;
  headlineItalic: string;
  tagline: string;
  description: string;
  hotspots: {
    id: string;
    x: number; // percentage
    y: number; // percentage
    title: string;
    subtitle: string;
    spec: string;
  }[];
}

const ROOM_SCENES: RoomScene[] = [
  {
    id: 'terrace-pavilion',
    name: 'Terrace Pavilion',
    image: '/images/interior-hero-interactive.png',
    headlineMain: 'Where great design',
    headlineItalic: 'meets effortless process.',
    tagline: 'CAPABILITY • SPATIAL ARCHITECTURE',
    description:
      'Streamline your workflow from discovery to procurement with the best technology on the market for interior designers and architects.',
    hotspots: [
      {
        id: 'arch-vault',
        x: 18,
        y: 67,
        title: 'Parametric Arches',
        subtitle: 'Cast Travertine Structure',
        spec: 'Load-bearing sculpted vaults with integrated acoustic dampening core.',
      },
      {
        id: 'presentation-pin',
        x: 33,
        y: 77,
        title: 'Presentation Node',
        subtitle: 'Client Review Point',
        spec: 'Real-time raytraced illumination and material sampling matrix.',
      },
      {
        id: 'terrace-balcony',
        x: 89,
        y: 74,
        title: 'Biophilic Balustrade',
        subtitle: 'Microclimate Integration',
        spec: 'Native vegetation buffer optimizing natural ventilation and passive cooling.',
      },
      {
        id: 'lighting-lounge',
        x: 60,
        y: 28,
        title: 'Recessed Grazing',
        subtitle: '2700K Architectural LED',
        spec: 'Automated circadian lighting system calibrated for warm shadow rendering.',
      },
    ],
  },
  {
    id: 'studio-suite',
    name: 'Spatial Suite',
    image: '/images/interior-design.jpg',
    headlineMain: 'Architectural Elegance',
    headlineItalic: 'sculpted with pure intention.',
    tagline: 'RESIDENTIAL & COMMERCIAL TYPOLOGIES',
    description:
      'Master the convergence of volume, daylight, and sustainable materiality in contemporary interior environments.',
    hotspots: [
      {
        id: 'living-core',
        x: 25,
        y: 55,
        title: 'Bespoke Millwork',
        subtitle: 'Fumed White Oak',
        spec: 'Precision CNC-jointed architectural cabinetry with concealed hardware.',
      },
      {
        id: 'ambient-lighting',
        x: 75,
        y: 40,
        title: 'Diffused Sunlight',
        subtitle: 'Daylight Harvesting',
        spec: 'Orientation-optimized clerestory fenestration reducing artificial load.',
      },
    ],
  },
  {
    id: 'adaptive-gallery',
    name: 'Adaptive Gallery',
    image: '/images/mdes-interior-design.jpg',
    headlineMain: 'Heritage Restoration',
    headlineItalic: 'reimagined for future generations.',
    tagline: 'POSTGRADUATE ADVANCED PRACTICE',
    description:
      'Investigate adaptive reuse, historic fabric conservation, and computational spatial environments.',
    hotspots: [
      {
        id: 'heritage-arch',
        x: 35,
        y: 60,
        title: 'Restored Masonry',
        subtitle: 'Conservation Mortar',
        spec: 'Re-pointed lime mortar composite with seismic reinforcement tie-backs.',
      },
      {
        id: 'adaptive-floor',
        x: 80,
        y: 70,
        title: 'Floating Terrazzo',
        subtitle: 'Recycled Aggregate',
        spec: 'Continuous monolithic floor with zero expansion joints over radiant heating.',
      },
    ],
  },
  {
    id: 'fabrication-lab',
    name: 'IDS Prototyping Lab',
    image: '/images/campus-design-studio.jpg',
    headlineMain: 'Hands-on Making',
    headlineItalic: 'from initial sketch to reality.',
    tagline: '10+ ON-CAMPUS WORKSHOPS',
    description:
      'Experience full-scale furniture mockups, CNC routing, joinery ateliers, and rapid acoustic prototyping.',
    hotspots: [
      {
        id: 'wood-bench',
        x: 30,
        y: 65,
        title: 'Joinery Atelier',
        subtitle: 'Traditional & Digital Tools',
        spec: 'Hands-on craftsmanship blended with robotic wood fabrication.',
      },
      {
        id: 'materials-rack',
        x: 70,
        y: 50,
        title: 'Material Science Lab',
        subtitle: 'Sustainable Composites',
        spec: 'Testing bio-resins, compressed earth blocks, and recycled acoustic panels.',
      },
    ],
  },
];

const HORIZONTAL_TICKS = [
  '100', '200', '225', '250', '275', '300', '325', '350', '375', '380',
  '390', '400', '425', '450', '475', '480', '500', '525', '550', '575',
  '600', '625', '650', '675', '700', '725', '750',
];

const VERTICAL_TICKS = [
  '750', '725', '700', '675', '650', '625', '600', '575', '550', '525',
  '500', '480', '475', '450', '425', '400', '390',
];

export const InteriorHeroInteractive: React.FC<InteriorHeroInteractiveProps> = ({
  course,
  themeColor,
}) => {
  const navigate = useNavigate();
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>(null);
  const [showRulers, setShowRulers] = useState(true);
  const [isPlayingTour, setIsPlayingTour] = useState(false);
  const [experienceMode, setExperienceMode] = useState<'overview' | 'cad' | 'presentation'>('cad');

  const currentScene = ROOM_SCENES[activeSceneIndex];

  return (
    <div className="w-full bg-[#111317] p-2 sm:p-4 lg:p-6 select-none">
      {/* Outer Studio Tablet Device Shell */}
      <div className="relative w-full h-[88vh] min-h-[640px] max-h-[960px] rounded-[24px] sm:rounded-[36px] overflow-hidden border border-white/10 shadow-2xl bg-[#14171d]">
        
        {/* Background Image Scene with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScene.id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={currentScene.image}
              alt={currentScene.name}
              className="w-full h-full object-cover object-center"
            />
            {/* Cinematic subtle warm vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/45" />
            <div className="absolute inset-0 bg-black/15" />
          </motion.div>
        </AnimatePresence>

        {/* ========================================================
            1. TOP HORIZONTAL ARCHITECTURAL RULER
            ======================================================== */}
        {showRulers && (
          <div className="absolute top-0 left-0 right-0 h-8 z-30 flex items-end px-10 pointer-events-none bg-black/30 backdrop-blur-xs border-b border-white/10 text-[9px] font-mono text-white/50 tracking-wider">
            <div className="w-full flex justify-between items-center pb-1">
              {HORIZONTAL_TICKS.map((tick) => (
                <div key={tick} className="flex flex-col items-center">
                  <span
                    className={`leading-none ${
                      tick === '600'
                        ? 'text-[#e3461a] font-bold'
                        : tick === '375'
                        ? 'text-white font-semibold'
                        : 'text-white/40'
                    }`}
                  >
                    {tick}
                  </span>
                  <div
                    className={`w-[1px] mt-1 ${
                      tick === '600'
                        ? 'h-2.5 bg-[#e3461a]'
                        : tick === '375'
                        ? 'h-2.5 bg-white'
                        : 'h-1.5 bg-white/20'
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================
            2. LEFT VERTICAL ARCHITECTURAL RULER
            ======================================================== */}
        {showRulers && (
          <div className="absolute top-8 left-0 bottom-0 w-9 z-30 flex flex-col justify-between items-end pr-1 pointer-events-none bg-black/30 backdrop-blur-xs border-r border-white/10 text-[9px] font-mono text-white/50 py-4">
            {VERTICAL_TICKS.map((tick) => (
              <div key={tick} className="flex items-center gap-1">
                <span
                  className={`leading-none ${
                    tick === '450' ? 'text-white font-bold' : 'text-white/40'
                  }`}
                >
                  {tick}
                </span>
                <div
                  className={`h-[1px] ${
                    tick === '450' ? 'w-2.5 bg-white' : 'w-1.5 bg-white/20'
                  }`}
                />
              </div>
            ))}
          </div>
        )}

        {/* ========================================================
            3. INTERACTIVE GUIDELINES & DIMENSION LINES
            ======================================================== */}
        {showRulers && (
          <>
            {/* Vertical Guideline at x=33% (x=375) */}
            <div className="absolute top-8 bottom-0 left-[33%] w-[1px] border-l border-dashed border-white/40 z-20 pointer-events-none" />

            {/* Horizontal Guideline at y=77% (y=450) */}
            <div className="absolute top-[77%] left-9 right-0 h-[1px] border-t border-dashed border-white/40 z-20 pointer-events-none" />

            {/* Vertical Red Accent Line at x=74% (x=600) */}
            <div className="absolute top-8 bottom-0 left-[74%] w-[1px] bg-[#e3461a]/70 z-20 pointer-events-none">
              {/* Top Anchor Pin */}
              <div className="absolute -top-1 -left-2.5 w-5 h-5 rounded bg-black/70 border border-[#e3461a] flex items-center justify-center text-[10px] text-white">
                ⌂
              </div>
              {/* Middle Resize Cursor Marker */}
              <div className="absolute top-[54%] -left-3 px-1 py-0.5 rounded bg-black/80 border border-white/30 text-[9px] font-mono text-white flex items-center gap-1 shadow-lg">
                <span>⟷</span>
              </div>
            </div>
          </>
        )}

        {/* ========================================================
            4. TOP NAVIGATION & CONTROLS BAR
            ======================================================== */}
        <div className="relative z-40 flex items-center justify-between p-4 sm:p-6 pt-9">
          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white text-xs font-semibold transition-all hover:scale-105 shadow-lg"
          >
            <ChevronLeft size={15} />
            <span>Back to Programs</span>
          </button>

          {/* Right Toolbar Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setShowRulers(!showRulers)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all border ${
                showRulers
                  ? 'bg-white/20 border-white/40 text-white'
                  : 'bg-black/40 border-white/10 text-white/60 hover:text-white'
              } backdrop-blur-md`}
              title="Toggle Architectural CAD Rulers"
            >
              <Sliders size={13} />
              <span className="hidden sm:inline">Rulers</span>
            </button>

            <div className="px-3.5 py-1.5 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-white font-mono text-xs font-semibold tracking-wider">
              {course.code} • {course.duration}
            </div>
          </div>
        </div>

        {/* ========================================================
            5. CENTER HERO TYPOGRAPHY & INTERACTIVE ACTION
            ======================================================== */}
        <div className="relative z-30 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto my-auto mt-6 sm:mt-10 pointer-events-auto">
          {/* Top Capability Sparkle Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15"
          >
            <Sparkles size={13} className="text-[#f5efe6]" />
            <span className="text-[11px] font-mono tracking-[0.22em] uppercase text-white/90 font-medium">
              {currentScene.tagline}
            </span>
          </motion.div>

          {/* Hero Two-Tone Heading */}
          <motion.h1
            key={currentScene.id + '-title'}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white text-center leading-[1.12] tracking-tight max-w-3xl mb-8"
          >
            <span className="block font-sans font-bold text-3xl sm:text-5xl lg:text-6xl text-white">
              {currentScene.headlineMain}
            </span>
            <span className="block font-serif italic text-3xl sm:text-5xl lg:text-6xl text-[#f3eedf] mt-1 sm:mt-2">
              {currentScene.headlineItalic}
            </span>
          </motion.h1>

          {/* Action Button Row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <button
              onClick={() => {
                setActiveHotspotId(
                  activeHotspotId === 'presentation-pin' ? null : 'presentation-pin'
                );
              }}
              className="px-7 py-3.5 rounded-full bg-[#E5D7C5] hover:bg-[#d8c8b4] text-[#1c1d22] font-semibold text-xs sm:text-sm tracking-wide uppercase transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95"
            >
              Experience Tailor
            </button>

            <button
              onClick={() => {
                setIsPlayingTour(!isPlayingTour);
                setActiveSceneIndex((prev) => (prev + 1) % ROOM_SCENES.length);
              }}
              aria-label="Play Studio Scene Tour"
              className="w-12 h-12 rounded-full bg-[#E5D7C5] hover:bg-[#d8c8b4] text-[#1c1d22] flex items-center justify-center transition-all shadow-xl hover:scale-105 active:scale-95"
            >
              {isPlayingTour ? <Pause size={17} /> : <Play size={17} className="ml-0.5" />}
            </button>
          </motion.div>
        </div>

        {/* ========================================================
            6. INTERACTIVE HOTSPOTS ON THE SCENE
            ======================================================== */}
        {currentScene.hotspots.map((hotspot) => {
          const isActive = activeHotspotId === hotspot.id;
          return (
            <div
              key={hotspot.id}
              className="absolute z-30"
              style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
            >
              {/* Hotspot Icon Trigger */}
              <button
                onClick={() => setActiveHotspotId(isActive ? null : hotspot.id)}
                className={`relative group -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 px-2.5 py-1.5 rounded-lg border backdrop-blur-md transition-all shadow-xl ${
                  isActive
                    ? 'bg-white text-black border-white ring-4 ring-white/30 scale-110'
                    : 'bg-black/60 text-white/90 border-white/30 hover:bg-black/90 hover:border-white'
                }`}
              >
                {hotspot.id === 'presentation-pin' ? (
                  <span className="text-xs">☷</span>
                ) : (
                  <FileText size={12} />
                )}

                {/* Tag label */}
                <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">
                  {hotspot.title}
                </span>

                {/* Pulse dot */}
                <span className="w-1.5 h-1.5 rounded-full bg-[#e3461a] animate-pulse" />
              </button>

              {/* Active Hotspot Detail Card Popover */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: hotspot.y > 60 ? -8 : 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: hotspot.y > 60 ? -8 : 8, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className={`absolute left-1/2 -translate-x-1/2 w-64 p-4 rounded-2xl bg-black/90 text-white border border-white/20 shadow-2xl backdrop-blur-xl pointer-events-auto ${
                      hotspot.y > 60 ? 'bottom-12' : 'top-8'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-[10px] font-mono text-[#c88732] uppercase tracking-wider font-semibold">
                        {hotspot.subtitle}
                      </span>
                      <span className="text-[10px] font-mono text-white/50">LIVE CAD SPEC</span>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-2">{hotspot.title}</h4>
                    <p className="text-xs text-white/70 leading-relaxed mb-3">{hotspot.spec}</p>
                    <div className="flex items-center gap-2 pt-2 border-t border-white/10 text-[10px] font-mono text-white/60">
                      <CheckCircle2 size={11} className="text-emerald-400" />
                      <span>Syllabus Module 03 Verified</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}

        {/* ========================================================
            7. FLOATING ROOM SWITCHER DOCK (BOTTOM CENTER)
            ======================================================== */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-35 flex items-center gap-2.5 p-2 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/20 shadow-2xl">
          {ROOM_SCENES.map((scene, idx) => (
            <button
              key={scene.id}
              onClick={() => {
                setActiveSceneIndex(idx);
                setActiveHotspotId(null);
              }}
              className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                activeSceneIndex === idx
                  ? 'ring-2 ring-white ring-offset-2 ring-offset-black scale-105'
                  : 'opacity-60 hover:opacity-100 hover:scale-102'
              }`}
              style={{ width: '56px', height: '40px' }}
              title={scene.name}
            >
              <img
                src={scene.image}
                alt={scene.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              {activeSceneIndex === idx && (
                <div className="absolute bottom-0 inset-x-0 h-1 bg-[#e3461a]" />
              )}
            </button>
          ))}

          {/* Plus Add Custom Space Button */}
          <button
            onClick={() => {
              setActiveSceneIndex((prev) => (prev + 1) % ROOM_SCENES.length);
            }}
            className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center font-mono text-sm border border-white/15 transition-all"
            title="Next Architectural Studio Space"
          >
            +
          </button>
        </div>

        {/* ========================================================
            8. BOTTOM RIGHT EDITORIAL PARAGRAPH
            ======================================================== */}
        <div className="absolute bottom-6 right-6 lg:right-10 z-30 hidden md:block max-w-xs text-right pointer-events-none">
          <p className="text-white/80 text-xs leading-relaxed font-light drop-shadow-md">
            {currentScene.description}
          </p>
        </div>

      </div>
    </div>
  );
};
