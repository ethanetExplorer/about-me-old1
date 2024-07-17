import React from "react";
import ReactDOM from "react-dom";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import Contact from "./Contact";

ReactDOM.render(<Skills />, document.getElementById("skills-container"));
ReactDOM.render(<Projects />, document.getElementById("projects-container"));
ReactDOM.render(
  <Experience />,
  document.getElementById("experience-container")
);
ReactDOM.render(<Contact />, document.getElementById("contact-container"));
