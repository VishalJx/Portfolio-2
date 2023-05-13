import React from "react";
import "../style/Introbar.css";
import {BsLinkedin, BsGithub, BsTwitter} from "react-icons/bs"
import avatar from "../resources/avatar.png"
function IntroBar(){
  return (
    <div className="intro-bar">
      <div className="intro-top">
        <div>
          <img className="intro-img" src={avatar} alt=""/>
        </div>
        <div className="name">
          <h3>Vishal Jaiswal</h3>
        </div>
        <div className="developer">
          <p>MERN Stack Developer</p>
        </div>
        <ul className="social-icons">
          <li id="linkedin"><BsLinkedin/></li>
          <li id="github"><BsGithub/></li>
          <li id="twitter"><BsTwitter/></li>
        </ul>
      </div>
      <div className="resume">
        <a style={{color:"white"}} href="https://drive.google.com/file/d/18cVgvHZewaVIPFz7Ni88y-Zyxt5surcy/view?usp=share_link" target="_blank">Resume</a>
      </div>
    </div>
  )
};

export default IntroBar;
