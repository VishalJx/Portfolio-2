import React from "react";
import "../style/Navbar.css";
import {IoHome , IoMail , IoPerson , IoCodeSlashSharp} from "react-icons/io5";

function Navbar(){
  return (
    <div className="navbar">
      <ul className="nav-icons">
        <li title="Home"><a href="#home"><IoHome/></a></li>
        <li title="About"><a href="#about"><IoPerson/></a></li>
        <li title="Projects"><a href="#projects"><IoCodeSlashSharp/></a></li>
        <li title="Contact"><a href="#contact"><IoMail/></a></li>
      </ul>
    </div>
  )
};

export default Navbar;
