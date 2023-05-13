import React from "react";
import "../style/About.css";
import { BsPersonFill } from "react-icons/bs";


function About(){

  return (
    <div className="about" id="about">
      <div className="about-head" style={{display:"flex",alignItems:"center"}}>
        <h1>About Me</h1><BsPersonFill style={{color:"", fontSize:"2.3rem",paddingLeft:"0.5rem"}}></BsPersonFill>
      </div>
      <div className="about-p" style={{textAlign:"justify",marginBottom:"0.5rem"}}>
        <p>I am a sophomore and a Full Stack developer from IIIT-Bhopal. I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using MERN Stack. Apart from webdev, I also love to explore the domain of Cybersecurity and AI.</p>
      </div>
      <div className="skills" >
        <div className="frontend">
          <h3>Frontend</h3>
          <div style={{display:"flex",gap:"2rem",padding:"0.5rem 0.3rem"}}>
            <span><img className="skill-imgs" alt='none' src="https://cdn.iconscout.com/icon/free/png-256/javascript-3521515-2945018.png?f=avif&w=128"/>JavaScript</span>
            <span><img className="skill-imgs" alt='none' src="https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png?f=avif&w=128"/>ReactJS</span>
            <span><img className="skill-imgs" alt='none' src="https://cdn.iconscout.com/icon/free/png-256/html5-40-1175193.png?f=avif&w=128"/>HTML5</span>
            <span><img className="skill-imgs" alt='none' src="https://cdn.iconscout.com/icon/free/png-256/css3-11-1175239.png?f=avif&w=128"/>CSS3</span>
            <span><img className="skill-imgs" alt='none' src="https://cdn.iconscout.com/icon/free/png-256/bootstrap-3628663-3029888.png?f=avif&w=128"/>Bootstrap</span>
          </div>
        </div>
        <div className="backend">
        <h3>Backend</h3>
          <div style={{display:"flex",gap:"2rem",padding:"0.5rem 0.3rem"}}>
            <span><img className="skill-imgs" alt='none' src="https://cdn.iconscout.com/icon/free/png-256/node-js-1-1174935.png?f=avif&w=128"/>NodeJS</span>
            <span><img className="skill-imgs" alt='none' src="https://cdn.iconscout.com/icon/free/png-256/express-8-1175029.png?f=avif&w=128"/>ExpressJS</span>
            <span><img className="skill-imgs" alt='none' src="https://cdn.iconscout.com/icon/free/png-256/mongodb-4-1175139.png?f=avif&w=128"/>MongoDB</span>
          </div>
        </div>
          <div className="others">
          <h3>Other</h3>
            <div style={{display:"flex",gap:"2rem",padding:"0.5rem 0.3rem"}}>
              <span><img className="skill-imgs" alt='none' src="https://cdn.iconscout.com/icon/free/png-256/github-1521500-1288242.png?f=avif&w=128"/>Github</span>
              <span><img className="skill-imgs" alt='none' src="https://cdn.iconscout.com/icon/free/png-256/adobe-photoshop-4238646-3516519.png?f=avif&w=128"/>Photoshop</span>
            </div>
          </div>
      </div>
    </div>
  )
};

export default About;
