
import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-container">

        <div className="about-text">
          <p className="section-tag">GET TO KNOW ME</p>

          <h2>About Me</h2>

          <p>
            I'm a Computer Science Engineering student
            passionate about software development,
            artificial intelligence and emerging technologies.
          </p>

          <p>
            I enjoy learning programming, solving problems
            and building real-world projects that combine
            creativity with technology.
          </p>

          <p>
            My goal is to become a skilled software engineer
            and contribute to innovative technology solutions.
          </p>

        </div>

        <div className="about-cards">

          <div className="about-card">
            <h3>Education</h3>
            <p>B.Tech Computer Science Engineering</p>
            <span>Undergraduate Student</span>
          </div>

          <div className="about-card">
            <h3>Interests</h3>
            <p>AI / ML · Software Development</p>
            <span>Python · Robotics · Web Development</span>
          </div>

          <div className="about-card">
            <h3>Achievement</h3>
            <p>University Topper Award</p>
            <span>Academic Achievement</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
