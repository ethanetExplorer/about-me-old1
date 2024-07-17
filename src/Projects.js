import { React, StyleSheet } from "react";
import "./App.css";

function ProjectItem({ title, description, date, link, github, status }) {
  return (
    <div class="project-item">
      <div class="project-header">
        <h3>{title}</h3>
        <div class="project-meta">
          <p>{status}</p>
          <p class="project-date">{date}</p>
        </div>
      </div>
      <p class="project-desc">{description}</p>
      <div class="spacer"></div>
      <div class="links">
        <a href={github}>
          <img src="icons/githubLight.svg" />
        </a>
        <a href={link}>
          {link ? (
            <img src="icons/download.svg" class="download-icon" />
          ) : (
            <blank></blank>
          )}
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div class="projects-container-container">
      <h1>Projects</h1>
      <p class="project-section-desc">
        I've worked on a few software projects. Here are some that I'm proud of.
      </p>
      <div class="projects-list">
        <ProjectItem
          title="Time tracker"
          description="Time tracking app for iOS, iPadOS, macOS. Allows users to set multiple stopwatches and have consecutive timer sets, perfect for time keeping and group discussions."
          status="In progress"
          date="2024"
          github="https://github.com/ethanetExplorer/Timetracker"
        />
        <ProjectItem
          title="Money Rush"
          description="Loan tracker and reminder app for iPhone developed with a team as part of Apple Swift Accelerator Programme. Allows users to keep track of loans to friends."
          date="2022"
          link="https://apps.apple.com/us/app/money-rush/id1608530797"
          github="https://github.com/ethanetExplorer/Timetracker"
        />

        <a href="https://github.com/ethanetExplorer/" class="more-projects">
          <div class="project-more">
            <p class="more-projects-title">More projects</p>

            <img src="icons/githubLight.svg" class="more-projects-icon" />
            <p class="more-projects-desc">Check out more projects.</p>
          </div>
        </a>
      </div>
    </div>
  );
}
