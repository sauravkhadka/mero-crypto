import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Coinss from "./pages/Coinss";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Signin from "./pages/Signin";
import Register from "./pages/Register";
import Contactus from "./pages/Contactus";


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
        <Route exact path="/coinss" element={<Coinss />} />
        <Route exact path="/contactus" element={<Contactus />} />
      </Routes>
      <Footer /> 
    </>
  );
}

export default App;
