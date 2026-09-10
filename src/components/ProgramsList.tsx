import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock, Sparkles, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
      className={`relative w-full h-screen min-h-[640px] max-h-[1080px] overflow-hidden ${bgColor} flex flex-col justify-between py-6 sm:py-8 lg:py-10 border-b border-gray-200/80`}
    >
      {/* Section Header: Fixed during horizontal pin */}
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4 z-20">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0e1726] tracking-tight">
            {categoryTitle}
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm max-w-xl line-clamp-1 mt-0.5">
            {categorySubtitle}
          </p>
        </div>

        {/* Scroll helper indicator & Progress bar */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-wider">
            <span>Scroll horizontally</span>
            <ChevronRight size={14} className="animate-pulse text-[#e3461a]" />
          </div>
          <div className="w-28 sm:w-40 h-2 bg-gray-200/90 rounded-full overflow-hidden shadow-inner">
            <div
              ref={progressBarRef}
              className="h-full rounded-full transition-all duration-75"
              style={{ backgroundColor: themeColor, width: '0%' }}
            />
          </div>
        </div>
      </div>

      {/* Horizontal Track: Scrolls left-to-right on vertical wheel */}
      <div className="w-full relative my-auto z-10 overflow-visible">
        <div
          ref={trackRef}
          className="flex items-stretch gap-6 sm:gap-8 px-4 sm:px-8 lg:px-12 w-max"
        >
          {courses.map((course) => (
            <div
              key={course.id}
              className={`w-[85vw] sm:w-[480px] lg:w-[540px] rounded-[32px] overflow-hidden ${accentBg} border border-gray-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between flex-shrink-0 group`}
            >
              {/* Image Preview with overlay badge */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-900">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                
                {/* Number & Code Tag */}
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-mono tracking-wider border border-white/15">
                  {course.code}
                </div>

                {/* Duration Tag */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-gray-900 text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                  <Clock size={12} className="text-[#e3461a]" />
                  <span>{course.duration}</span>
                </div>

                {/* Course Name Overlay on Image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-white leading-tight drop-shadow-md">
                    {course.name}
                  </h3>
                  <p className="text-white/85 text-xs line-clamp-1 mt-0.5 font-light">
                    {course.tagline}
                  </p>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {course.description}
                </p>

                {/* Highlights tags */}
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 block mb-2 font-semibold">
                    Core Curriculum Modules
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {course.highlights.map((item) => (
                      <span
                        key={item}
                        className="text-[11px] bg-white text-gray-800 px-2.5 py-1 rounded-md border border-gray-200/90 font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Career Pathways & Eligibility */}
                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-gray-200/60 text-xs">
                  <div>
                    <span className="font-semibold text-gray-900 block mb-0.5">Career Roles:</span>
                    <span className="text-gray-600 line-clamp-1">{course.careers.join(', ')}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 block mb-0.5">Eligibility:</span>
                    <span className="text-gray-600 line-clamp-1">{course.eligibility}</span>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="px-6 py-4 bg-white/70 border-t border-gray-200/70 flex items-center justify-between">
                <Link
                  to="/admissions"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-xs font-semibold transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
                  style={{ backgroundColor: themeColor }}
                >
                  <span>Apply Now</span>
                  <ArrowUpRight size={13} />
                </Link>
                <Link
                  to="/academics"
                  className="text-xs font-semibold text-gray-600 hover:text-[#0e1726] transition-colors flex items-center gap-1"
                >
                  <span>View Syllabus</span>
                  <ArrowUpRight size={12} />
                </Link>
              </div>
            </div>
          ))}

          {/* Final Callout Card in the track */}
          <div
            className={`w-[75vw] sm:w-[360px] rounded-[32px] overflow-hidden ${accentBg} border-2 border-dashed border-gray-300 p-8 flex flex-col justify-between flex-shrink-0`}
          >
            <div>
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6 shadow-sm"
                style={{ backgroundColor: themeColor }}
              >
                <Sparkles size={22} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#0e1726] mb-3">
                Explore Complete {badgeText} Syllabi
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                Download credit structures, semester breakdowns, and workshop schedules for all programs.
              </p>
            </div>
            <Link
              to="/academics"
              className="w-full py-3.5 rounded-full text-white text-center text-xs font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
              style={{ backgroundColor: themeColor }}
            >
              <span>View All Academics</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer Row */}
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between text-xs text-gray-500 font-mono z-20">
        <span>INDUS DESIGN SCHOOL • {badgeText}</span>
        <span className="hidden sm:inline-block">Swipe / Scroll down to advance &rarr;</span>
      </div>
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
