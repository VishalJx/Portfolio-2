import React from "react";
import "../style/Home.css";
import Typewriter from "typewriter-effect";
function Home(){
  return (
    <div className="home" id="home">
      <div className='intro'>
          <div id='intro1'>MYSELF</div>
          <div id='intro2'>VISHAL JAISWAL</div>
      </div>
      <div id='am'>
          <span>
            I'm a student as well as a{'\u00A0'}
          </span> 
            <Typewriter 
                options={{
                  strings: ['Full Stack Developer', 'Tech Enthusiast'],
                  autoStart: true,
                  loop: true,
                }}
              />
      </div>
      <div className="icon-scroll"></div>    
    </div>
  )
};

export default Home;
