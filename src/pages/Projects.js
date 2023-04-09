import React from "react";
import "../style/Projects.css";
import { IoCodeSlashSharp } from "react-icons/io5";
import {ProjectData} from "../ProjectData";
import {BsGithub} from "react-icons/bs";
import {MdOutlineComputer} from "react-icons/md";

function Projects(){
  return (
    <div className="projects" id="projects" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"2rem"}}>
      <div className="about-head" style={{display:"flex",alignItems:"center"}}>
        <h1>Project</h1><IoCodeSlashSharp style={{color:"#c90505", fontSize:"2.3rem",padding:"0.5rem 0.1rem 0.5rem 0.5rem"}}/>
      </div>
      <div className="projects-container">
        {
          ProjectData.map((project,index)=>{
              return(
                <div className="project" id="hovering" key={index}>
                  <div className="project-img">
                    <img src={project.image}  alt=""></img>
                    <div className="description"><p>{project.description}</p></div>
                  </div>
                  <div className="project-name">
                    <h3>{project.name}</h3>
                  </div>
                  <div className="demo">
                    <p id='live'><a style={{color:'white'}} href={project.dLink} target="_blank">Live</a><MdOutlineComputer style={{fontSize:"1.6rem",paddingLeft:"0.2rem"}}/></p>
                    <p id="code"><a style={{color:'black'}} href={project.gLink} target="_blank">Code</a><BsGithub style={{fontSize:"1.6rem",paddingLeft:"0.2rem"}}/></p>
                  </div>
                </div>
              )
          })
        }
      </div>
    </div>
  )
};

export default Projects;
