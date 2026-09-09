import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock } from 'lucide-react';

type ProgramType = 'ALL' | 'BDES' | 'MDES' | 'MINOR';

interface ProgramDetail {
  id: string;
  title: string;
  degree: 'B.Des' | 'M.Des' | 'Minor';
  category: 'BDES' | 'MDES' | 'MINOR';
  duration: string;
  eligibility: string;
  description: string;
  image: string;
  keyAreas: string[];
  careers: string[];
}

const allPrograms: ProgramDetail[] = [
  // B.Des Programs
  {
    id: 'bdes-interior',
    title: 'B.Des in Interior Design',
    degree: 'B.Des',
    category: 'BDES',
    duration: '4 Years (8 Semesters)',
    eligibility: '10+2 in any stream (Science, Commerce, Arts) with min 50%',
    description: 'Master spatial planning, sustainable architecture, lighting science, and building materials to design transformative residential, commercial, and hospitality environments.',
    image: '/images/interior-design.jpg',
    keyAreas: ['Spatial Planning', 'Lighting & Acoustics', 'AutoCAD & Revit', 'Furniture Prototyping', 'Sustainable Materials'],
    careers: ['Interior Architect', 'Exhibition Designer', 'Spatial Consultant', 'Furniture Designer'],
  },
  {
    id: 'bdes-fashion',
    title: 'B.Des in Fashion Design',
    degree: 'B.Des',
    category: 'BDES',
    duration: '4 Years (8 Semesters)',
    eligibility: '10+2 in any stream with min 50%',
    description: 'From experimental draping to contemporary runway apparel, immerse in Indian textile heritage, garment construction, sustainable fashion, and global trend forecasting.',
    image: '/images/fashion-design.jpg',
    keyAreas: ['Pattern Drafting & Draping', 'Textile Science & Weaving', 'Fashion Illustration', 'Garment Construction', 'Sustainable Fashion'],
    careers: ['Fashion Designer', 'Apparel Stylist', 'Costume Designer', 'Textile Developer'],
  },
  {
    id: 'bdes-communication',
    title: 'B.Des in Communication Design',
    degree: 'B.Des',
    category: 'BDES',
    duration: '4 Years (8 Semesters)',
    eligibility: '10+2 in any stream with min 50%',
    description: 'Explore visual storytelling, expressive typography, brand identity, motion graphics, and editorial publication systems that shape public perception.',
    image: '/images/communication-design.jpg',
    keyAreas: ['Typography & Grid Systems', 'Brand Strategy', 'Motion Graphics', 'Packaging Design', 'Editorial Publication'],
    careers: ['Visual Designer', 'Brand Identity Lead', 'Art Director', 'Motion Graphics Artist'],
  },
  {
    id: 'bdes-product',
    title: 'B.Des in Product Design',
    degree: 'B.Des',
    category: 'BDES',
    duration: '4 Years (8 Semesters)',
    eligibility: '10+2 in any stream with min 50%',
    description: 'Create ergonomic, human-centered physical and smart hardware products. Learn CAD 3D modeling, rapid workshop fabrication, material engineering, and consumer usability.',
    image: '/images/product-design.jpg',
    keyAreas: ['Human Factors & Ergonomics', '3D CAD & Rapid Prototyping', 'Material Manufacturing', 'Consumer Electronics', 'Design for Circularity'],
    careers: ['Industrial Product Designer', 'Consumer Hardware Lead', 'Design Strategist', 'Packaging Specialist'],
  },

  // M.Des Programs
  {
    id: 'mdes-ui-ux',
    title: 'M.Des in UI-UX Design',
    degree: 'M.Des',
    category: 'MDES',
    duration: '2 Years (4 Semesters)',
    eligibility: 'Bachelor’s degree (10+2+4 or 10+2+3) in any discipline with min 50%',
    description: 'Advance to the forefront of digital experience design. Master cognitive psychology, enterprise user research, design systems, generative AI workflows, and spatial interface architecture.',
    image: '/images/ui-ux-design.jpg',
    keyAreas: ['User Experience Research', 'Design Systems Architecture', 'Micro-Interactions', 'AI & Spatial Interfaces', 'Usability Testing & Metrics'],
    careers: ['Senior Product Designer', 'UX Researcher', 'Interaction Architect', 'Design Systems Lead'],
  },
  {
    id: 'mdes-interior',
    title: 'M.Des in Interior Design',
    degree: 'M.Des',
    category: 'MDES',
    duration: '2 Years (4 Semesters)',
    eligibility: 'Bachelor’s degree in Architecture, Interior Design, or related fields',
    description: 'Postgraduate inquiry into adaptive reuse of heritage structures, biophilic interior environments, parametric spatial layouts, and large-scale public spatial typologies.',
    image: '/images/interior-design.jpg',
    keyAreas: ['Adaptive Reuse & Heritage', 'Biophilic Design Systems', 'Parametric Spatial Modeling', 'Acoustics & Environmental Controls'],
    careers: ['Senior Spatial Consultant', 'Design Research Fellow', 'Commercial Project Director'],
  },
  {
    id: 'mdes-fashion',
    title: 'M.Des in Fashion Design',
    degree: 'M.Des',
    category: 'MDES',
    duration: '2 Years (4 Semesters)',
    eligibility: 'Bachelor’s degree in Fashion, Textiles, Fine Arts, or related disciplines',
    description: 'Critical investigation of future textiles, smart wearables, circular fashion economies, luxury brand curation, and artisanal craft sustainability.',
    image: '/images/fashion-design.jpg',
    keyAreas: ['Smart & E-Textiles', 'Circular Fashion Supply Chains', 'Fashion Heritage Research', 'Global Luxury Brand Management'],
    careers: ['Creative Director', 'Textile Innovation Specialist', 'Fashion Trend Consultant'],
  },

  // Minor Programs
  {
    id: 'minor-ui-ux',
    title: 'Minor in UI-UX Design',
    degree: 'Minor',
    category: 'MINOR',
    duration: 'Integrated Minor Track (3–4 Semesters)',
    eligibility: 'Enrolled Indus University students (B.Tech, Management, Humanities, Arts)',
    description: 'Equip your core major with high-impact digital user experience skills, Figma prototyping, usability heuristics, and product thinking.',
    image: '/images/ui-ux-design.jpg',
    keyAreas: ['Interface Wireframing', 'Figma & Design Systems', 'User Journey Mapping', 'Mobile App Prototyping'],
    careers: ['UX Specialist in Tech', 'Digital Product Manager', 'Frontend UX Engineer'],
  },
  {
    id: 'minor-sustainability',
    title: 'Minor in Sustainability Studies',
    degree: 'Minor',
    category: 'MINOR',
    duration: 'Integrated Minor Track (3–4 Semesters)',
    eligibility: 'Enrolled Indus University students across all disciplines',
    description: 'Investigate regenerative materials, climate resilience, lifecycle assessment, and ethical design practices to tackle modern planetary challenges.',
    image: '/images/sustainability.jpg',
    keyAreas: ['Circular Economy Models', 'Life Cycle Assessment (LCA)', 'Biomimicry & Natural Systems', 'Green Building Standards'],
    careers: ['Sustainability Consultant', 'Eco-Design Strategist', 'Environmental Analyst'],
  },
  {
    id: 'minor-indic',
    title: 'Minor in Indic Design',
    degree: 'Minor',
    category: 'MINOR',
    duration: 'Integrated Minor Track (3–4 Semesters)',
    eligibility: 'Enrolled Indus University students across all disciplines',
    description: 'Explore the profound design philosophies, traditional Indian arts, Vastu spatial geometries, indigenous craftsmanship, and cultural semiotics.',
    image: '/images/indic-design.jpg',
    keyAreas: ['Indian Craft Traditions', 'Vedic Aesthetics & Proportions', 'Traditional Textile Motifs', 'Indigenous Material Crafts'],
    careers: ['Cultural Design Archivist', 'Heritage Brand Consultant', 'Artisan Community Collaborator'],
  },
];

export const AcademicsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ProgramType>('ALL');

  const filteredPrograms = allPrograms.filter((p) => {
    if (activeTab === 'ALL') return true;
    return p.category === activeTab;
  });

  return (
    <div className="bg-white min-h-screen py-10 sm:py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Header Breadcrumb & Title */}
        <div className="border-b border-gray-200 pb-12 mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e3461a] block mb-3">
            ACADEMIC CURRICULUM
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#0e1726] tracking-tight leading-tight mb-4">
            Degrees &amp; Specialized Programs
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl leading-relaxed">
            Discover Indus Design School’s UGC-recognized 4-Year B.Des degrees, 2-Year M.Des mastertracks, and interdisciplinary Minor specializations.
          </p>
        </div>

        {/* Filter Tabs matching Oxford pill system */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {[
            { key: 'ALL', label: 'All Programs (10)' },
            { key: 'BDES', label: 'Bachelor in Design (4 Yrs)' },
            { key: 'MDES', label: 'Masters in Design (2 Yrs)' },
            { key: 'MINOR', label: 'Minor Degrees' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as ProgramType)}
              className={`px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === tab.key
                  ? 'bg-[#0e1726] text-white shadow-md'
                  : 'bg-[#FAF7F2] text-gray-700 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((prog) => (
            <motion.div
              key={prog.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-[#FAF7F2] rounded-[32px] overflow-hidden border border-[#efe9dd] flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                {/* Card Image */}
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-mono tracking-wider">
                    {prog.degree}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#c88732] font-semibold mb-2">
                    <Clock size={13} />
                    <span>{prog.duration}</span>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-[#0e1726] group-hover:text-[#e3461a] transition-colors leading-tight mb-3">
                    {prog.title}
                  </h3>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {prog.description}
                  </p>

                  {/* Key Areas Chips */}
                  <div className="mb-6">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 block mb-2 font-semibold">
                      Core Focus Areas
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {prog.keyAreas.map((area) => (
                        <span
                          key={area}
                          className="text-[11px] bg-white px-2.5 py-1 rounded-md text-gray-700 border border-gray-200"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Eligibility Note */}
                  <div className="bg-white/80 p-3.5 rounded-xl border border-gray-200 text-xs text-gray-600">
                    <strong className="text-gray-900 block font-semibold mb-0.5">Eligibility:</strong>
                    <span>{prog.eligibility}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Action Bar with Ample Padding */}
              <div className="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-gray-200/60 mt-4">
                <Link
                  to="/admissions"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0e1726] hover:bg-[#e3461a] text-white text-xs font-semibold transition-all duration-300 hover:shadow-md cursor-pointer"
                >
                  <span>Apply Now</span>
                  <ArrowUpRight size={13} />
                </Link>

                <Link
                  to="/contact"
                  className="text-xs font-semibold text-gray-600 hover:text-[#0e1726] transition-colors"
                >
                  Syllabus Details &rarr;
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 rounded-3xl bg-[#0e1726] text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-2">
              Ready to begin your creative career?
            </h2>
            <p className="text-gray-400 text-sm max-w-xl leading-relaxed">
              Admissions are open for 2026–27. Register for Design Hunt or submit your creative portfolio today.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 flex-shrink-0">
            <Link
              to="/admissions"
              className="px-8 py-4 rounded-full bg-[#e3461a] hover:bg-[#c83c15] text-white text-sm font-semibold transition-all hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
            >
              Admissions Guide 2026
            </Link>
            <Link
              to="/contact"
              className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold border border-white/20 transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              Book Studio Walkthrough
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
