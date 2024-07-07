import React, { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./App.css";
import MyService from "./Components/MyService";
import MyWork from "./Components/MyWork";
import Resume from "./Components/Resume";
import Blog from "./Components/Blog";
import ContactMe from "./Components/ContactMe";
import Copy from "./Components/Copy";

function App() {
  const [text] = useTypewriter({
    words: ["Vikash Mehra", "Coder", "Developer", "Programmer", "Gamer"],
    loop: {},
    delaySpeed: 1000,
    deleteSpeed: 200,
    cursorStyle: "|",
    typeSpeed: 250,
  });
  const [theme, settheme] = useState(false);
  const [display, setdisplay] = useState(false);
  function show() {
    setdisplay(!display);
  }
  function changeTheme() {
    settheme(!theme);
  }
  return (
    <>
      <div className={`navbar ${theme ? "" : "Dark"}`}>
        <div className="nav-left">
          <button className="button" onClick={show}>
            <i class="fa-solid fa-bars"></i>
          </button>
          <p id="logo">PORTFOLIO</p>
        </div>
        <div className="nav-right">
          <a href="#Home">HOME</a>
          <a href="#About">ABOUT</a>
          <a href="#MyService">SERVICE</a>
          <a href="#MyWork">WORK</a>
          <a href="#Resume">RESUME</a>
          <a href="#Blog">BLOG</a>
          <a href="#Contact">CONTACT</a>
        </div>
      </div>
      <div
        className={`sidebar-outer ${display ? "show" : ""}`}
        onMouseEnter={show}
      ></div>
      <div
        className={`sidebar ${theme ? "Dark-min" : ""} ${
          display ? "show" : ""
        }`}
      >
        {/* <h5>Vikash Mehra</h5>
          <hr /> */}
        <a href="#Home">HOME</a>
        <a href="#About">ABOUT</a>
        <a href="#MyService">SERVICE</a>
        <a href="#MyWork">WORK</a>
        <a href="#Resume">RESUME</a>
        <a href="#Blog">BLOG</a>
        <a href="#Contact">CONTACT</a>
      </div>

      <div className={` ${theme ? "" : "Dark"} Main`} id="Home">
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
            "As a Computer Science Engineering student at IIT Ropar, I have
            developed strong programming skills in C++, Java, and Python. My
            academic and project experiences focus on software and web
            development, with a keen interest in algorithms and data
            structures.I excel in problem-solving and technical innovation. I
            value collaborative environments with open communication and regular
            meetings. My goal is to specialize in a dynamic tech field,
            leveraging my expertise and passion to drive impactful projects and
            solutions."
          </div>
          <div className="handle">
            <div className="icon">
              <a href="https://leetcode.com/u/VikashMehra01/" target="_blank">
                <img src="leetcode.svg" alt="" className="leetcode" />
              </a>
            </div>
            <div className="icon">
              <a
                href="https://www.geeksforgeeks.org/user/2023csterb/"
                target="_blank"
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
              >
                <img src="linkedin.png" alt="" className="leetcode" />
              </a>
            </div>
            <div className="icon">
              <a
                href="https://www.instagram.com/vikash_mehra23/"
                target="_blank"
              >
                <img src="instagram.png" alt="" className="leetcode" />
              </a>
            </div>
            <div className="icon">
              <a href="https://github.com/Vikash1172" target="_blank">
                <img src="github1.png" alt="" className="leetcode" />
              </a>
            </div>
          </div>
        </div>
        <div className="main-right">
          <div className="img">
            <div className="circle"></div>
            <div className="thanos">
              <img src="/vikashkumar.png" className="thanos" />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`change-theme ${theme ? "Dark" : ""}`}
        onClick={changeTheme}
      >
        <button>
          <i class="fa-solid fa-palette"></i>
        </button>
      </div>
      <MyService theme={theme} />
      <MyWork theme={theme} />
      <Resume theme={theme} />
      <Blog theme={theme} />
      <ContactMe theme={theme} />
      <Copy theme={theme} />
    </>
  );
}

export default App;
