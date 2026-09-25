import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { GridLines } from './GridLines';

const newsArticles = [
  {
    id: 1,
    title: 'Admissions Open 2026–27: Apply for B.Des & M.Des Programs',
    author: 'Admissions Office',
    date: '10 Jun 2025',
    readTime: '9 min Read',
    image: '/images/campus-building-real.jpg',
    link: '/admissions',
  },
  {
    id: 2,
    title: 'Design Hunt 2026 & AIDAT: Registration Now Live',
    author: 'Exam Board',
    date: '10 Jun 2025',
    readTime: '9 min Read',
    image: '/images/b-design.jpg',
    link: '/admissions',
  },
  {
    id: 3,
    title: 'Vidvata Merit Scholarship Scheme for Outstanding Portfolios',
    author: 'Scholarship Desk',
    date: '10 Jun 2025',
    readTime: '9 min Read',
    image: '/images/communication-design.jpg',
    link: '/admissions',
  },
];

export const NewsSection: React.FC = () => {
  return (
    <section id="news" className="py-12 sm:py-16 lg:py-24 bg-[#0a0d12]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Main White Card matching the image */}
        <div className="relative rounded-[32px] sm:rounded-[40px] bg-white overflow-hidden p-8 sm:p-12 lg:p-16 xl:px-24">
          
          <GridLines theme="light" />

          <div className="relative z-10">
            
            {/* Header Area */}
            <div className="text-center mb-16 lg:mb-20">
              <span className="text-[11px] sm:text-xs font-medium text-gray-500 italic block mb-4">
                News
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium text-[#0e1726] leading-tight tracking-tight">
                Discover the Latest News at Indus
              </h2>
            </div>

            {/* 3-Column Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {newsArticles.map((article) => (
                <Link
                  key={article.id}
                  to={article.link}
                  className="group flex flex-col h-full cursor-pointer bg-white relative"
                >
                  {/* Image with rounded corners */}
                  <div className="rounded-[24px] overflow-hidden aspect-[4/3] mb-6 shadow-sm">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  
                  {/* Meta 1: Date & Author */}
                  <div className="flex justify-between items-center text-[11px] sm:text-[12px] text-gray-400 mb-4 px-1">
                    <span>{article.date}</span>
                    <span>{article.author}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[#0e1726] text-lg sm:text-[22px] font-medium leading-snug mb-8 flex-grow px-1 group-hover:text-[#e3461a] transition-colors">
                    {article.title}
                  </h3>

                  {/* Meta 2: Read Time & Read More */}
                  <div className="flex justify-between items-center pt-5 border-t border-gray-100 mt-auto px-1">
                    <span className="text-[11px] sm:text-[12px] text-gray-400">
                      {article.readTime}
                    </span>
                    <div className="flex items-center gap-2 text-[11px] sm:text-[12px] font-medium text-gray-500 group-hover:text-[#0e1726] transition-colors">
                      <span>Read more</span>
                      <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-[#0e1726] group-hover:text-white transition-all duration-300">
                        <ArrowRight size={12} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
};

