import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <section id="navigation">
        <div className="block-container">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <a href="/" className="navbar-brand ">
              <span id="name-nav"> Nithish's Website</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav ms-auto">
                <li className="navbar-item">
                  <a className="nav-link" href="#about">
                    <span className="nav-boys">About</span>
                  </a>
                </li>
                <li className="navbar-item">
                  <Link className="nav-link" to="/Projects">Projects</Link>            
                </li>
                <li className="navbar-item">
                  <a className="nav-link" href="#contact">
                    <span className="nav-boys">Contact</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    );
}

export default Header;