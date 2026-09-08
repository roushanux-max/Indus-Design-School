import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Glance } from './components/Glance';
import { Facilities } from './components/Facilities';
import { ProgramsList } from './components/ProgramsList';
import { LegacyDark } from './components/LegacyDark';
import { CampusMoments } from './components/CampusMoments';
import { NewsSection } from './components/NewsSection';
import { ContactInquiry } from './components/ContactInquiry';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-[#0e1726] antialiased selection:bg-brand-orange/20 selection:text-brand-orange">
      <Navbar />
      <main>
        <Hero />
        <Glance />
        <Facilities />
        <ProgramsList />
        <LegacyDark />
        <CampusMoments />
        <NewsSection />
        <ContactInquiry />
      </main>
      <Footer />
    </div>
  );
}

export default App;
