import React, { useState } from "react";

export default function Navbar({ theme }) {
  const [display, setdisplay] = useState(false);
  function show() {
    setdisplay(!display);
  }
  return (
    <>
      <div className={`navbar ${theme ? "" : "Dark"}`}>
        <div className="nav-left">
          <button
            className={`button ${theme ? "" : "Dark"}`}
            style={{ background: "transparent" }}
            onClick={show}
          >
            <i class="fa-solid fa-bars"></i>
          </button>
          <p id="logo">Vikash Mehra</p>
        </div>
        <div className="nav-right">
          <a href="#Home">Home</a>
          {/* <a href="#About">ABOUT</a> */}
          <a href="#MyService">What I Build</a>
          <a href="#MyWork">Projects</a>
          <a href="#Experience">Experience & Skills</a>
          {/* <a href="#Blog">BLOG</a> */}
          <a href="#Contact">ContactMe</a>
        </div>
      </div>
      <div
        className={`sidebar-outer ${display ? "showOut" : ""}`}
        onMouseEnter={show}
      ></div>
      <div
        className={`sidebar ${theme ? "Dark-min" : ""} ${
          display ? "showIn" : ""
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
    </>
  );
}
