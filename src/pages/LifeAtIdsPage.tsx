import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";

const events = [
  {
    id: "aikyam",
    title: "Aikyam Fest 2025",
    subtitle: "IDS Annual Flagship Design Festival",
    date: "February 2025",
    category: "CULTURAL FEST",
    image: "/images/aikyam-flea.jpg",
    desc: "Aikyam is the annual celebration of creativity, collaboration, and student expression at Indus Design School. The five-day festival brings together students, industry professionals, and design enthusiasts under one creative roof.",
    highlights: [
      "SkillUp: Interactive Masterclass Workshops with design professionals",
      "Curated Curiosities: Student-curated artisan flea market",
      "Cinema Beyond Bollywood: Independent film panel discussions",
      "Style Spectrum: Student Fashion Show & Runway Presentations",
      "Creative Callout: Short Film Festival Open Entries",
    ],
  },
  {
    id: "design-scapes",
    title: "Design Scapes Exhibition",
    subtitle: "Annual Graduation Design Showcase",
    date: "May 2024 • 28th–29th May, 09:00 AM – 5:00 PM",
    category: "EXHIBITION",
    image: "/images/design-scapes-banner.jpg",
    desc: "Design Scapes is the premier annual graduation showcase where final-year students present their capstone studio projects to industry juries, alumni, and the public. A convergence of interior scale models, fashion collections, communication design systems, product prototypes, and digital UX case studies.",
    highlights: [
      "Interior Design: Full-scale spatial models and 3D walkthroughs",
      "Fashion Design: Original garment collections on live runway",
      "Communication Design: Branding, motion, and publication systems",
      "Product Design: Ergonomic prototypes and user testing demos",
      "UI/UX Design: Interactive digital product walkthroughs",
    ],
  },
  {
    id: "claymation",
    title: "Claymation Animation Lab",
    subtitle: "Stop-Motion Clay & Ceramic Workshop",
    date: "June 2024",
    category: "CREATIVE WORKSHOP",
    image: "/images/claymation-banner.jpg",
    desc: "Claymation is a delightful fusion of clay sculpture, emotional storytelling, and frame-by-frame stop-motion animation. Participants explore the tactile joy of building expressive characters and narratives entirely from clay in IDS's dedicated ceramic studio.",
    highlights: [
      "Character design & clay modelling fundamentals",
      "Stop-motion camera rig setup and lighting",
      "Frame-by-frame animation capture techniques",
      "Soundtrack and emotion integration",
      "Final screened mini-film premiere",
    ],
  },
  {
    id: "rsp",
    title: "RSP 2025: Rural & Related Study Program",
    subtitle: "Immersive Gujarat Craft Documentation Tour",
    date: "January 2025",
    category: "STUDY TOUR",
    image: "/images/design-scapes-thumb.jpg",
    desc: "The Rural & Related Study Program takes IDS students on a multi-day immersive fieldwork expedition through Gujarat's rich craft heritage. Students document indigenous artisan communities, vernacular architectural typologies, and traditional material practices with design ethnography methods.",
    highlights: [
      "Block printing workshops in Rajkot & Bhuj artisan clusters",
      "Vernacular housing documentation & spatial ethnography",
      "Khari embroidery, Patola weave & Bandhani dye immersion",
      "Traditional terracotta & pottery studies",
      "Participatory design interventions in rural schools",
    ],
  },
  {
    id: "orientation",
    title: "Creative Induction & Orientation Week",
    subtitle: "Annual Welcome for New IDS Scholars",
    date: "August 2024",
    category: "CAMPUS LIFE",
    image: "/images/orientation.jpg",
    desc: "Every year, Indus Design School welcomes its new batch of undergraduate and postgraduate scholars with a week-long creative induction program designed to break ice, introduce studio culture, and spark interdisciplinary collaboration before semester one begins.",
    highlights: [
      "24-hour collaborative design challenge sprint",
      "Studio space orientation and equipment safety training",
      "Faculty mentorship meet-and-greet sessions",
      "Senior student portfolio sharing & inspiration gallery",
      "Campus cultural & sustainability induction walk",
    ],
  },
];

export const LifeAtIdsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero Header */}
      <div className="py-12 sm:py-16 lg:py-20 border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e3461a] block mb-3">LIFE @ IDS &amp; CAMPUS EVENTS</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#0e1726] leading-tight mb-5">
            Lectures, Festivals, Cultural Moments &amp; More
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl leading-relaxed">
            Campus life at Indus Design School is an immersive creative ecosystem built around hands-on studios, annual design festivals, guest masterclasses, study tours, and vibrant student communities.
          </p>
        </div>
      </div>

      {/* Events List */}
      <div className="py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 space-y-24">
          {events.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-12 gap-12 items-center ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image Side */}
              <div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="rounded-[32px] overflow-hidden shadow-xl aspect-[4/3] relative group">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-5 left-5 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-mono tracking-wider">
                    {event.category}
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="flex items-center gap-3 mb-4">
                  <Calendar size={14} className="text-[#c88732]" />
                  <span className="text-xs font-mono text-gray-500 font-semibold">{event.date}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0e1726] leading-tight mb-2">
                  {event.title}
                </h2>
                <p className="text-sm font-semibold text-[#e3461a] mb-4 uppercase tracking-wide">{event.subtitle}</p>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {event.desc}
                </p>

                {/* Highlights list */}
                <div className="space-y-2.5 mb-8">
                  {event.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e3461a] mt-2 flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-gray-300 text-sm font-semibold text-[#0e1726] hover:bg-[#0e1726] hover:text-white hover:border-[#0e1726] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer shadow-xs"
                  >
                    <span>Inquire about this event</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div className="py-20 bg-[#FAF7F2] border-t border-[#f1ebd7]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0e1726] mb-4">
            Join the IDS Creative Community
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Admissions for 2026–27 are open. Apply now and become part of a thriving creative community at Indus Design School.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/admissions" className="px-8 py-4 rounded-full bg-[#0e1726] text-white text-sm font-semibold hover:bg-black hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
              Apply for 2026 Admissions
            </Link>
            <Link to="/contact" className="px-8 py-4 rounded-full border border-gray-300 text-sm font-semibold text-[#0e1726] hover:bg-[#0e1726] hover:text-white hover:border-[#0e1726] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
              Schedule Campus Visit
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};
