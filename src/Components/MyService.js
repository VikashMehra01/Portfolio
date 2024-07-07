import React, { StrictMode } from "react";
function MyService({ theme }) {
  return (
    <div className={`MyService ${theme ? "" : "Dark"}`} id="MyService">
      <div className="MyService-Top">
        <div className="MyService-top-heading">
          <span id="MyService-One">My</span>&nbsp;
          <span id="MyService-Two">Service</span>
        </div>
        <div className="MyWork-top-about">
          <p>
            "My Services cater to a range of industries, offering expertise in
            Web Development, Photography, Web Design. App Development, Video
            Editing, and SEO
          </p>
        </div>
        <div className="bottom-bar"></div>
      </div>
      <div className="bottom">
        <div className="MyService-bottom">
          <div className="MyService-box">
            <div className="box-icon">
              <i class="fa-brands fa-github"></i>
            </div>
            <div className="MyService-box-heading">
              <p>Web Developer</p>
            </div>
            <div className="MyService-box-content">
              <p>
                Crafting interactive and dynamic websites using cutting-edge
                technologies and frameworks to bring ideas to life
              </p>
            </div>
          </div>
          <div className="MyService-box">
            <div className="box-icon">
              <i class="fa-solid fa-camera"></i>
            </div>
            <div className="MyService-box-heading">
              <p>Photography</p>
            </div>
            <div className="MyService-box-content">
              <p>
                Capturing moments and stories through the lens transforming
                ordinary sciones into captivating visu namatives
              </p>
            </div>
          </div>
          <div className="MyService-box">
            <div className="box-icon">
              <i class="fa-solid fa-code"></i>
            </div>
            <div className="MyService-box-heading">
              <p>Coder</p>
            </div>
            <div className="MyService-box-content">
              <p>
                Transforming ideas into functional solutions, coding is the art
                of instructing computers to perform tasks, creating innovative
                and efficient software.
              </p>
            </div>
          </div>
          <div className="MyService-box">
            <div className="box-icon">
              <i class="fa-solid fa-lightbulb"></i>
            </div>
            <div className="MyService-box-heading">
              <p>Problem-Solver</p>
            </div>
            <div className="MyService-box-content">
              <p>
                Problem solving is the process of identifying challenges,
                analyzing situations, and devising effective solutions,
                transforming obstacles into opportunities for growth and
                innovation.
              </p>
            </div>
          </div>
          <div className="MyService-box">
            <div className="box-icon">
              <i class="fa-solid fa-headset"></i>
            </div>
            <div className="MyService-box-heading">
              <p>Gamer</p>
            </div>
            <div className="MyService-box-content">
              <p>
                Immersed in virtual worlds, gamers engage in strategic thinking
                and quick reflexes, transforming challenges into triumphs and
                storytelling into interactive experiences.
              </p>
            </div>
          </div>
          <div className="MyService-box">
            <div className="box-icon">
              <i class="fa-solid fa-lines-leaning"></i>
            </div>
            <div className="MyService-box-heading">
              <p>Learner</p>
            </div>
            <div className="MyService-box-content">
              <p>
                Embracing knowledge and growth, exploring new subjects and
                skills to expand horizons and enrich personal development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyService;
