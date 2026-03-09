
import React from 'react';
import Navbar from './Navbar.tsx';
import Hero from './Hero.tsx';
import Countdown from './Countdown.tsx';
import PrizeTable from './PrizeTable.tsx';
import Winners from './Winners.tsx';
import Schedule from './Schedule.tsx';
import FeaturedPlayers from './FeaturedPlayers.tsx';
import Registration from './Registration.tsx';
import Contact from './Contact.tsx';
import Partners from './Partners.tsx';
import Footer from './Footer.tsx';

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
