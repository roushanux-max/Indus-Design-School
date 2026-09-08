import { Hero } from '../components/Hero';
import { Glance } from '../components/Glance';
import { Facilities } from '../components/Facilities';
import { ProgramsList } from '../components/ProgramsList';
import { LegacyDark } from '../components/LegacyDark';
import { CampusMoments } from '../components/CampusMoments';
import { NewsSection } from '../components/NewsSection';
import { ContactInquiry } from '../components/ContactInquiry';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Glance />
      <Facilities />
      <ProgramsList />
      <LegacyDark />
      <CampusMoments />
      <NewsSection />
      <ContactInquiry />
    </>
  );
};
