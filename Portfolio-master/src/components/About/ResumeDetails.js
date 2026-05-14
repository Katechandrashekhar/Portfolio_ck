import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";

function ResumeDetails() {
  return (
    <Container style={{ paddingTop: "30px", paddingBottom: "50px" }}>
      {/* Contact Information */}
      <Row style={{ marginBottom: "40px" }}>
        <Col md={12}>
          <h3 style={{ color: "#cd5ff8", marginBottom: "20px" }}>
            <strong>Contact Information</strong>
          </h3>
          <ul style={{ listStyle: "none", paddingLeft: "0" }}>
            <li style={{ color: "white", marginBottom: "8px" }}>
              <ImPointRight style={{ marginRight: "10px" }} />
              <b>Phone:</b> +91-9309240647
            </li>
            <li style={{ color: "white", marginBottom: "8px" }}>
              <ImPointRight style={{ marginRight: "10px" }} />
              <b>Email:</b> chandrashekhar.kate24@pcu.edu.in
            </li>
            <li style={{ color: "white", marginBottom: "8px" }}>
              <ImPointRight style={{ marginRight: "10px" }} />
              <b>Location:</b> Pune, Maharashtra, India
            </li>
          </ul>
        </Col>
      </Row>

      {/* Academics */}
      <Row style={{ marginBottom: "40px" }}>
        <Col md={12}>
          <h3 style={{ color: "#cd5ff8", marginBottom: "20px" }}>
            <strong>Academics</strong>
          </h3>
          <div style={{ marginBottom: "25px" }}>
            <p style={{ color: "white", marginBottom: "5px" }}>
              <b>B. Tech in Computer Engineering</b> | Pimpri Chinchwad University
            </p>
            <p style={{ color: "#ddd", marginBottom: "5px", fontSize: "0.95rem" }}>
              2024 - 2027 | <span style={{ color: "#cd5ff8" }}>CGPA: 9.0</span>
            </p>
          </div>
          <div>
            <p style={{ color: "white", marginBottom: "5px" }}>
              <b>Diploma in Computer Engineering</b> | Government Polytechnic, Pune
            </p>
            <p style={{ color: "#ddd", marginBottom: "5px", fontSize: "0.95rem" }}>
              2021 - 2024 | <span style={{ color: "#cd5ff8" }}>Percentage: 82.47%</span>
            </p>
          </div>
        </Col>
      </Row>

      {/* Awards and Honors */}
      <Row style={{ marginBottom: "40px" }}>
        <Col md={12}>
          <h3 style={{ color: "#cd5ff8", marginBottom: "20px" }}>
            <strong>Awards & Honors</strong>
          </h3>
          <ul style={{ paddingLeft: "20px" }}>
            <li style={{ color: "white", marginBottom: "10px" }}>
              <b>2nd Runner-up, IOT 2.0</b> – 100+ participants (March 2025)
            </li>
            <li style={{ color: "white" }}>
              <b>2nd Runner-up, State-Level Quiz & Poster Competition</b> – 20+ colleges
            </li>
          </ul>
        </Col>
      </Row>

      {/* Technical Skills */}
      <Row style={{ marginBottom: "40px" }}>
        <Col md={12}>
          <h3 style={{ color: "#cd5ff8", marginBottom: "20px" }}>
            <strong>Technical Skills</strong>
          </h3>
          <ul style={{ paddingLeft: "20px" }}>
            <li style={{ color: "white", marginBottom: "8px" }}>
              <b>Programming Languages:</b> Java, SQL, JavaScript, C++
            </li>
            <li style={{ color: "white", marginBottom: "8px" }}>
              <b>Tools & Technologies:</b> Next.js, MERN Stack, Git & GitHub
            </li>
            <li style={{ color: "white" }}>
              <b>Core Engineering:</b> DBMS, OOP, OS, CN, Data Structure and Algorithms
            </li>
          </ul>
        </Col>
      </Row>

      {/* Professional Experience */}
      <Row style={{ marginBottom: "40px" }}>
        <Col md={12}>
          <h3 style={{ color: "#cd5ff8", marginBottom: "20px" }}>
            <strong>Professional Experience</strong>
          </h3>
          <div>
            <p style={{ color: "white", marginBottom: "5px" }}>
              <b>SDE Intern at CODEC</b>
            </p>
            <p style={{ color: "#ddd", marginBottom: "15px", fontSize: "0.95rem" }}>
              Oct. 2024 – Nov. 2025
            </p>
            <ul style={{ paddingLeft: "20px", marginBottom: "15px" }}>
              <li style={{ color: "#ddd", marginBottom: "8px" }}>
                Built a certificate authenticator system with admin access control and MongoDB integration, streamlining verification for 500+ users.
              </li>
              <li style={{ color: "#ddd", marginBottom: "8px" }}>
                Developed secure forgot password functionality, improving user account recovery and reducing support requests by 30%.
              </li>
              <li style={{ color: "#ddd" }}>
                Integrated email automation to notify companies about recommended candidates, increasing outreach efficiency.
              </li>
            </ul>
          </div>
        </Col>
      </Row>

      {/* Positions of Responsibility */}
      <Row style={{ marginBottom: "40px" }}>
        <Col md={12}>
          <h3 style={{ color: "#cd5ff8", marginBottom: "20px" }}>
            <strong>Positions of Responsibility</strong>
          </h3>
          <ul style={{ paddingLeft: "20px" }}>
            <li style={{ color: "white", marginBottom: "10px" }}>
              <b>Event Coordinator – IOT CLUB</b> (Aug. 2025 – Present)
            </li>
            <li style={{ color: "white", marginBottom: "10px" }}>
              <b>Creative Coordinator – IDEATHON</b> (Dec. 2024 – July 2025)
            </li>
            <li style={{ color: "white" }}>
              <b>Vice President – AWS CLUB PCU</b> (Feb. 2026 – March 2027)
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default ResumeDetails;
