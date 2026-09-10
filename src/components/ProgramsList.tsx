import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock, Sparkles, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CourseModal } from './CourseModal';

gsap.registerPlugin(ScrollTrigger);

interface CourseItem {
  id: string;
  code: string;
  name: string;
  tagline: string;
  degree: string;
  duration: string;
  eligibility: string;
  description: string;
  image: string;
  highlights: string[];
  careers: string[];
}

const bdesCourses: CourseItem[] = [
  {
    id: 'bdes-interior',
    code: 'B.DES • 01',
    name: 'Interior Design',
    tagline: 'Transforming Spaces Through Architectural Elegance',
    degree: 'Bachelor of Design',
    duration: '4 Years (8 Semesters)',
    eligibility: '10+2 Any Stream (Min 50%)',
    description: 'Master spatial layout, lighting acoustics, sustainable building materials, and 3D architectural modeling to design impactful residential and commercial spaces.',
    image: '/images/interior-design.jpg',
    highlights: ['Spatial Planning', 'Acoustic Science', 'Parametric Modeling', 'Furniture Fabrication'],
    careers: ['Interior Architect', 'Spatial Consultant', 'Exhibition Designer'],
  },
  {
    id: 'bdes-fashion',
    code: 'B.DES • 02',
    name: 'Fashion Design',
    tagline: 'Couture Craftsmanship & Contemporary Apparel',
    degree: 'Bachelor of Design',
    duration: '4 Years (8 Semesters)',
    eligibility: '10+2 Any Stream (Min 50%)',
    description: 'Immerse in experimental draping, Indian handloom heritage, pattern construction, circular fashion, and future wearable styling.',
    image: '/images/fashion-design.jpg',
    highlights: ['Draping & Pattern Making', 'Textile Science', 'Fashion Illustration', 'Runway Curation'],
    careers: ['Fashion Designer', 'Apparel Stylist', 'Textile Innovator'],
  },
  {
    id: 'bdes-communication',
    code: 'B.DES • 03',
    name: 'Communication Design',
    tagline: 'Visual Storytelling & Brand Identity Architecture',
    degree: 'Bachelor of Design',
    duration: '4 Years (8 Semesters)',
    eligibility: '10+2 Any Stream (Min 50%)',
    description: 'Master typography, publication design, brand campaigns, motion graphics, and visual narrative systems that captivate public imagination.',
    image: '/images/communication-design.jpg',
    highlights: ['Expressive Typography', 'Brand Identity', 'Motion Graphics', 'Editorial Design'],
    careers: ['Brand Identity Lead', 'Creative Director', 'Motion Graphics Artist'],
  },
  {
    id: 'bdes-product',
    code: 'B.DES • 04',
    name: 'Product Design',
    tagline: 'Ergonomic Hardware, Smart Devices & Prototyping',
    degree: 'Bachelor of Design',
    duration: '4 Years (8 Semesters)',
    eligibility: '10+2 Any Stream (Min 50%)',
    description: 'Create human-centered consumer hardware and physical devices using 3D CAD modeling, CNC prototyping, and ergonomic usability testing.',
    image: '/images/product-design.jpg',
    highlights: ['Human Factors & Ergonomics', '3D CAD Rapid Prototyping', 'Material Engineering', 'Circular Design'],
    careers: ['Industrial Product Designer', 'Hardware Design Strategist', 'Packaging Specialist'],
  },
];

const mdesCourses: CourseItem[] = [
  {
    id: 'mdes-uiux',
    code: 'M.DES • 01',
    name: 'UI / UX Design',
    tagline: 'Digital Product Experience & Spatial Interface Architecture',
    degree: 'Master of Design',
    duration: '2 Years (4 Semesters)',
    eligibility: 'Graduation in Any Discipline (Min 50%)',
    description: 'Cognitive user psychology, enterprise design systems, Figma workflows, generative AI interfaces, and multi-device product strategy.',
    image: '/images/ui-ux-design.jpg',
    highlights: ['User Research Heuristics', 'Design Systems Architecture', 'AI & Spatial Prototyping', 'Usability Metrics'],
    careers: ['Senior Product Designer', 'Design Systems Lead', 'UX Research Director'],
  },
  {
    id: 'mdes-interior',
    code: 'M.DES • 02',
    name: 'Interior Design',
    tagline: 'Adaptive Reuse, Heritage & Parametric Environments',
    degree: 'Master of Design',
    duration: '2 Years (4 Semesters)',
    eligibility: 'Bachelor’s in Design, Architecture or Allied Field',
    description: 'Postgraduate research exploring heritage restoration, biophilic interior environments, parametric computational spaces, and public spatial typologies.',
    image: '/images/mdes-interior-design.jpg',
    highlights: ['Adaptive Heritage Reuse', 'Biophilic Design Systems', 'Parametric Spatial Modeling', 'Acoustics Optimization'],
    careers: ['Senior Spatial Consultant', 'Design Research Fellow', 'Commercial Project Director'],
  },
  {
    id: 'mdes-fashion',
    code: 'M.DES • 03',
    name: 'Fashion Design',
    tagline: 'Sustainable Wearables, Smart Textiles & Global Luxury',
    degree: 'Master of Design',
    duration: '2 Years (4 Semesters)',
    eligibility: 'Bachelor’s in Fashion, Textiles, Arts or Allied Field',
    description: 'Advanced research in e-textiles, circular fashion supply chains, luxury brand curation, artisanal sustainability, and global design leadership.',
    image: '/images/campus-textile-workshop.jpg',
    highlights: ['Smart Wearables & E-Textiles', 'Circular Fashion Economies', 'Luxury Brand Management', 'Craft Sustainability'],
    careers: ['Creative Director', 'Textile Innovation Specialist', 'Global Fashion Strategist'],
  },
];

const minorCourses: CourseItem[] = [
  {
    id: 'minor-uiux',
    code: 'MINOR • 01',
    name: 'Minor in UI/UX Design',
    tagline: 'High-Demand Digital Interface Prototyping',
    degree: 'Minor Degree Track',
    duration: 'Integrated (3–4 Semesters)',
    eligibility: 'Enrolled Indus University Students',
    description: 'Enhance your major with high-impact digital UX skills, Figma design systems, wireframing, and interaction fundamentals.',
    image: '/images/campus-computer-lab.jpg',
    highlights: ['Figma Prototyping', 'User Flows & Wireframing', 'Heuristic Evaluation', 'Mobile App UX'],
    careers: ['Frontend UX Designer', 'Digital Product Manager', 'UX Analyst'],
  },
  {
    id: 'minor-sustainability',
    code: 'MINOR • 02',
    name: 'Minor in Sustainability Studies',
    tagline: 'Circular Systems & Climate-Conscious Design',
    degree: 'Minor Degree Track',
    duration: 'Integrated (3–4 Semesters)',
    eligibility: 'Enrolled Indus University Students',
    description: 'Explore regenerative material frameworks, lifecycle assessment (LCA), biomimicry, and circular economies for contemporary environmental challenges.',
    image: '/images/sustainability.jpg',
    highlights: ['Circular Economy Models', 'Life Cycle Assessment', 'Biomimicry Systems', 'Green Product Standards'],
    careers: ['Sustainability Consultant', 'Eco-Design Strategist', 'Environmental Analyst'],
  },
  {
    id: 'minor-indic',
    code: 'MINOR • 03',
    name: 'Minor in Indic Design',
    tagline: 'Vedic Aesthetics, Craft Heritage & Cultural Semiotics',
    degree: 'Minor Degree Track',
    duration: 'Integrated (3–4 Semesters)',
    eligibility: 'Enrolled Indus University Students',
    description: 'Delve into indigenous Indian craft traditions, Vastu spatial geometries, sacred proportion theories, and vernacular visual culture.',
    image: '/images/indic-design.jpg',
    highlights: ['Traditional Indian Crafts', 'Vedic Proportions & Geometry', 'Cultural Semiotics', 'Artisan Guild Collaboration'],
    careers: ['Cultural Archivist', 'Heritage Brand Consultant', 'Artisan Project Director'],
  },
];

interface HorizontalSectionProps {
  categoryTitle: string;
  badgeText: string;
  categorySubtitle: string;
  courses: CourseItem[];
  themeColor: string;
  bgColor: string;
  accentBg: string;
}

const HorizontalSection: React.FC<HorizontalSectionProps> = ({
  categoryTitle,
  badgeText,
  categorySubtitle,
  courses,
  themeColor,
  bgColor,
  accentBg,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    const progressBar = progressBarRef.current;
    if (!container || !track) return;

    const getScrollAmount = () => {
      const trackWidth = track.scrollWidth;
      const containerWidth = container.offsetWidth;
      return -(trackWidth - containerWidth);
    };

    const ctx = gsap.context(() => {
      const scrollTween = gsap.to(track, {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${Math.max(track.scrollWidth - container.offsetWidth + 300, 800)}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressBar) {
              progressBar.style.width = `${Math.round(self.progress * 100)}%`;
            }
          },
        },
      });

      return () => {
        scrollTween.kill();
      };
    }, containerRef);

    return () => ctx.revert();
  }, [courses]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-screen min-h-[640px] max-h-[1080px] overflow-hidden ${bgColor} flex flex-col justify-between py-4 sm:py-6 border-b border-gray-200/80`}
    >
      {/* Section Header: Fixed during horizontal pin */}
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between z-20 flex-shrink-0">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span
              className="text-[11px] font-mono uppercase tracking-[0.25em] font-bold px-3 py-1 rounded-full text-white shadow-xs"
              style={{ backgroundColor: themeColor }}
            >
              {badgeText}
            </span>
            <span className="text-xs font-mono text-gray-500 hidden sm:inline-block">
              • {courses.length} Specializations
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-[#0e1726] tracking-tight">
            {categoryTitle}
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm max-w-xl line-clamp-1 mt-0.5 hidden sm:block">
            {categorySubtitle}
          </p>
        </div>

        {/* Scroll helper indicator & Progress bar */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-wider">
            <span>Scroll domains</span>
            <ChevronRight size={14} className="animate-pulse text-[#e3461a]" />
          </div>
          <div className="w-24 sm:w-36 h-2 bg-gray-200/90 rounded-full overflow-hidden shadow-inner">
            <div
              ref={progressBarRef}
              className="h-full rounded-full transition-all duration-75"
              style={{ backgroundColor: themeColor, width: '0%' }}
            />
          </div>
        </div>
      </div>

      {/* Horizontal Track: Exactly one domain in viewport width & height */}
      <div className="w-full relative my-auto z-10 overflow-visible flex items-center">
        <div
          ref={trackRef}
          className="flex items-stretch gap-6 sm:gap-10 px-4 sm:px-8 lg:px-12 w-max"
        >
          {courses.map((course) => (
            <div
              key={course.id}
              onClick={() => setSelectedCourse(course)}
              className="relative w-[88vw] sm:w-[86vw] md:w-[84vw] lg:w-[82vw] xl:w-[80vw] max-w-[1360px] h-[66vh] sm:h-[70vh] lg:h-[73vh] max-h-[680px] min-h-[440px] rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-between flex-shrink-0 group cursor-pointer border border-gray-200/80 bg-gray-950"
            >
              {/* Immersive Image Canvas */}
              <img
                src={course.image}
                alt={course.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-85"
              />
              {/* Deep Cinematic Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1726]/95 via-[#0e1726]/45 to-black/35 group-hover:via-[#0e1726]/30 transition-colors duration-500" />

              {/* Card Top Pill Elements */}
              <div className="relative z-10 p-5 sm:p-8 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-mono tracking-wider border border-white/20">
                    {course.code}
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 border border-white/20 shadow-xs">
                    <Clock size={12} className="text-[#e3461a]" />
                    <span>{course.duration}</span>
                  </span>
                </div>

                <div className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-white/15 hover:bg-white/30 backdrop-blur-md border border-white/25 transition-all">
                  <span>View Details &amp; Syllabus</span>
                  <ArrowUpRight size={13} className="text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Card Bottom: Minimal Editorial Presentation */}
              <div className="relative z-10 p-6 sm:p-10 lg:p-14">
                <span
                  className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] font-bold block mb-2"
                  style={{ color: themeColor === '#0e1726' ? '#c88732' : themeColor }}
                >
                  {course.degree}
                </span>

                <h3 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight group-hover:text-orange-50 transition-colors">
                  {course.name}
                </h3>

                <p className="text-sm sm:text-base lg:text-lg text-white/80 font-light max-w-2xl mt-2 line-clamp-2">
                  {course.tagline}
                </p>

                <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCourse(course);
                    }}
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-white font-semibold text-xs sm:text-sm transition-all duration-300 shadow-lg cursor-pointer group-hover:shadow-2xl group-hover:scale-105"
                    style={{ backgroundColor: themeColor }}
                  >
                    <span>Explore Course Details</span>
                    <ArrowUpRight size={16} />
                  </button>

                  <span className="text-xs font-mono text-white/60 hidden sm:inline-block">
                    Click card to view syllabus, modules &amp; careers &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Final Callout Card in the track */}
          <div
            className={`w-[85vw] sm:w-[480px] lg:w-[520px] h-[66vh] sm:h-[70vh] lg:h-[73vh] max-h-[680px] min-h-[440px] rounded-[32px] sm:rounded-[40px] overflow-hidden ${accentBg} border-2 border-dashed border-gray-300 p-8 sm:p-12 flex flex-col justify-between flex-shrink-0`}
          >
            <div>
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-8 shadow-sm"
                style={{ backgroundColor: themeColor }}
              >
                <Sparkles size={24} />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#e3461a] font-bold block mb-2">
                {badgeText} CATALOGUE
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0e1726] mb-4">
                Explore All {badgeText} Programs
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-8">
                Download detailed academic syllabi, studio credit matrices, and laboratory schedules for all faculties.
              </p>
            </div>
            <div className="space-y-3">
              <Link
                to="/admissions"
                className="w-full py-4 rounded-full text-white text-center text-xs sm:text-sm font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
                style={{ backgroundColor: themeColor }}
              >
                <span>Apply for Admissions 2026</span>
                <ArrowUpRight size={15} />
              </Link>
              <Link
                to="/academics"
                className="w-full py-3.5 rounded-full border border-gray-300 text-gray-700 text-center text-xs font-semibold transition-all hover:bg-white flex items-center justify-center gap-2"
              >
                <span>View Academics Overview</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Row */}
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between text-xs text-gray-500 font-mono z-20 flex-shrink-0">
        <span>INDUS DESIGN SCHOOL • {badgeText}</span>
        <span className="hidden sm:inline-block">Swipe / Scroll down to advance &rarr;</span>
      </div>

      {/* Full Detailed Course Modal */}
      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        themeColor={themeColor}
      />
    </div>
  );
};

export const ProgramsList: React.FC = () => {
  return (
    <section id="programs" className="relative w-full bg-white">
      {/* Intro Editorial Header */}
      <div className="py-16 sm:py-20 lg:py-24 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 border-b border-gray-200">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e3461a] block mb-3">
            COMPREHENSIVE ACADEMIC DISCIPLINES
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0e1726] leading-tight mb-6">
            All Specialized Design Programs at Indus Design School
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Explore every undergraduate, postgraduate, and interdisciplinary minor course taught on campus. Each program offers dedicated studio spaces, industry mentor masterclasses, and hands-on fabrication facilities.
          </p>
        </div>
      </div>

      {/* 1. BACHELOR IN DESIGN (B.DES) - Horizontal Scroll */}
      <HorizontalSection
        categoryTitle="Bachelor in Design (B.Des)"
        badgeText="BACHELOR DEGREE"
        categorySubtitle="4-Year comprehensive undergraduate studio education blending creative intuition and technical craftsmanship."
        courses={bdesCourses}
        themeColor="#e3461a"
        bgColor="bg-white"
        accentBg="bg-[#FAF7F2]"
      />

      {/* 2. MASTER IN DESIGN (M.DES) - Horizontal Scroll */}
      <HorizontalSection
        categoryTitle="Master in Design (M.Des)"
        badgeText="MASTER DEGREE"
        categorySubtitle="2-Year advanced postgraduate inquiry, digital UX systems architecture, and creative industry leadership."
        courses={mdesCourses}
        themeColor="#0e1726"
        bgColor="bg-[#F8F6F0]"
        accentBg="bg-white"
      />

      {/* 3. MINOR DEGREE IN DESIGN - Horizontal Scroll */}
      <HorizontalSection
        categoryTitle="Minor Degree in Design"
        badgeText="MINOR DEGREE"
        categorySubtitle="Interdisciplinary tracks enabling university scholars across all faculties to acquire professional creative competencies."
        courses={minorCourses}
        themeColor="#c88732"
        bgColor="bg-white"
        accentBg="bg-[#FAF7F2]"
      />

      {/* Bottom Conversion Banner */}
      <div className="py-16 sm:py-20 bg-[#0e1726] text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#e3461a] block mb-2 font-semibold">
              ADMISSIONS 2026–27
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-2">
              Ready to pursue your design journey?
            </h3>
            <p className="text-white/70 text-xs sm:text-sm max-w-xl">
              Register for Design Hunt entrance evaluation, portfolio reviews, and campus studio tours.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/admissions"
              className="px-8 py-4 rounded-full bg-[#e3461a] hover:bg-[#c83c14] text-white text-xs sm:text-sm font-semibold transition-all hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
            >
              Apply Online Today
            </Link>
            <Link
              to="/academics"
              className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold border border-white/20 transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              Curriculum Overview &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
