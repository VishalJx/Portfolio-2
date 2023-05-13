import React from "react";
import "../style/Contact.css";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import {IoMail} from "react-icons/io5";



function Contact(){
  return (
    <div className="contact-container" id="contact">
      <div style={{display:"flex",alignItems:"center", justifyContent:"center",gap:"0.4rem"}}><h1 className="title">Let's Connect</h1><IoMail style={{fontSize:"2.5rem",color:"#c90505"}}/></div>
      <div className="contact">
        <div className="blob-area">
        <div className="blob">{/* Blob Area */}</div>
        <div className="form">
          <h1>Contact Me</h1>
          <form action="https://formspree.io/f/mbjejkrj" method="POST">
              <input placeholder="Name"></input>
              <input placeholder="Email"></input>
              <textarea placeholder="Message"></textarea>
            <button className="send" type="submit">Send</button>
          </form>
        </div>
        </div>
        <div className="info" style={{display:"flex",flexDirection:"column", gap:"0.4rem"}}>
          <p> You can reach me through following mediums</p>
          <div><BsFillTelephoneInboundFill style={{color:"#94163e", fontSize:"1.5rem"}}/>+91-8429495852</div>
          <div><IoMdMail style={{color:"#94163e", fontSize:"1.5rem"}}/>itsmevishal360@gmail.com</div>
          <div><ImLocation style={{color:"#94163e", fontSize:"1.5rem"}}/>Mumbai, Maharashtra</div>
        </div>
        </div>
    </div>
  )
};

export default Contact;
