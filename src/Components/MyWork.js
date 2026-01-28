import React from "react";
import useScrollAnimate from "./useScrollAnimation";
import "./TimelineProjects.css";
import SpotlightCard from "./fx/SpotlightCard";
import { PROJECTS } from "../data/projects";

export default function TimelineProjects({ theme }) {
useScrollAnimate(".timeline-item", "animate-timeline");

  return (
    <section className={`timeline-wrapper ${theme ? "" : "Dark"}`} id="MyWork">
      <div className="timeline-header">
        <span id="MyService-One">My</span>&nbsp;
        <span id="MyService-Two">Projects</span>
      </div>
      <div className="timeline">
        {PROJECTS.map((proj, index) => (
          <div className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`} key={proj.title}>
            <SpotlightCard className="content content-spotlight">
              <span className="icon">{proj.icon}</span>
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="stack">Tech Stack: {proj.stack}</div>
              <a href={proj.link} target="_blank" rel="noreferrer">
                🔗 GitHub
              </a>
            </SpotlightCard>
          </div>
        ))}
        <div className="timeline-line"></div>
      </div>
    </section>
  );
}
