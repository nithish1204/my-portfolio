import React from "react";
import sending from "../images/sending.png";
import email from "../images/email.png";

function Contact() {
    return (
        <section id="contact">
        <div className="page-title">
          <h2>
            <span>
              <img className="mail-img" src={email} alt="" />
            </span>
            Nithish.<span className="name-body">contact</span>
          </h2>
        </div>

        <div className="contact-quote col-lg-12">
          <p class="contact-p">
            To get to know me better ,there are simpler ways for us to connect.
          </p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-10 mx-auto ">
              <p className="section-description">
                Love listening to music as I do? Let's talk about how awesome
                they are! We can code while we listen to Music!.
              </p>

              <form
                name="sentMessage"
                action="https://formsubmit.co/nithish1204@gmail.com"
                method="POST"
              >
                <input
                  className="form-control form-labels"
                  placeholder="Name"
                  id="n"
                  name="name"
                  required
                />
                <input
                  type="email"
                  className="form-control form-labels"
                  placeholder="Email Address"
                  id="email"
                  name="email"
                  required
                />
                <textarea
                  rows="5"
                  name="message"
                  className="form-control form-labels"
                  placeholder="Your Message"
                  id="message"
                  required
                  data-validation-required-message="Please enter a message."
                ></textarea>
                <button type="submit" className="BUTTON_MZU send-button">
                  <span>
                    <img className="mail-img"
                      src={sending}
                      alt="mail sending icon"
                    />
                  </span>
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
        <hr />
        {/* <!-- </div> --> */}
      </section>
    );
}

export default Contact;