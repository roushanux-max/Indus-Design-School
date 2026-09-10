import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";

const events = [
  {
    id: "aikyam",
    title: "Aikyam Fest: Future of Crafts in AI Era",
    subtitle: "IDS Annual Flagship Design Festival & Keynote Symposium",
    date: "February 2025",
    category: "CULTURAL FEST",
    image: "/images/happening-aikyam-2025.webp",
    desc: "Aikyam is the annual celebration of creativity, collaboration, and student expression at Indus Design School. The festival brings together students, international thinkers, and design enthusiasts for discussions on artificial intelligence, vernacular crafts, and multidisciplinary design.",
    highlights: [
      "Keynote symposium on 'Future of Crafts in AI Era'",
      "SkillUp: Interactive Masterclass Workshops with industry practitioners",
      "Curated Curiosities: Student-curated artisan flea market and prototypes",
      "Cinema Beyond Bollywood: Independent film screenings & panel discussions",
      "Style Spectrum: Student Fashion Show & Live Runway Presentations",
    ],
  },
  {
    id: "catalyst",
    title: "CATALYST: Design Dialogue Disrupt Conclave",
    subtitle: "Academic Mentors & Industry Leadership Felicitation",
    date: "Annual Design Conclave",
    category: "CONFERENCE",
    image: "/images/happening-catalyst-conclave.jpg",
    desc: "CATALYST brings together veteran design educators, creative mentors, studio heads, and graduating scholars to deliberate on emerging design discourses, circular economies, and industry disruption.",
    highlights: [
      "Felicitation ceremony for academic and industry design mentors",
      "Keynote panels on sustainable production and branding ethics",
      "Student portfolio juries and one-on-one mentorship critiques",
      "Interdisciplinary roundtable on design entrepreneurship",
      "Showcase of student capstone and research publications",
    ],
  },
  {
    id: "masterclass",
    title: "Guest Masterclass: Automotive & Industrial Form",
    subtitle: "International Visiting Faculty Studio Sessions",
    date: "Studio Masterclass Series",
    category: "GUEST LECTURE",
    image: "/images/happening-design-masterclass.jpg",
    desc: "A hands-on studio lecture series featuring visiting designers and scholars exploring classic industrial design evolution, aerodynamic ergonomics, form-finding, and rapid physical sketching.",
    highlights: [
      "Mercedes-Benz 1960s–1970s automotive design breakdown",
      "Form-finding, proportion studies, and tape-drawing exercises",
      "Interactive Q&A on global product design opportunities",
      "Student sketch critique and digital rendering masterclass",
      "Ergonomic packaging and scale prototyping guidance",
    ],
  },
  {
    id: "open-studio",
    title: "IDS Open Studio: 3D Form & Sculpture Showcase",
    subtitle: "Semester-End Student Exhibition",
    date: "Exhibition Showcase",
    image: "/images/happening-ids-exhibition.jpg",
    desc: "Semester-end public open studio where foundation year and discipline scholars present their tactile 3D spatial investigations, foam sculptures, wire constructs, and clay creations for academic review.",
    highlights: [
      "Full array of abstract geometric forms and volumetric studies",
      "Ceramic, wire, paperboard, and clay experimentation",
      "Faculty jury evaluation and open public interaction",
      "Peer review sessions and cross-departmental dialogue",
      "Studio documentation and digital archiving workshop",
    ],
  },
  {
    id: "handloom",
    title: "National Handloom Day: Living Heritage Workshop",
    subtitle: "Interactive Textile & Natural Dye Atelier",
    date: "Craft Heritage",
    image: "/images/happening-handloom-day.jpg",
    desc: "A dedicated master workshop with renowned craft curators and artisan practitioners celebrating India's living textile traditions through live hand-block printing, indigenous pigments, and surface pattern creation.",
    highlights: [
      "Interactive masterclass with heritage curator Avani Varia",
      "Hands-on wooden block printing on organic cotton yardage",
      "Natural pigment formulation and mordanting exploration",
      "Documentation of Gujarat's regional weaving clusters",
      "Student surface design and contemporary textile swatches",
    ],
  },
  {
    id: "rsp",
    title: "RSP: Rural & Related Study Program",
    subtitle: "Immersive Fieldwork Expedition & Heritage Documentation",
    date: "Fieldwork Program",
    image: "/images/happening-rsp-craft-tour.jpg",
    desc: "The Rural & Related Study Program takes IDS scholars on multi-day immersive field expeditions across heritage artisan communities. Students study vernacular dwellings, traditional crafts, and indigenous communities firsthand.",
    highlights: [
      "Vernacular architecture documentation and measured drawing",
      "Direct immersion with traditional pottery and textile artisans",
      "Ethnographic research methods and community interviews",
      "Participatory design workshops with local craft guilds",
      "Publication of comprehensive village study monographs",
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
