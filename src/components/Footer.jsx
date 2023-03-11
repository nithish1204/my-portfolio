import React from "react";
import instagram from "../images/instagram.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import mail from "../images/message.png";
import copyright from "../images/copyright.png";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <section id="footer">
      <div className="container icon-container">
        <div className="footer-icon">
          <a
            className="footer-link"
            href="https://www.instagram.com/nithish_1204/"
          >
            <img src={instagram} alt="instagram icon" />
          </a>
        </div>
        <div className="footer-icon">
          <a
            className="footer-link-linkedin"
            href="https://github.com/settings/profile"
          >
            <img className="mail-img" src={github} alt="github icon" />
          </a>
        </div>
        <div className="footer-icon">
          <a className="footer-link" href="mailto:nithish1204@gmail.com">
            <img className="mail-img" src={mail} alt="email icon" />
          </a>
        </div>
        <div className="footer-icon">
          <a
            className="footer-link-linkedin"
            href="https://www.linkedin.com/in/nithish-r-89566a210/"
          >
            <img className="mail-img" src={linkedin} alt="linkedin icon" />
          </a>
        </div>
      </div>
      <div>
        <p className="copyright">
          <img className="mail-img" src={copyright} alt="copyright icon" />
          Nithish Reddy {year}
        </p>
      </div>
    </section>
    
  );
}

export default Footer;
