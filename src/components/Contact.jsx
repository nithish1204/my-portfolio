import React, { useRef, useState} from "react";
import sending from "../images/sending.png";
import email from "../images/email.png";
import emailjs from '@emailjs/browser';

function Contact() {

  const form = useRef()
  const [success, setSuccess] = useState(null)

  const handleSubmit = (e) =>  {
    e.preventDefault();

    emailjs.sendForm('service_t5o6kh9', 'template_nkstt6i', form.current, '2oYmQj6xHDSIHT6ZY')
      .then((result) => {
          console.log(result.text);
          setSuccess(true)
      }, (error) => {
          console.log(error.text);
          setSuccess(false)
      });

  };

    return (
        <section id="contact" data-aos="fade-up">
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

        <div className="container contact">
          <div className="row">
            <div className="col-lg-4 col-md-10 mx-auto ">
              <p className="section-description">
                Love listening to music as I do? Let's talk about how awesome
                they are! We can code while we listen to Music!.
              </p>

              <form ref={form} onSubmit={handleSubmit}
                name="sentMessage"
              >
                <input
                  className="form-control form-labels"
                  placeholder="Name"
                  id="name"
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
              {success && 
                "Your message has been set, i'll get back to you soon :)"}
            </div>
          </div>
        </div>
        <hr />
        {/* <!-- </div> --> */}
      </section>
    );
}

export default Contact;