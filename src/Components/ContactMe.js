import React from "react";
import "./ContactMe.css";
import image1 from "../Assets/email.png";
export default function ContactMe({ theme }) {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <>
      <div className={`Contact ${theme ? "" : "Dark"}`} id="Contact">
        <div className="MyWork-top">
          <div className="MyWork-top-heading">
            <span className="MyWork-first">Contact</span>&nbsp;
            <span className="MyWork-second">Me</span>
          </div>
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
