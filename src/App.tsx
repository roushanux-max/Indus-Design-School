import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { PageLoader } from './components/PageLoader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { Campus } from './components/Campus';
import { Stats } from './components/Stats';
import { Testimonials } from './components/Testimonials';
import { AdmissionsInfo } from './components/AdmissionsInfo';
import { Footer } from './components/Footer';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <PageLoader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Programs />
            <Campus />
            <Stats />
            <Testimonials />
            <AdmissionsInfo />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
