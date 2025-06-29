import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
export default function About({ theme }) {
  const [text] = useTypewriter({
    words: ["Vikash Mehra", "System Programmer", "C++ Developer", "Frontend Developer"],
    loop: {},
    delaySpeed: 1000,
    deleteSpeed: 200,
    cursorStyle: "|",
    typeSpeed: 300,
  });
  return (
    <div >
    <div id="Home">
      <p>Extra Just Started</p>
    </div>
    <div className={` ${theme ? "" : "Dark"} Main`} >
      <div className="main-left" id="About">
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
        <div className="handle">
          <div className="icon">
            <a
              href="https://leetcode.com/u/VikashMehra01/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="leetcode.svg" alt="" className="leetcode" />
            </a>
          </div>
          <div className="icon">
            <a
              href="https://www.geeksforgeeks.org/user/2023csterb/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.icons8.com/color/48/GeeksforGeeks.png"
                alt="GeeksforGeeks"
                className="leetcode"
              />
            </a>
          </div>
          <div className="icon">
            <a
              href="https://www.linkedin.com/in/vikash-kumar-173691287/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="linkedin.png" alt="" className="leetcode" />
            </a>
          </div>
          <div className="icon">
            <a
              href="https://www.instagram.com/vikash_mehra23/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="instagram.png" alt="" className="leetcode" />
            </a>
          </div>
          <div className="icon">
            <a
              href="https://github.com/Vikash1172"
              target="_blank"
              rel="noreferrer"
            >
              <img src="github1.png" alt="" className="leetcode" />
            </a>
          </div>
        </div>
      </div>
      <div className="main-right">
        <div className="img">
          <div className="circle"></div>
          <div className="thanos">
            <img src="/vikashkumar.png" alt="" className="thanos" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
