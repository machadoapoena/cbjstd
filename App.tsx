
import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Countdown from './components/Countdown.tsx';
import PrizeTable from './components/PrizeTable.tsx';
import Winners from './components/Winners.tsx';
import Schedule from './components/Schedule.tsx';
import FeaturedPlayers from './components/FeaturedPlayers.tsx';
import Registration from './components/Registration.tsx';
import Contact from './components/Contact.tsx';
import Partners from './components/Partners.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <FeaturedPlayers />
        <Registration />
        <PrizeTable />
        <Schedule />
        <Winners />
        <Contact />
        <Partners />
      </main>
      <Footer />
    </div>
  );
};

export default App;
