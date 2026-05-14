import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineFileText } from "react-icons/ai";
import Particle from "../Particle";
import "./Certificates.css";

// Import certificate PDFs
import cert1 from "./134_pdf_certif.pdf";
import cert2 from "./Do180.pdf";
import cert3 from "./Foundations_of_Cybersecurity.pdf";
import cert4 from "./Full-stack_Development_with_Django.pdf";
import cert5 from "./Getting_Started_with_Tableau.pdf";
import cert6 from "./ibm_ml.pdf";
import cert7 from "./Software_Engineering.pdf";

function Certificates() {
  const certificatesList = [
    {
      id: 1,
      title: "Full Stack Development with Django",
      issuer: "Udemy",
      date: "2024",
      description:
        "Comprehensive certification covering Django, REST APIs, PostgreSQL, and modern web development practices for scalable applications.",
      link: cert4,
    },
    {
      id: 2,
      title: "Do180 - Red Hat OpenShift",
      issuer: "Red Hat",
      date: "2024",
      description:
        "Advanced container orchestration and deployment certification with hands-on experience in OpenShift and cloud-native development.",
      link: cert2,
    },
    {
      id: 3,
      title: "Foundations of Cybersecurity",
      issuer: "Google",
      date: "2024",
      description:
        "Foundational cybersecurity principles, security protocols, risk management, and best practices for protecting digital assets.",
      link: cert3,
    },
    {
      id: 4,
      title: "Getting Started with Tableau",
      issuer: "Tableau",
      date: "2024",
      description:
        "Data visualization and business intelligence certification with hands-on experience in creating interactive dashboards and reports.",
      link: cert5,
    },
    {
      id: 5,
      title: "IBM Machine Learning",
      issuer: "IBM",
      date: "2024",
      description:
        "Machine learning fundamentals, algorithms, and implementation using Python and scikit-learn for predictive analytics.",
      link: cert6,
    },
    {
      id: 6,
      title: "Software Engineering",
      issuer: "Coursera",
      date: "2024",
      description:
        "Software development lifecycle, design patterns, testing methodologies, and agile practices for robust application development.",
      link: cert7,
    },
    {
      id: 7,
      title: "Professional Development Certificate",
      issuer: "Certification Authority",
      date: "2024",
      description:
        "Comprehensive professional development and technical skills certification.",
      link: cert1,
    },
  ];

  return (
    <Container fluid className="certificates-section">
      <Particle />

      <Container>
        <h1 className="certificates-heading">
          My <strong className="purple">Certificates</strong>
        </h1>

        <p style={{ color: "white", marginBottom: "30px" }}>
          Professional certifications and courses completed to enhance my skills and expertise.
        </p>

        <Row style={{ justifyContent: "center" }}>
          {certificatesList.map((cert) => (
            <Col md={6} key={cert.id} className="certificate-card">
              <div className="certificate-content">
                <div className="certificate-header">
                  <AiOutlineFileText className="certificate-icon" />
                  <h3>{cert.title}</h3>
                </div>

                <p className="certificate-issuer">
                  <b>Issuer:</b> {cert.issuer}
                </p>

                <p className="certificate-description">{cert.description}</p>

                <div className="certificate-meta">
                  <span className="certificate-date">📅 {cert.date}</span>
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="certificate-link"
                  download
                >
                  View Certificate →
                </a>
              </div>
            </Col>
          ))}
        </Row>

        <div style={{ marginTop: "50px", textAlign: "center", color: "#c770f0" }}>
          <p>
            More certifications coming soon! I'm continuously learning and upskilling.
          </p>
        </div>
      </Container>
    </Container>
  );
}

export default Certificates;
