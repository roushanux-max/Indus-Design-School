import re

with open(r'src/components/ProgramsList.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

card_start = content.find('          {courses.map((course, index) => (')
card_end = content.find('          {/* Catalog CTA Summary Card', card_start)

if card_start != -1 and card_end != -1:
    new_card_code = """          {courses.map((course, index) => (
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

"""
    
    new_content = content[:card_start] + new_card_code + content[card_end:]
    
    with open(r'src/components/ProgramsList.tsx', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Updated successfully")
else:
    print("Could not find boundaries")
