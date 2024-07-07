import React from "react";
import { useState } from "react";
import { Wimg } from "../data/Workimg";

export default function MyWork({ theme }) {
  //for nav
  const [active, setactive] = useState([
    "Design",
    "Photography",
    "Development",
  ]);
  // //filtering
  // const [Design, setDesign] = useState(true);
  // const [Development, setDevelopment] = useState(true);
  // const [Photography, setPhotography] = useState(true);
  function All() {
    setactive(["Design", "Photography", "Development"]);
  }
  const opt = ["Design", "Photography", "Development"];
  function Designf() {
    setactive(["Design"]);
  }
  function Developmentf() {
    setactive(["Development"]);
  }
  function Photographyf() {
    setactive(["Photography"]);
  }
  //load more and hide
  const [more, setmore] = useState(false);
  function showmore() {
    setmore((more) => !more);
  }

  return (
    <div className={`MyWork ${theme ? "" : "Dark"}`} id="MyWork">
      <div className="MyWork-top">
        <div className="MyWork-top-heading">
          <span className="MyWork-first">My</span>&nbsp;
          <span className="MyWork-second">Work</span>
        </div>
        <div className="MyWork-top-about">
          <p>
            "My work is a fusion of creativity and technical expertise to craft
            captivating digital experiences."
          </p>
        </div>
        <div className="bottom-bar"></div>
      </div>
      <div className="MyWork-bottom">
        <div className="MyWork-bottom-nav">
          <button
            className={`MyWork-nav-button ${
              active.length == 3 ? "active" : ""
            }`}
            onClick={All}
          >
            All
          </button>
          <button
            className={`MyWork-nav-button ${
              active == "Design" ? "active" : ""
            }`}
            onClick={Designf}
          >
            {" "}
            Design
          </button>
          <button
            className={`MyWork-nav-button ${
              active == "Development" ? "active" : ""
            }`}
            onClick={Developmentf}
          >
            Development
          </button>
          <button
            className={`MyWork-nav-button ${
              active == "Photography" ? "active" : ""
            }`}
            onClick={Photographyf}
          >
            Photography
          </button>
        </div>
        {/* <div className="MyWork-bottom-Work">
          {Development && (
            <>
              <div className="Work level-1">
                <img src="lang.jpg" />
                <div className="Work-info">
                  <h5>Development</h5>
                  <a href="https://www.youtube.com" target="_blank">
                    Take a Look <i class="fa-solid fa-circle-right"></i>
                  </a>
                </div>
              </div>
              <div className="Work level-1">
                <img src="data.jpg" />
                <div className="Work-info">
                  <h5>Development</h5>
                  <a href="https://www.youtube.com" target="_blank">
                    Take a Look <i class="fa-solid fa-circle-right"></i>
                  </a>
                </div>
              </div>
              <div className="Work level-1">
                <img src="Programming.jpg" alt="" />
                <div className="Work-info">
                  <h5>Development</h5>
                  <a href="https://www.youtube.com" target="_blank">
                    Take a Look <i class="fa-solid fa-circle-right"></i>
                  </a>
                </div>
              </div>
            </>
          )}
          {Design && (
            <>
              <div className="Work level-1">
                <img src="HTML.jpg" />
                <div className="Work-info">
                  <h5>Design</h5>
                  <a href="https://www.youtube.com" target="_blank">
                    Take a Look <i class="fa-solid fa-circle-right"></i>
                  </a>
                </div>
              </div>
              <div className="Work level-1">
                <img src="Webdesign.jpg" alt="" />
                <div className="Work-info">
                  <h5>Design</h5>
                  <a href="https://www.youtube.com" target="_blank">
                    Take a Look <i class="fa-solid fa-circle-right"></i>
                  </a>
                </div>
              </div>
              <div className="Work level-1">
                <img src="UX.jpg" alt="" />
                <div className="Work-info">
                  <h5>Design</h5>
                  <a href="https://www.youtube.com" target="_blank">
                    Take a Look <i class="fa-solid fa-circle-right"></i>
                  </a>
                </div>
              </div>
            </>
          )}
          {Photography && (
            <>
              <div className="Work level-1">
                <img src="Photography.jpg" alt="" />
                <div className="Work-info">
                  <h5>Photography</h5>
                  <a href="https://www.youtube.com" target="_blank">
                    Take a Look <i class="fa-solid fa-circle-right"></i>
                  </a>
                </div>
              </div>
              <div className="Work level-1">
                <img src="photo.jpg" alt="" />
                <div className="Work-info">
                  <h5>Photography</h5>
                  <a href="https://www.youtube.com" target="_blank">
                    Take a Look <i class="fa-solid fa-circle-right"></i>
                  </a>
                </div>
              </div>
            </>
          )}

          {more && (
            <>
              {Design && (
                <>
                  <div className="Work level-2">
                    <img src="Website.jpg" alt="" />
                    <div className="Work-info">
                      <h5>Design</h5>
                      <a href="https://www.youtube.com" target="_blank">
                        Take a Look <i class="fa-solid fa-circle-right"></i>
                      </a>
                    </div>
                  </div>
                </>
              )}
              {Photography && (
                <>
                  <div className="Work level-1">
                    <img src="photo (2).jpg" alt="" />
                    <div className="Work-info">
                      <h5>Photography</h5>
                      <a href="https://www.youtube.com" target="_blank">
                        Take a Look <i class="fa-solid fa-circle-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="Work level-1">
                    <img src="photo (3).jpg" alt="" />
                    <div className="Work-info">
                      <h5>Photography</h5>
                      <a href="https://www.youtube.com" target="_blank">
                        Take a Look <i class="fa-solid fa-circle-right"></i>
                      </a>
                    </div>
                  </div>
                </>
              )}
              {Development && (
                <>
                  <div className="Work level-2">
                    <img src="App-Development.jpg" alt="" />
                    <div className="Work-info">
                      <h5>Development</h5>
                      <a href="https://www.youtube.com" target="_blank">
                        Take a Look <i class="fa-solid fa-circle-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="Work level-2">
                    <img src="data (2).jpg" alt="" />
                    <div className="Work-info">
                      <h5>Development</h5>
                      <a href="https://www.youtube.com" target="_blank">
                        Take a Look <i class="fa-solid fa-circle-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="Work level-2">
                    <img src="game.jpg" alt="" />
                    <div className="Work-info">
                      <h5>Development</h5>
                      <a href="https://www.youtube.com" target="_blank">
                        Take a Look <i class="fa-solid fa-circle-right"></i>
                      </a>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div> */}
        <div className="MyWork-bottom-Work">
          {Wimg.filter((v) => active.includes(v.cat))
            .slice(0, more ? Wimg.length : 6)
            .map((v, i) => {
              return <Work v={v} key={i} />;
            })}
        </div>
        <div className="button-more-less">
          {!more && (
            <>
              <div className="LoadMore" on onClick={showmore}>
                <button>
                  <i class="fa-solid fa-caret-down"></i>
                </button>
              </div>
            </>
          )}
          {more && (
            <>
              <div className="LoadMore" on onClick={showmore}>
                <button>
                  <a href="#MyWork">
                    <i class="fa-solid fa-caret-up"></i>
                  </a>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
function Work({ v }) {
  return (
    <div className="Work">
      <img src={v.img} />
      <div className="Work-info">
        <h5>{v.cat}</h5>
        <a href="https://www.youtube.com" target="_blank">
          Take a Look <i class="fa-solid fa-circle-right"></i>
        </a>
      </div>
    </div>
  );
}
