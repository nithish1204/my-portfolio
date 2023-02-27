import React from "react";

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
          </nav>
        </div>
      </section>
    );
}

export default Header;