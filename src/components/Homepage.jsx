import React from "react";
import mail from "../images/message.png";
// import Spline from "@splinetool/react-spline";

function Homepage() {
  return (
    <section id="homepage">
      <div className="row block-container">
        {/* <Spline
          className="spline"
          scene="https://prod.spline.design/8OemvvjXvLHtJoH4/scene.splinecode"
        /> */}
        <div className="greetings col-lg-6 ">
          <h1 className="small-title">Hi,</h1>
          <h2 className="big-title">
            <span className="im">I'm </span>
            <span className="name-body">Nithish Reddy</span>
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
