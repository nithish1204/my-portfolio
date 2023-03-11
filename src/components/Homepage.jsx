import React from "react";
import mail from "../images/message.png";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
// import Spline from "@splinetool/react-spline";

function Homepage() {

  const el = useRef(null);
    
    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ["Nithish Reddy", "Artist", "Coder"],
        startDelay: 100,
        typeSpeed: 150,
        backDelay: 150,
        backSpeed: 150,
        smartBackspace: true,
        showCursor: false,
        loop: true
      })
    })
  

  return (
    <section id="homepage">
      <div className="row block-container">
        <div className="greetings col-lg-6 ">
          <h1 className="small-title">Hi,</h1>
          <h2 className="big-title">
            <span className="im">I'm </span>
            <span className="name-body" ref={el}></span>
          </h2>
          <p className="profession">a BTECH Graduate.</p>
          <p>
            I completed my graduation at SRM VDP campus in BTECH/ECE course in
            2022 .
          </p>
          <a href="#contact">
            <button type="button" className="BUTTON_PFF">
              <img className="mail-img" src={mail} alt="email icon" />
              Say Hello
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Homepage;
