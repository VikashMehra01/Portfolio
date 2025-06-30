import React from "react";
import "./ExperienceSkills.css";

export default function ExperienceSkills({ theme }) {
  return (
    <section className={`exp-skill-wrapper ${theme ? "" : "Dark"}`} id="Experience">
      <div className="section-header">
        <span className="MyWork-first">Experience</span>&nbsp;
        <span className="MyWork-second">& Skills</span>
      </div>

      {/* EXPERIENCE */}
      <div className="subsection">
        <h2 className="sub-title">💼 Experience</h2>
        <div className="exp-block">
          <h3>Intern – DevAnant (2025)</h3>
          <p>
            Worked as a frontend intern using <strong>React.js</strong> and <strong>TailwindCSS</strong>.  
            Built components, collaborated on internal tools, and optimized UI flow.
          </p>
        </div>

        <div className="exp-block">
          <h3>Independent Developer</h3>
          <p>
            Built several tools including:
            <ul>
              <li><strong>Data Recovery Utility</strong> – Raw disk scan and file extraction using Qt and C++</li>
              <li><strong>RISC-V Assembler & Simulator</strong> – Instruction decoder and runtime visualizer</li>
              <li><strong>C to Promela Translator</strong> – Code converter using Clang AST and Python</li>
            </ul>
          </p>
        </div>
      </div>

      {/* SKILLS */}
      <div className="subsection">
        <h2 className="sub-title">🛠 Skills</h2>
        <div className="skills-grid">
          <div>
            <h4>Languages</h4>
            <p>C++, Python, Scheme, Prolog, JavaScript, HTML, CSS, RISC-V Assembly</p>
          </div>
          <div>
            <h4>Frameworks & Tools</h4>
            <p>React.js, Qt, Next.js, TailwindCSS, Git</p>
          </div>
          <div>
            <h4>Other Tech</h4>
            <p>Clang AST, Promela/SPIN, GCC, Serial I/O</p>
          </div>
          <div>
            <h4>Environments</h4>
            <p>Linux (Mint/Ubuntu), VS Code, Windows</p>
          </div>
        </div>
      </div>

      {/* POSITIONS OF RESPONSIBILITY */}
      <div className="subsection">
        <h2 className="sub-title">🎯 P.O.Rs & Achievements</h2>
        <ul className="por-list">
          <li> Coordinator @ BOWA, IIT Ropar (Aug 2024 – May 2025)  
        Organized wellness events and student outreach initiatives.
        </li>
        <li>Specialist on Codeforces (Max Rating:1416)</li>
          <li> 3★ Rated Coder on CodeChef (Max Rating:1636)</li>
        </ul>

      </div>
    </section>
  );
}
