import React from "react";
import "./ContactMe.css";
import image1 from "../Assets/email.jpg";
export default function ContactMe() {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <>
      <div className="Contact" id="Contact">
        <div className="MyWork-top">
          <div className="MyWork-top-heading">
            <span className="MyWork-first">Contact</span>&nbsp;
            <span className="MyWork-second">Me</span>
          </div>
          {/* <div className="MyWork-top-about" style={{ textAlign: "center" }}>
            <p>
              "Join me as I explore a world of ideas, technology, and life
              lessons. Through my blogs, I share valuable insights, personal
              stories, and practical tips for everyone."
            </p>
          </div> */}
          <div className="bottom-bar"></div>
        </div>
        <div className="outer-contact">
          <div className="Contact-main">
            <div className="Contact-img">
              <img src={image1} alt="Email" />
            </div>
            <div className="ContactInfo">
              <div className="formtitle">
                <h5>Get in touch</h5>
              </div>
              <form className="ContactForm" onSubmit={handleSubmit}>
                <div className="input">
                  <input type="text" placeholder="Name" name="name" />
                </div>
                <div className="input">
                  <input type="email" placeholder="email" name="email" />
                </div>
                <div className="input">
                  <input type="text" placeholder="subject" name="subject" />
                </div>
                <div className="input">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="message"
                    rows={5}
                  />
                </div>
                <div className="sendmail">
                  {/* <button>Send Email</button> */}
                  <input type="submit" value="Send Mail" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
