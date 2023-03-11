import React from "react";
import profile from "../images/profile.png";
import coding from "../images/coding.gif";
import deadpoolart from "../images/deadpoolart.gif";
import about from "../images/about.png";

function About() {
    return (
        <section id="about">
        <div className="page-title" data-aos="fade-left">
          <h2>
            <span>
              <img src={about} alt="" />
            </span>
            Nithish.<span className="name-body">profile</span>
          </h2>
        </div>

        {/* <!-- <div class="row"> --> */}
        <div className="col-lg-12" data-aos="fade-right">
          <p className="section-description">
            I'm a self-taught<span className="name-about"> Frontend developer</span> from Chennai. I have completed
            my Python Pro BootCamp and Web Development Bootcamp course by <span className="angela">Dr. Angela Yu</span>, covering
            topics like Python, Flask Framework,Bootstrap, API
            development, Web scrapping, Automation with Selenium and Data
            Visualization with libraries like Pandas, Plotly, Matplotlib Seaborn,HTML5, CSS3, Javascript, Node.js, Express.js 
            <span className="name-about">React.js</span>, MongoDB, Web3 and Dapps.
          </p>
        </div>

        <div className="row container bio" data-aos="fade-up">
          <div className="photo-div col-lg-6">
            <img
              src={profile}
              className="my-photo"
              alt="a pic of myself"
            />
          </div>

          <div className="col-lg-6">
            <div className="skills-div">
              <div className="skills">
                <div className="skill-row">
                  <img className="skill1_img" src={coding} alt="Computer gif" />
                  <h3>Coding</h3>
                  <p>
                    I enjoy making stuff with code. I would spend two hours
                    writing code to automate a two-minutes task. website designs
                    fascinates me.
                  </p>
                </div>
                <div className="skill-row">
                  <img
                    className="skill2_img"
                    src={deadpoolart}
                    alt="deadpool-art gif"
                  />
                  <h3>Drawing</h3>
                  <p>
                    <span className="name-body">"Creativity is Infinity".</span>
                    This quote keeps me going to follow my hobby of sketching
                    and to not leave it in the wind, i enjoy drawing
                    <span className="name-body">"anime"</span>
                    and <span className="name-body">"MARVEL"</span> characters
                    mostly
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default About;