
import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Countdown from './Countdown';
import PrizeTable from './PrizeTable';
import Winners from './Winners';
import Schedule from './Schedule';
import FeaturedPlayers from './FeaturedPlayers';
import Registration from './Registration';
import Contact from './Contact';
import Partners from './Partners';
import Footer from './Footer';
import RegistrationModal from './RegistrationModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onOpenRegistration={() => setIsModalOpen(true)} />
      <main>
        <Hero />
        <Countdown />
        <FeaturedPlayers />
        <Registration onOpenRegistration={() => setIsModalOpen(true)} />
        <PrizeTable />
        <Schedule />
        <Winners />
        <Contact />
        <Partners />
      </main>
      <Footer />
      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;
