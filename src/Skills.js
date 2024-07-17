import React from "react";

export default function Skills() {
  class SkillItem {
    constructor(label, icon, link) {
      this.label = label;
      this.icon = icon;
      this.link = link;
    }
  }

  const programmingSkills = [
    new SkillItem("Swift", "icons/swift.svg"),
    new SkillItem("Python", "icons/py.svg"),
    new SkillItem("HTML", "icons/html5.svg"),
    new SkillItem("CSS", "icons/css3.svg"),
    new SkillItem("JavaScript", "icons/js.svg"),
    new SkillItem("React", "icons/react.svg"),
  ];

  return (
    <div className="skills-container" style={{ display: "flex" }}>
      {programmingSkills.map((skill) => (
        <div className="skill-item" key={skill.label}>
          <img
            src={skill.icon}
            alt={skill.label}
            style={{
              width: "28px",
              padding: "6px",
              margin: "4px",
              borderRadius: "8px",
              backgroundColor: "#f1ede820",
            }}
          />
        </div>
      ))}
    </div>
  );
}
