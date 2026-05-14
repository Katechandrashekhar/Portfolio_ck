import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineFile } from "react-icons/ai";
import Particle from "../Particle";
import "./Research.css";
import AgriAIDoc from "./AgriAI.docx";

function Research() {
  const researchPapers = [
    {
      id: 1,
      title: "Neuro Blog 📝",
      authors: "Team Neuro Insight",
      description:
        "A deep-dive research paper on AI-driven content recommendations and collaborative blogging features.",
      publishedIn: "Web Intelligence Journal",
      year: 2024,
      link: "https://github.com/Katechandrashekhar/Neuro_Blog",
      linkText: "View Project",
    },
    {
      id: 2,
      title: "PcuExpi Platform 🚀",
      authors: "PcuExpi Research Group",
      description:
        "Research on professional mentorship platforms, experience sharing, and user-driven skill development workflows.",
      publishedIn: "Digital Career Conference",
      year: 2024,
      link: "https://github.com/Katechandrashekhar/PcuExpi-main",
      linkText: "View Project",
    },
    {
      id: 3,
      title: "IPL Dashboard 📊",
      authors: "Sports Analytics Lab",
      description:
        "Analytical study of real-time IPL statistics, performance metrics, and interactive data visualizations.",
      publishedIn: "Sports Data Review",
      year: 2024,
      link: "https://github.com/Katechandrashekhar/Ipl_professional_ui_dashboarddata",
      linkText: "View Project",
    },
    {
      id: 4,
      title: "Pathfinding Visualizer 🗺️",
      authors: "Algorithms UI Team",
      description:
        "Research exploring interactive algorithm visualization for A*, Dijkstra, BFS, DFS, and path optimization strategies.",
      publishedIn: "Computational Graphics Journal",
      year: 2024,
      link: "https://github.com/Katechandrashekhar/Pathfinding-Visualizerck",
      linkText: "View Project",
    },
    {
      id: 5,
      title: "AgriAI Project Documentation",
      authors: "AgriAI Research Team",
      description:
        "Download the AgriAI project documentation as a Word document for the full research and project details.",
      publishedIn: "Project Documentation",
      year: 2024,
      link: AgriAIDoc,
      linkText: "Download DOCX",
    },
  ];

  return (
    <Container fluid className="research-section">
      <Particle />

      <Container>
        <h1 className="research-heading">
          Research <strong className="purple">Papers</strong>
        </h1>

        <p style={{ color: "white", marginBottom: "30px" }}>
          Here are some of my published research papers and academic contributions.
        </p>

        <Row style={{ justifyContent: "center" }}>
          {researchPapers.map((paper) => (
            <Col md={6} key={paper.id} className="research-paper-card">
              <div className="research-card">
                <div className="research-card-header">
                  <AiOutlineFile className="research-icon" />
                  <h3>{paper.title}</h3>
                </div>

                <p className="authors">
                  <b>Authors:</b> {paper.authors}
                </p>

                <p className="description">{paper.description}</p>

                <div className="research-meta">
                  <span className="published-in">
                    📚 {paper.publishedIn}
                  </span>
                  <span className="year">{paper.year}</span>
                </div>

                <a
                  href={paper.link}
                  target="_blank"
                  rel="noreferrer"
                  className="research-link"
                >
                  {paper.linkText ? paper.linkText : "Read Full Paper →"}
                </a>
              </div>
            </Col>
          ))}
        </Row>

        <div style={{ marginTop: "50px", textAlign: "center", color: "#c770f0" }}>
          <p>
            More research papers coming soon! Add your papers with their details.
          </p>
        </div>
      </Container>
    </Container>
  );
}

export default Research;
