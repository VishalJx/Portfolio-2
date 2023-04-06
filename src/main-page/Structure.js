import React from "react";
import "../style/Structure.css";
import IntroBar from "../components/IntroBar";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

function Structure(){
  return (
    <div className="bg-page">
      <div className="main-page">
        <div className="intro-div">
          <IntroBar/>
        </div>
        <div className="mid-section">
          <Home/>
          <About/>
          <Projects/>
          <Contact/>
        </div>
        <div className="nav-div">
          <Navbar id="nav"/>
        </div>
      </div>
    </div>
  )
};

export default Structure;
