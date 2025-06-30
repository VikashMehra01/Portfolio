import React from "react";
import useScrollAnimate from "./useScrollAnimation";
import "./MyService.css";
function MyService({ theme }) {
  useScrollAnimate(".MyService-box-Dark", "MyService-Scroll-Animate");
  return (
    <div className={`MyService ${theme ? "" : "Dark"}`} id="MyService">
      <div className="MyService-Top">
        <div className="MyService-top-heading">
          <span id="MyService-One">What</span>&nbsp;
          <span id="MyService-Two">I Build</span>
        </div>
        {/* <div className="MyWork-top-about">
          <p>
            "My Services cater to a range of industries, offering expertise in
            Web Development, Web Design. App Development, Programming,
            Photography, and SEO
          </p>
        </div> */}
        <div className="bottom-bar"></div>
      </div>
      <div className="bottom">
        <div className="MyService-bottom">
          <div
            className={` ${
              theme ? "MyService-box-Light" : "MyService-box-Dark"
            }`}
          >
            <div className="box-icon">
              <i class="fa-solid fa-hard-drive"></i>
            </div>
            <div className="MyService-box-heading">
              <p>💾 System Utilities in C++</p>
            </div>
            <div className="MyService-box-content">
              <p>
                Built tools that interact directly with raw disk data, including a file recovery utility that extracts PNG, MP3, and PDF files using signature-based scanning and buffer-level operations.
              </p>
            </div>
          </div>

          <div
            className={` ${
              theme ? "MyService-box-Light" : "MyService-box-Dark"
            }`}
          >
            <div className="box-icon">
              	<i class="fa-solid fa-gears"></i>
            </div>
            <div className="MyService-box-heading">
              <p>🛠 Assembler & Simulator</p>
            </div>
            <div className="MyService-box-content">
              <p>
               Developed a multi-pass RISC-V assembler and a simulator with support for instruction decoding, memory/register management, and step-by-step visualization using a Qt GUI and React frontend.
              </p>
            </div>
          </div>
          <div
            className={` ${
              theme ? "MyService-box-Light" : "MyService-box-Dark"
            }`}
          >
            <div className="box-icon">
           	<i class="fa-solid fa-chart-line"></i>
            </div>
            <div className="MyService-box-heading">
              <p>Interactive DSA Visualizers</p>
            </div>
            <div className="MyService-box-content">
              <p>
               Created web-based visual tools for algorithms like sorting, N-Queens, and Dijkstra’s using Next.js, TypeScript, and React Flow — aimed at intuitive learning and exploration.
              </p>
            </div>
          </div>
          <div
            className={` ${
              theme ? "MyService-box-Light" : "MyService-box-Dark"
            }`}
          >
            <div className="box-icon">
             	<i class="fa-solid fa-laptop-code"></i>
            </div>
            <div className="MyService-box-heading">
              <p>💻 Frontend for System Tools</p>
            </div>
            <div className="MyService-box-content">
              <p>
               Designed responsive UIs using React.js and TailwindCSS to give structure and interactivity to core system utilities and learning tools.
              </p>
            </div>
          </div>
          <div
            className={` ${
              theme ? "MyService-box-Light" : "MyService-box-Dark"
            }`}
          >
            <div className="box-icon">
             <i class="fa-solid fa-code"></i>
            </div>
            <div className="MyService-box-heading">
              <p>⚙️ Programming at the Core</p>
            </div>
            <div className="MyService-box-content">
              <p>
                Proficient in C++, Python, and RISC-V, with strong foundations in system-level development, competitive programming, and problem-solving through code.
              </p>
            </div>
          </div>
          <div
            className={` ${
              theme ? "MyService-box-Light" : "MyService-box-Dark"
            }`}
          >
            <div className="box-icon">
            	<i class="fa-solid fa-bullseye"></i>
            </div>
            <div className="MyService-box-heading">
              <p>🌱 Tools with Real Purpose</p>
            </div>
            <div className="MyService-box-content">
              <p>
                Every project I build solves a real-world problem — whether recovering lost files, simulating low-level systems, or helping learners see how algorithms move.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyService;
