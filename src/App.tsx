
import React from 'react';
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
