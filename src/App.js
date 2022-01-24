import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Signin from "./pages/Signin";
import Register from "./pages/Register";
import Registersuccess from "./pages/Registersuccess";
import Contactus from "./pages/Contactus";
import Cryptodata from "./pages/Cryptodata/Cryptodata";
import Cryptomain from "./pages/Cryptodata/Cryptomain";
import Signinsuccess from "./pages/Signinsuccess";
import Legal from "./pages/Legal";
import Faqs from "./pages/Faqs";



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/registersuccess" element={<Registersuccess />} />
        <Route exact path="/contactus" element={<Contactus />} />
        <Route exact path="/legal" element={<Legal />} />
        <Route exact path="/faqs" element={<Faqs />} />
        <Route exact path="/cryptodata" element={<Cryptodata />} />
        <Route exact path="/cryptomain" element={<Cryptomain />} />
        <Route exact path="/signinsuccess" element={<Signinsuccess />} />
      </Routes>
      <Footer /> 
    </>
  );
}

export default App;
