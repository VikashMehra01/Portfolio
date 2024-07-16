import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactMe.css";
import image1 from "../Assets/email.png";
export default function ContactMe({ theme }) {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_tk9hbwj",
        "template_syjlp0f",
        form.current,
        "9xkrBqDw3VOOuEQET"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          setIsSending(false);
          setMessage("SUCCESS! Your email has been sent.");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsSending(false);
        }
      );
  };
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
              <form className="ContactForm" ref={form} onSubmit={sendEmail}>
                <div className="input">
                  <input type="text" placeholder="Name" name="name" required />
                </div>
                <div className="input">
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    required
                  />
                </div>
                <div className="input">
                  <input
                    type="text"
                    placeholder="subject"
                    name="subject"
                    required
                  />
                </div>
                <div className="input" required>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="message"
                    rows={5}
                  />
                </div>
                <div className="sendmail">
                  <input
                    type="submit"
                    value={isSending ? "Sending..." : "Send Mail"}
                    disabled={isSending}
                  />
                </div>
              </form>
              {message && <div className="feedbackMessage">{message}</div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
