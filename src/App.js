import React, { useState } from "react";
import "./App.css";
import MyService from "./Components/MyService";
import MyWork from "./Components/MyWork";
import Resume from "./Components/Resume";
import Blog from "./Components/Blog";
import ContactMe from "./Components/ContactMe";
import Copy from "./Components/Copy";
import Navbar from "./Components/Navbar";
import About from "./Components/About";

function App() {
  const [theme, settheme] = useState(false);
  function changeTheme() {
    settheme(!theme);
  }
  return (
    <>
      <div
        className={`change-theme ${theme ? "Dark" : ""}`}
        onClick={changeTheme}
      >
        <button>
          <i class="fa-solid fa-palette"></i>
        </button>
      </div>
      <Navbar theme={theme} />
      <div className="About-outer">
        <About theme={theme} />
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
