import React, { useState } from "react";
import "./App.css";
import MyService from "./Components/MyService";
import MyWork from "./Components/MyWork";
import Resume from "./Components/Resume";
import ContactMe from "./Components/Contact";
import Copy from "./Components/Copy";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import ScrollProgress from "./Components/ScrollProgress";
import ScrollToTop from "./Components/ScrollToTop";
import ParticleBackground from "./Components/fx/ParticleBackground";
import CursorGlow from "./Components/fx/CursorGlow";

function App() {
  const [theme, settheme] = useState(false);
  function changeTheme() {
    settheme(!theme);
  }
  return (
    <>
      <ScrollProgress theme={theme} />
      <ParticleBackground theme={theme} />
      <CursorGlow theme={theme} />
      <div
        className={`change-theme ${theme ? "Dark" : ""}`}
        onClick={changeTheme}
      >
        <button>
          <i className="fa-solid fa-palette"></i>
        </button>
      </div>
      <Navbar theme={theme} />
      <About theme={theme} />
      <MyService theme={theme} />
      <MyWork theme={theme} />
      <Resume theme={theme} />
      <ContactMe theme={theme} />
      <Copy theme={theme} />
      <ScrollToTop theme={theme} />
    </>
  );
}

export default App;
