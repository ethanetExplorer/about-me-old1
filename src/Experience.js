import React from "react";
import "./App.css";

function ExperienceItem({ title, description, date, category }) {
  return (
    <div className="experience-item">
      <h3>{title}</h3>
      <p class="experience-date">{date}</p>
      <p class="experience-desc">{description}</p>
    </div>
  );
}

export default function Experience() {
  return (
    <div className="experience">
      <h1>Awards & Certifications</h1>
      <div class="experience-row">
        <ExperienceItem
          title="App Development with Swift (Certified User)"
          description="The App Development with Swift Certified User badge recognizes basic proficiency in the Swift programming language. Students who earn this badge have learned key computing concepts covered in the Develop in Swift Fundamentals course while building a solid foundation in Swift programming."
          date="2022"
        />
        <ExperienceItem
          title="NUS Physics Illustratum"
          description="A competition where participants showcase different physics concepts through various means. Attained a Merit award."
          date="2022"
        />
      </div>
    </div>
  );
}
