import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const moments = [
  {
    title: 'Aikyam Fest 2025: Annual Flagship Design Festival',
    category: 'CULTURAL FEST',
    date: 'February 2025',
    img: '/images/aikyam-flea.jpg',
    desc: 'Featuring SkillUp interactive workshops, Curated Curiosities student flea market, and the Style Spectrum fashion runway.',
  },
  {
    title: 'Design Scapes: Annual Graduation Design Exhibition',
    category: 'EXHIBITION',
    date: 'May 2024',
    img: '/images/design-scapes-banner.jpg',
    desc: 'A grand showcase of student capstone works, spatial scale models, typography explorations, and physical prototypes.',
  },
  {
    title: 'Claymation: Stop-Motion Ceramic & Animation Lab',
    category: 'WORKSHOP',
    date: 'June 2024',
    img: '/images/claymation-banner.jpg',
    desc: 'A delightful fusion of clay modeling, emotional storytelling, character design, and frame-by-frame tactile animation.',
  },
  {
    title: 'RSP 2025: Rural & Related Study Program',
    category: 'STUDY TOUR',
    date: 'January 2025',
    img: '/images/design-scapes-thumb.jpg',
    desc: 'Immersive fieldwork documenting indigenous crafts, vernacular architecture, and traditional artisan communities across Gujarat.',
  },
  {
    title: 'IDS Orientation & Creative Induction Week',
    category: 'CAMPUS LIFE',
    date: 'August 2024',
    img: '/images/orientation.jpg',
    desc: 'Welcoming new batches of B.Des and M.Des scholars into studio culture through collaborative icebreaking design sprints.',
  },
];

export const CampusMoments: React.FC = () => {
  return (
    <section id="campus" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Centered Heading matching Section 6 in Oxford reference */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e3461a] block mb-3">
            CAMPUS CULTURE &amp; HAPPENINGS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0e1726] leading-tight mb-4">
            Lectures, Conferences, Cultural Moments &amp; More
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Experience the vibrant studio life, annual design fests, guest masterclasses, and hands-on workshops that define life at Indus Design School.
          </p>
        </div>

        {/* Staggered Photography Grid matching Oxford reference layout */}
        <div className="space-y-12">
          
          {/* Row 1: Two cards (Left & Right) */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[moments[0], moments[1]].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer flex flex-col justify-between"
              >
                <div className="rounded-[28px] overflow-hidden shadow-md mb-4 aspect-[16/10] relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-mono tracking-wider">
                    {item.category}
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="font-serif font-bold text-lg sm:text-xl text-[#0e1726] group-hover:text-[#e3461a] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <span className="text-xs text-gray-500 font-mono flex-shrink-0">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2: One Centered Focal Card */}
          <div className="max-w-3xl mx-auto">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer"
            >
              <div className="rounded-[28px] overflow-hidden shadow-lg mb-4 aspect-[16/9] relative">
                <img
                  src={moments[2].img}
                  alt={moments[2].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-mono tracking-wider">
                  {moments[2].category}
                </div>
              </div>
              <div className="flex items-center justify-between gap-4 mb-2">
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#0e1726] group-hover:text-[#e3461a] transition-colors">
                  {moments[2].title}
                </h3>
                <span className="text-xs text-gray-500 font-mono flex-shrink-0">
                  {moments[2].date}
                </span>
              </div>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {moments[2].desc}
              </p>
            </motion.div>
          </div>

          {/* Row 3: Two cards (Left & Right) */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[moments[3], moments[4]].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer flex flex-col justify-between"
              >
                <div className="rounded-[28px] overflow-hidden shadow-md mb-4 aspect-[16/10] relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-mono tracking-wider">
                    {item.category}
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="font-serif font-bold text-lg sm:text-xl text-[#0e1726] group-hover:text-[#e3461a] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <span className="text-xs text-gray-500 font-mono flex-shrink-0">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* View Life @ IDS CTA */}
        <div className="pt-14 text-center">
          <Link
            to="/life-at-ids"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-gray-300 text-sm font-semibold text-[#0e1726] hover:bg-[#0e1726] hover:text-white hover:border-[#0e1726] hover:-translate-y-0.5 transition-all duration-300 shadow-xs cursor-pointer"
          >
            <span>Explore All Campus Moments &amp; Festivals</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
};
