import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const moments = [
  {
    title: 'Aikyam Design Fest: "Future of Crafts in AI Era" Keynote',
    category: 'DESIGN FESTIVAL',
    date: 'February 2025',
    img: '/images/happening-aikyam-2025.webp',
    desc: 'Annual flagship symposium in the university auditorium featuring keynote panels on AI disruption, heritage craft futures, and interactive student installations.',
  },
  {
    title: 'CATALYST: Design Dialogue Disrupt — Academic Mentor Conclave',
    category: 'CONFERENCE',
    date: 'Design Conclave',
    img: '/images/happening-catalyst-conclave.jpg',
    desc: 'Grand felicitation and master conclave uniting design industry leaders, academic mentors, and graduating scholars on the university mainstage.',
  },
  {
    title: 'Guest Masterclass: Automotive & Industrial Design Evolution',
    category: 'GUEST LECTURE',
    date: 'Studio Masterclass',
    img: '/images/happening-design-masterclass.jpg',
    desc: 'International visiting faculty delivering hands-on sessions on industrial design history, form language, and Mercedes-Benz design iterations in the studio.',
  },
  {
    title: 'IDS Open Studio: 3D Geometric Form & Spatial Exploration',
    category: 'STUDIO EXHIBITION',
    date: 'Exhibition Showcase',
    img: '/images/happening-ids-exhibition.jpg',
    desc: 'Interactive semester display presenting student clay structures, wire sculptures, and geometric spatial models reviewed by faculty juries.',
  },
  {
    title: 'National Handloom Day: Heritage Textile & Block Print Workshop',
    category: 'LIVE WORKSHOP',
    date: 'Craft Heritage',
    img: '/images/happening-handloom-day.jpg',
    desc: 'Interactive live workshop led by master artisans and curators exploring traditional Indian handloom, natural pigment dyeing, and block print swatches.',
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
