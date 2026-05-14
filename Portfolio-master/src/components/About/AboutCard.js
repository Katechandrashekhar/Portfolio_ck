import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Chandrashekhar Gajanan Kate</span>{" "}
            from <span className="purple">Pune, Maharashtra, India</span>.
            <br />
            I'm a passionate full-stack developer and tech enthusiast with expertise in building scalable web applications, AI-powered solutions, and innovative digital products.
            <br />
            <b>Education:</b> B.Tech in Computer Engineering at <span className="purple">PCU (CGPA: 9.0)</span>, Diploma from <span className="purple">Government Polytechnic, Pune (82.47%)</span>.
            <br />
            <b>Experience:</b> SDE Intern at CODEC | Building AI-powered solutions | MERN Stack, Next.js, MongoDB expertise.
            <br />
            <br />
            My Interests:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building AI-Powered Solutions 🤖
            </li>
            <li className="about-activity">
              <ImPointRight /> Tech Blogging & Documentation ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Event Coordination & Community Building 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Chandrashekhar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
