import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, ChevronRight } from 'lucide-react';
import { CourseModal } from './CourseModal';

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

interface StackedSectionProps {
  categoryTitle: string;
  badgeText: string;
  categorySubtitle: string;
  courses: CourseItem[];
  themeColor: string;
  bgColor: string;
  accentBg: string;
}

const StackedSection: React.FC<StackedSectionProps> = ({
  categoryTitle,
  badgeText,
  categorySubtitle,
  courses,
  themeColor,
  bgColor,
  accentBg,
}) => {
  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null);

  return (
    <div className={`relative w-full ${bgColor} py-16 sm:py-24 border-b border-gray-200/80`}>
      {/* Section Header */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mb-10 sm:mb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-gray-200/80">
          <div>
            <div className="flex items-center gap-2.5 mb-2.5">
              <span
                className="text-[11px] font-mono uppercase tracking-[0.25em] font-bold px-3.5 py-1 rounded-full text-white shadow-xs"
                style={{ backgroundColor: themeColor }}
              >
                {badgeText}
              </span>
              <span className="text-xs font-mono text-gray-500">
                • {courses.length} Specializations
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0e1726] tracking-tight">
              {categoryTitle}
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm max-w-2xl mt-1.5 leading-relaxed">
              {categorySubtitle}
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-wider">
            <span>Scroll down to view specializations</span>
            <ChevronRight size={14} className="rotate-90 text-[#e3461a] animate-bounce" />
          </div>
        </div>
      </div>

      {/* Vertical Stacking Cards Container: Cards scroll from top to bottom and stop stacked on top of each other */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="relative">
          {courses.map((course, index) => (
            <div
              key={course.id}
              onClick={() => setSelectedCourse(course)}
              className="sticky top-[80px] sm:top-[84px] lg:top-[88px] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-200 bg-white flex flex-col"
              style={{
                zIndex: 10 + index,
                marginBottom: index === courses.length - 1 ? '48px' : '45vh',
                height: 'calc(100vh - 120px)',
                minHeight: '520px',
                maxHeight: '680px',
              }}
            >
              {/* Card Top: Editorial Presentation with White Background */}
              <div className="relative z-20 bg-white p-6 sm:p-8 lg:p-10 border-b border-gray-100 flex-shrink-0">
                <div className="flex justify-between items-start gap-4 mb-3">
                  <div>
                    <span
                      className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] font-bold block mb-2"
                      style={{ color: themeColor }}
                    >
                      {course.degree} • {course.duration}
                    </span>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0e1726] tracking-tight leading-tight mb-2">
                      {course.name}
                    </h3>
                  </div>
                  <div className="hidden sm:flex items-center gap-2">
                    <span className="px-3.5 py-1.5 rounded-full bg-gray-100 text-gray-800 text-xs font-mono tracking-wider">
                      {course.code}
                    </span>
                    <span className="text-xs font-mono tracking-widest text-gray-500 bg-gray-50 px-3.5 py-1.5 rounded-full border border-gray-200">
                      0{index + 1} / 0{courses.length}
                    </span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-600 max-w-2xl line-clamp-2 mb-5 leading-relaxed">
                  {course.tagline}
                </p>

                {/* Highlights tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {course.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCourse(course);
                    }}
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-white font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    style={{ backgroundColor: themeColor }}
                  >
                    <span>Explore Course Details</span>
                    <ArrowUpRight size={16} />
                  </button>

                  <Link
                    to="/admissions"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0e1726] hover:bg-black text-white text-xs sm:text-sm font-semibold transition-all hover:-translate-y-0.5"
                  >
                    <span>Enquiry Now</span>
                  </Link>
                </div>
              </div>

              {/* Immersive Image Canvas at the Bottom */}
              <div className="relative flex-grow min-h-[200px] overflow-hidden bg-gray-100">
                <img
                  src={course.image}
                  alt={course.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Deep Cinematic Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1726]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                  <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-white/20 backdrop-blur-md border border-white/30">
                    <span>View Details & Syllabus</span>
                    <ArrowUpRight size={13} />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Catalog CTA Summary Card at the bottom of the section */}
          <div
            className={`rounded-[28px] sm:rounded-[36px] overflow-hidden ${accentBg} border-2 border-dashed border-gray-300 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mt-12 shadow-sm`}
          >
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-xs"
                  style={{ backgroundColor: themeColor }}
                >
                  <Sparkles size={18} />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#e3461a] font-bold block">
                  {badgeText} ACADEMIC CATALOGUE
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0e1726] mb-2">
                Explore All {badgeText} Specializations
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Download complete curriculum structures, studio lab schedules, semester credits, and faculty mentor profiles.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
              <Link
                to="/admissions"
                className="px-7 py-3.5 rounded-full text-white text-xs sm:text-sm font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
                style={{ backgroundColor: themeColor }}
              >
                <span>Apply for Admissions 2026</span>
                <ArrowUpRight size={14} />
              </Link>
              <Link
                to="/academics"
                className="px-6 py-3.5 rounded-full border border-gray-300 text-gray-700 text-xs sm:text-sm font-semibold transition-all hover:bg-white hover:text-black flex items-center gap-2"
              >
                <span>Academics Overview</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Course Detail Modal */}
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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0e1726] leading-tight mb-6">
            All Specialized Design Programs at Indus Design School
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Explore every undergraduate, postgraduate, and interdisciplinary minor course taught on campus. Each program offers dedicated studio spaces, industry mentor masterclasses, and hands-on fabrication facilities.
          </p>
        </div>
      </div>

      {/* 1. BACHELOR IN DESIGN (B.DES) - Top-to-Bottom Sticky Stacking */}
      <StackedSection
        categoryTitle="Bachelor in Design (B.Des)"
        badgeText="BACHELOR DEGREE"
        categorySubtitle="4-Year comprehensive undergraduate studio education blending creative intuition and technical craftsmanship."
        courses={bdesCourses}
        themeColor="#e3461a"
        bgColor="bg-white"
        accentBg="bg-[#FAF7F2]"
      />

      {/* 2. MASTER IN DESIGN (M.DES) - Top-to-Bottom Sticky Stacking */}
      <StackedSection
        categoryTitle="Master in Design (M.Des)"
        badgeText="MASTER DEGREE"
        categorySubtitle="2-Year advanced postgraduate inquiry, digital UX systems architecture, and creative industry leadership."
        courses={mdesCourses}
        themeColor="#0e1726"
        bgColor="bg-[#F8F6F0]"
        accentBg="bg-white"
      />

      {/* 3. MINOR DEGREE IN DESIGN - Top-to-Bottom Sticky Stacking */}
      <StackedSection
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
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">
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
