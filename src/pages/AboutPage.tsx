import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Target, Eye, Layers, Users, Briefcase, FolderCheck, Compass } from "lucide-react";

const pedagogyPillars = [
  { icon: Layers, title: "Industry-Focused Curriculum", desc: "Modules designed with leading design studios, architect firms, and creative agencies to align academic learning with market needs." },
  { icon: Users, title: "Experienced Faculty & Mentors", desc: "Accomplished practitioners, visiting international scholars, and design directors bring real studio challenges into classroom." },
  { icon: Compass, title: "Hands-On Studio Learning", desc: "Over 70% learning happens through physical prototyping, tactile crafting, digital drafting, and material explorations in campus studios." },
  { icon: FolderCheck, title: "Strong Portfolio Development", desc: "Every semester culminates in tangible student design portfolios, jury exhibitions, and industry-reviewed case study presentations." },
  { icon: Briefcase, title: "Career-Oriented Training", desc: "Structured internships, campus placement drives, international exchange linkages, and entrepreneurial incubation support at Indus University." },
];

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero Section */}
      <div className="py-12 sm:py-16 lg:py-20 bg-white border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e3461a] block mb-3">ABOUT INDUS DESIGN SCHOOL</span>
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#0e1726] tracking-tight leading-tight mb-6">
                Nurturing the Next Generation of Creative Professionals
              </h1>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                Indus Design School (IDS) is a forward-thinking institution dedicated to nurturing creative thinkers, visualizers, and innovators. Built on a foundation of innovation, culture, and industry relevance, IDS offers a dynamic learning environment where creativity meets real-world application.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                IDS blends rich cultural heritage with modern design practices. Our programs are carefully structured to provide students with hands-on experience, critical thinking skills, and industry exposure that positions them for success in leading global design firms.
              </p>
              <div className="pt-2">
                <Link to="/admissions" className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#0e1726] text-white text-sm font-semibold hover:bg-black hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                  <span>Apply for 2026 Admissions</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-[32px] overflow-hidden shadow-2xl aspect-[4/3]">
                <img src="/images/campus-main.png" alt="Indus Design School Campus" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="py-20 lg:py-28 bg-[#FAF7F2] border-y border-[#f1ebd7]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div whileHover={{ y: -4 }} className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#e3461a]/10 text-[#e3461a] flex items-center justify-center">
                  <Eye size={20} />
                </div>
                <h2 className="text-2xl font-serif font-bold text-[#0e1726]">Our Vision</h2>
              </div>
              <blockquote className="text-gray-700 text-base sm:text-lg leading-relaxed italic border-l-4 border-[#e3461a] pl-5">
                "To become a leading design institution that nurtures creative thinkers and innovators who can shape the future of design globally."
              </blockquote>
            </motion.div>

            <motion.div whileHover={{ y: -4 }} className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#c88732]/10 text-[#c88732] flex items-center justify-center">
                  <Target size={20} />
                </div>
                <h2 className="text-2xl font-serif font-bold text-[#0e1726]">Our Mission</h2>
              </div>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                To provide high-quality, industry-integrated design education that bridges traditional craftsmanship with contemporary technological practices. We develop designers who are critical thinkers, skilled practitioners, and empathetic leaders capable of solving complex human and social challenges.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Pedagogy Pillars — dark Oxford-style block */}
      <div className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="rounded-[32px] bg-[#0c0f14] text-white p-8 sm:p-12 lg:p-16 shadow-2xl">
            <div className="mb-12">
              <img src="/ids-logo-white.png" alt="Indus Design School" className="h-8 sm:h-9 w-auto object-contain mb-5 opacity-95" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c88732] block mb-3">IDS PEDAGOGY</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                Why Choose IDS Pedagogy?
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 pt-10 border-t border-white/10">
              {pedagogyPillars.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex flex-col">
                    <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center text-[#c88732] mb-5">
                      <Icon size={20} />
                    </div>
                    <h4 className="text-base font-serif font-bold text-white mb-2 leading-snug">{item.title}</h4>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Campus Infrastructure */}
      <div className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e3461a] block mb-3">CAMPUS INFRASTRUCTURE</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0e1726] leading-tight mb-6">
                A 16+ Acre Design Ecosystem
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                Spread across a sprawling green campus at Rancharda, Shilaj, Indus Design School houses 10+ dedicated studio spaces including wood & metal prototyping workshops, ceramic & claymation labs, fashion draping ateliers, UI/UX digital workstations, and an expansive materials library.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { value: "10+", label: "Specialized Studios & Labs" },
                  { value: "500+", label: "Active Design Scholars" },
                  { value: "100%", label: "Placement Assistance" },
                  { value: "16+", label: "Acre Green Campus" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-[#FAF7F2] rounded-2xl p-5 border border-[#f1ebd7]">
                    <div className="text-3xl font-serif font-bold text-[#0e1726] mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-600 leading-snug">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <Link to="/contact" className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-gray-300 text-sm font-semibold text-[#0e1726] hover:bg-[#0e1726] hover:text-white hover:border-[#0e1726] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                  <span>Schedule a Campus Visit</span>
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="rounded-[32px] overflow-hidden shadow-xl aspect-[4/3]">
                <img src="/images/campus-building.webp" alt="Indus Design School Campus Facilities" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
