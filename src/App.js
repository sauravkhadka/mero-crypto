import React from "react";
import Coin from "./components/Coin";
import Devices from "./components/Devices";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Platform from "./components/Platform";
import Portfolio from "./components/Portfolio";
import Trade from "./components/Trade";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Coin />
      <Platform />
      <Portfolio />
      <Trade />
      <Features />
      <Devices />
      <Footer />  
    </>
  );
}

export default App;
