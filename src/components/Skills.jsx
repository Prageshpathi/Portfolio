
import {
  FaPython,
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";

import {
  SiC,
  SiCplusplus,
  SiDjango,
  SiMysql,
  SiPostman
} from "react-icons/si";

import "./Skills.css";

const skillGroups = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "C", icon: <SiC /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "Java", icon: <FaJava /> }
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "React", icon: <FaReact /> }
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Django", icon: <SiDjango /> }
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Postman", icon: <SiPostman /> }
    ]
  }
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        <div className="skills-heading">
          <p className="skills-subtitle">WHAT I WORK WITH</p>
          <h2>My <span>Skills</span></h2>
          <p>
            Technologies and tools I use while learning,
            building projects, and exploring software development.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <div className="skill-card" key={index}>
              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <span className="skill-icon">
                      {skill.icon}
                    </span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
