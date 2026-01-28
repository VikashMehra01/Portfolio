import React from "react";
import "./Contact.css";
import { LINKS } from "../utils/links";

export default function ContactMe() {
  return (
    <section className="contact-wrapper" id="Contact">
      <h2 className="contact-header">
        <i className="fa-solid fa-envelope"></i> Contact <span className="highlight">Me</span>
      </h2>

      <div className="contact-details">
        <p className="Contact-detail">
          <i className="fa-solid fa-envelope"></i> Email:{" "}
          <a href="mailto:vikashmehra.cs@gmail.com">vikashmehra.cs@gmail.com</a>
        </p>
        <p className="Contact-detail">
          <i className="fa-brands fa-github"></i> GitHub:{" "}
          <a href={LINKS.github} target="_blank" rel="noreferrer">
            {LINKS.github}
          </a>
        </p>
        <p className="Contact-detail">
          <i className="fa-brands fa-linkedin"></i> LinkedIn:{" "}
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
            {LINKS.linkedin}
          </a>
        </p>
        <p className="Contact-detail">
          <i className="fa-solid fa-location-dot"></i> Location: IIT Ropar, India (IST)
        </p>
        <p className="collab-note">☕ Always open to meaningful collaboration or projects!</p>
      </div>
    </section>
  );
}
