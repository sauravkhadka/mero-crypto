import React from 'react';
import Coin from '../components/Coin';
import Devices from '../components/Devices';
import Features from '../components/Features';
import Hero from '../components/Hero';
import Platform from '../components/Platform';
import Portfolio from '../components/Portfolio';
import Trade from '../components/Trade';

const Home = () => {
  return <div>
        <Hero/>
      <Coin/>
      <Platform />
      <Portfolio />
      <Trade />
      <Features />
      <Devices />
  </div>;
};

export default Home;
