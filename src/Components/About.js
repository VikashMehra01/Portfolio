import React, { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { LINKS } from "../utils/links";
import { motion } from "framer-motion";
import Reveal from "./motion/Reveal";
export default function About({ theme }) {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [text] = useTypewriter({
    words: ["Vikash Mehra", "System Programmer", "C++ Developer", "Frontend Developer"],
    loop: {},
    delaySpeed: 1000,
    deleteSpeed: 200,
    cursorStyle: "|",
    typeSpeed: 300,
  });
  return (
    <div>
    <div id="Home" className={` ${theme ? "" : "Dark"} Main`}>
      <Reveal className="main-left" delay={0.05}>
        <div id="About">
          <p className="wel">WELCOME!</p>
          <div className="Intro">
            <div className="intro">I am&nbsp;</div>
            <div className="typing">
              <span className="Prof">
                {text}
                <Cursor />
              </span>
            </div>
          </div>

          <div className="about">
            "I'm a Computer Science student at IIT Ropar with a passion for system programming, C++, and building impactful software tools. My work spans from developing RISC-V simulators and data recovery tools to creating intuitive web-based visualizations. I enjoy solving real-world problems through clean architecture, algorithms, and strong fundamentals. Whether it's at the buffer level or in the browser, I aim to craft solutions that are fast, functional, and future-ready."
          </div>

          <div className="cta-row">
            <motion.a
              href="#MyWork"
              className="cta primary"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#Contact"
              className="cta secondary"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Let’s Talk
            </motion.a>
          </div>

          <motion.div
            className="handle"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
            }}
          >
            {[
              { href: LINKS.leetcode, img: "leetcode.svg", alt: "LeetCode" },
              {
                href: LINKS.geeksForGeeks,
                img: "https://img.icons8.com/color/48/GeeksforGeeks.png",
                alt: "GeeksforGeeks",
              },
              { href: LINKS.linkedin, img: "linkedin.png", alt: "LinkedIn" },
              { href: LINKS.instagram, img: "instagram.png", alt: "Instagram" },
              { href: LINKS.github, img: "github1.png", alt: "GitHub" },
            ].map((item) => (
              <motion.div
                key={item.href}
                className="icon"
                variants={{
                  hidden: { opacity: 0, y: 10, scale: 0.95 },
                  show: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3, scale: 1.06, rotate: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href={item.href} target="_blank" rel="noreferrer">
                  <img src={item.img} alt={item.alt} className="leetcode" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Reveal>

      <Reveal className="main-right" delay={0.15}>
        <div className="img hero-img">
          <div className="hero-blob" />
          <div className="circle"></div>
          <motion.div
            className={`thanos-wrapper ${heroLoaded ? "is-loaded" : ""}`}
            animate={{ y: [0, -8, 0], rotate: [0, 0.6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src="/vikash2.png"
              alt="Vikash Mehra"
              className={`thanos-img ${heroLoaded ? "is-loaded" : ""}`}
              width={512}
              height={512}
              decoding="async"
              fetchPriority="high"
              loading="eager"
              onLoad={() => setHeroLoaded(true)}
              onError={() => setHeroLoaded(true)}
              draggable={false}
            />
          </motion.div>
        </div>
      </Reveal>
    </div>
    </div>
  );
}
