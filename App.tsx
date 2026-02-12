
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import PrizeTable from './components/PrizeTable';
import Winners from './components/Winners';
import Schedule from './components/Schedule';
import FeaturedPlayers from './components/FeaturedPlayers';
import Registration from './components/Registration';
import Contact from './components/Contact';
import Partners from './components/Partners';
import Footer from './components/Footer';

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
