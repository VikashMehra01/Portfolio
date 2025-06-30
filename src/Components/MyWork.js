import React from "react";
import useScrollAnimate from "./useScrollAnimation";
import "./TimelineProjects.css";

const projects = [
  {
    title: "RISC-V Assembler & Simulator",
    description:
      "A multi-pass assembler and simulator for RISC-V, supporting instruction decoding, memory/register simulation, and GUI integration with Qt and React.",
    stack: "C++, Qt, React",
    link: "https://github.com/VikashMehra01/CS204",
    icon: "🛠️",
  },
  {
    title: "Data Recovery Utility",
    description:
      "Signature-based tool that scans raw disk sectors to recover deleted PNG, MP3, PDF, and ZIP files using buffer-level I/O and a Qt-based GUI.",
    stack: "C++, Qt",
    link: "https://github.com/VikashMehra01/DataRecovery",
    icon: "💾",
  },
  {
    title: "DSA Visualizer",
    description:
      "Interactive algorithm visualizations (sorting, backtracking, graphs) built for intuitive learning with Next.js and React Flow.",
    stack: "Next.js, React Flow, TypeScript",
    link: "https://github.com/VikashMehra01/DSA-Visualizer",
    icon: "📊",
  },
  {
    title: "Startup Website",
    description:
      "Built a clean, responsive landing page for a startup during internship using React.js and TailwindCSS.",
    stack: "React.js, TailwindCSS",
    link: "https://github.com/VikashMehra01/Startup-Site",
    icon: "🌐",
  },{
  title: "C to Promela Translator",
  description:
    "A tool that converts a restricted subset of C (functions, loops, conditionals) into Promela code for model checking. Built using Python with Clang AST integration and CFG support.",
  stack: "Python, Clang AST, Promela, SPIN",
  link: "https://github.com/VikashMehra01/C-to-Promela",
  icon: "🔁",
},{
  title: "IoT Weather Station",
  description:
    "A DIY weather station built using ESP32 and sensors to capture temperature and humidity, with serial output for real-time monitoring. Created for hands-on exploration and embedded systems learning.",
  stack: "ESP32, C++, Serial Communication",
  link: "https://github.com/VikashMehra01/Tinkering",
  icon: "🌦️",
},
];

export default function TimelineProjects({ theme }) {
useScrollAnimate(".timeline-item", "animate-timeline");

  return (
    <section className={`timeline-wrapper ${theme ? "" : "Dark"}`} id="MyWork">
      <div className="timeline-header">
        <span id="MyService-One">My</span>&nbsp;
        <span id="MyService-Two">Projects</span>
      </div>
      <div className="timeline">
        {projects.map((proj, index) => (
          <div className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`} key={proj.title}>
            <div className="content">
              <span className="icon">{proj.icon}</span>
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="stack">Tech Stack: {proj.stack}</div>
              <a href={proj.link} target="_blank" rel="noreferrer">
                🔗 GitHub
              </a>
            </div>
          </div>
        ))}
        <div className="timeline-line"></div>
      </div>
    </section>
  );
}
