import React from "react";
import "./Contact.css";
import { LINKS } from "../utils/links";
import { motion } from "framer-motion";
import Reveal from "./motion/Reveal";

export default function ContactMe() {
  return (
    <section className="contact-wrapper" id="Contact">
      <Reveal>
        <h2 className="contact-header">
          <i className="fa-solid fa-envelope"></i> Contact <span className="highlight">Me</span>
        </h2>
      </Reveal>

      <Reveal delay={0.08}>
        <motion.div
          className="contact-details"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
          }}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <motion.p className="Contact-detail" variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
            <i className="fa-solid fa-envelope"></i> Email:{" "}
            <a href="mailto:vikashmehra.cs@gmail.com">vikashmehra.cs@gmail.com</a>
          </motion.p>
          <motion.p className="Contact-detail" variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
            <i className="fa-brands fa-github"></i> GitHub:{" "}
            <a href={LINKS.github} target="_blank" rel="noreferrer">
              {LINKS.github}
            </a>
          </motion.p>
          <motion.p className="Contact-detail" variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
            <i className="fa-brands fa-linkedin"></i> LinkedIn:{" "}
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
              {LINKS.linkedin}
            </a>
          </motion.p>
          <motion.p className="Contact-detail" variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
            <i className="fa-solid fa-location-dot"></i> Location: IIT Ropar, India (IST)
          </motion.p>
          <motion.p className="collab-note" variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
            ☕ Always open to meaningful collaboration or projects!
          </motion.p>
        </motion.div>
      </Reveal>
    </section>
  );
}
