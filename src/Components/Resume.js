import React from "react";
export default function Resume({ theme }) {
  return (
    <>
      <div className={`Resume-outer ${theme ? "" : "Dark"}`}>
        <div className="Resume-heading" id="Resume">
          <span>Resume</span>
          <div className="bottom-bar"></div>
        </div>
        <div className={`Resume `}>
          <div className="Resume-study">
            <div className="Resume-box">
              <div className="Resume-bar">
                <div className="left-bar"></div>
                <div className="Resume-icon">
                  <i class="fa-solid fa-pencil"></i>
                </div>
              </div>
              <div className="Resume-info">
                <div className="time">
                  <p>2020-2021</p>
                </div>
                <div className="resume-heading">
                  <p>Secondary Education</p>
                </div>
                <div className="resume-content">
                  <p>
                    Supportive environment, initial challenges, motivating
                    friends, brilliant teachers, foundation for success.
                  </p>
                </div>
              </div>
            </div>
            <div className="Resume-box">
              <div className="Resume-bar">
                <div className="left-bar"></div>
                <div className="Resume-icon">
                  <i class="fa-solid fa-pencil"></i>
                </div>
              </div>
              <div className="Resume-info">
                <div className="time">
                  <p>2022-2023</p>
                </div>
                <div className="resume-heading">
                  <p>Senior Secondary Eduacation</p>
                </div>
                <div className="resume-content">
                  <p>
                    Intense focus on exams, rigorous academics, Vikalpa's
                    supportive teachers, motivating peers, transformative
                    coaching for success.
                  </p>
                </div>
              </div>
            </div>
            <div className="Resume-box">
              <div className="Resume-bar">
                <div className="Resume-icon">
                  <i class="fa-solid fa-pencil"></i>
                </div>
              </div>
              <div className="Resume-info">
                <div className="time">
                  <p>2023-2027</p>
                </div>
                <div className="resume-heading">
                  <p>Compute Science And Engineering</p>
                </div>
                <div className="resume-content">
                  <p>
                    Engineering at IIT Ropar: Challenging projects, coding
                    proficiency, and supportive academic environment for career
                    preparation.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="Resume-Profession">
            <div className="Resume-box">
              <div className="Resume-bar">
                <div className="left-bar"></div>
                <div className="Resume-icon">
                  <i class="fa-solid fa-briefcase"></i>
                </div>
              </div>
              <div className="Resume-info">
                <div className="time">
                  <p>2027</p>
                </div>
                <div className="resume-heading">
                  <p>Intern At DevAnant</p>
                </div>
                <div className="resume-content">
                  <p>
                    Internship at Devanant: Hands-on experience in software
                    development, contributing to real-world projects with
                    mentorship support.
                  </p>
                </div>
              </div>
            </div>
            <div className="Resume-box">
              <div className="Resume-bar">
                <div className="left-bar"></div>
                <div className="Resume-icon">
                  <i class="fa-solid fa-briefcase"></i>
                </div>
              </div>
              <div className="Resume-info">
                <div className="time">
                  <p>I don't know!</p>
                </div>
                <div className="resume-heading">
                  <p>may be..</p>
                </div>
                <div className="resume-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur ad, molestias
                    pariatur quibusdam quos at eligendi. Optio, ad.
                  </p>
                </div>
              </div>
            </div>
            <div className="Resume-box">
              <div className="Resume-bar">
                {/* <div className="left-bar"></div> */}
                <div className="Resume-icon">
                  <i class="fa-solid fa-briefcase"></i>
                </div>
              </div>
              <div className="Resume-info">
                <div className="time">
                  <p>I don't know !</p>
                </div>
                <div className="resume-heading">
                  <p>I really don't know !</p>
                </div>
                <div className="resume-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur voluptate perferendis
                    est voluptas, dolorum aut tempore cum ut nam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
