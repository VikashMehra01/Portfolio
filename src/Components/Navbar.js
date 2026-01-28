import React, { useState } from "react";

export default function Navbar({ theme }) {
  const [display, setdisplay] = useState(false);
  function show() {
    if(display==="background"){
      setdisplay("");
    }else{
      setdisplay("background");
    }
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
            <i className="fa-solid fa-bars"></i>
          </button>
          <p id="logo">Vikash Mehra</p>
        </div>
        <div className="nav-right">
          <a href="#Home">Home</a>
          <a href="#MyService">What I Build</a>
          <a href="#MyWork">Projects</a>
          <a href="#Experience">Experience & Skills</a>
          <a href="#Contact">ContactMe</a>
        </div>
      </div>
      <div
        className={`sidebar-outer ${display ? "background" : ""}`}
        onMouseEnter={show}
      ></div>
      <div
        className={`sidebar ${theme ? "Dark-min" : ""} ${
          display ? "showIn" : "showOut"
        }`}
      >
          <a href="#Home">Home</a>
          <a href="#MyService">What I Build</a>
          <a href="#MyWork">Projects</a>
          <a href="#Experience">Experience & Skills</a>
          <a href="#Contact">ContactMe</a>
      </div>
    </>
  );
}
