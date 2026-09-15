export interface CourseItem {
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

export const bdesCourses: CourseItem[] = [
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

export const mdesCourses: CourseItem[] = [
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

export const minorCourses: CourseItem[] = [
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
