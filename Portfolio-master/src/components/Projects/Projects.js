import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// �️ Project Images
const neuro_blog = "https://images.unsplash.com/photo-1499750310107-5fef28a66643";
const pcuexpi = "https://images.unsplash.com/photo-1551288049-bebda4e38f71";
const ipl_dashboard = "https://images.unsplash.com/photo-1593341646782-e0b495cff86d";
const pathfinder = require("../../Assets/project_demo.gif");
const learnedudd = "https://images.unsplash.com/photo-1584697964358-3e14ca57658b";
const guideMe = "https://images.unsplash.com/photo-1524661135-423995f22d0b";
const blockchain = "https://images.unsplash.com/photo-1639762681485-074b7f938ba0";
const stockPrice = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are some real-world projects I have developed using modern technologies.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* 🔥 Project 1 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={neuro_blog}
              isBlog={false}
              title="AgriAI: Farmer to Market 🌾"
              description="AI-powered marketplace connecting farmers directly to customers, eliminating middlemen. Guided 50+ non-tech-savvy users through intelligent onboarding with step-by-step assistant."
              tech="Next.js, MongoDB, NLP, AI"
              ghLink="https://github.com/Katechandrashekhar/AgriAI"
            />
          </Col>

          {/* 🔥 Project 2 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pcuexpi}
              isBlog={false}
              title="Expostud_E-learning Platform 📚"
              description="AI-powered e-learning and collaboration platform that intelligently groups users into high-compatibility teams based on skills and personality traits. Enables real-time mentor guidance."
              tech="Next.js, Firebase, AI"
              ghLink="https://github.com/Katechandrashekhar/Expostud"
            />
          </Col>

          {/* 🔥 Project 3 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ipl_dashboard}
              isBlog={false}
              title="Guide Me: Career Guidance Platform 🎯"
              description="Mobile platform connecting 100+ users with certified counsellors for personalized career guidance using AI-driven recommendations. Integrated dynamic task and quiz modules."
              tech="React Native"
              ghLink="https://github.com/Katechandrashekhar/GuideMe"
            />
          </Col>

          {/* 🔥 Project 4 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pathfinder}
              isBlog={false}
              title="Pathfinding Visualizer 🗺️"
              description="Interactive pathfinding algorithm visualizer. Visualize A*, Dijkstra, BFS, DFS and more on a dynamic grid."
              tech="React, Canvas, Algorithms"
              ghLink="https://github.com/Katechandrashekhar/Pathfinding-Visualizerck"
            />
          </Col>

          {/* 🔥 Project 5 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={learnedudd}
              isBlog={false}
              title="LearnEDDD 🎓"
              description="Domain-Driven Design learning platform with interactive tutorials, code examples, and best practices."
              tech="Next.js, TypeScript, Firebase"
              ghLink="https://github.com/Katechandrashekhar/LearnEDDD"
            />
          </Col>

          {/* 🔥 Project 6 - Legacy Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={guideMe}
              isBlog={false}
              title="Guide Me 🎯"
              description="Career guidance mobile app connecting users with counsellors. Includes quizzes and AI-based recommendations for better career decisions."
              tech="React Native"
              ghLink="https://github.com/Katechandrashekhar/GuideMe"
            />
          </Col>

          {/* 🔥 Project 7 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blockchain}
              isBlog={false}
              title="Blockchain Server 🔗"
              description="Enterprise-grade blockchain server implementation with secure transaction validation, distributed consensus, and cryptographic security features."
              tech="Blockchain, Cryptography, Node.js"
              ghLink="https://github.com/Katechandrashekhar/BlockchainServerpcu"
            />
          </Col>

          {/* 🔥 Project 8 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stockPrice}
              isBlog={false}
              title="Stock Price Predictor 📈"
              description="Advanced ML-based stock price prediction system using LSTM and time-series analysis. Real-time data integration with 85%+ accuracy."
              tech="Python, TensorFlow, LSTM, Pandas"
              ghLink="https://github.com/Katechandrashekhar/Stock-Price-Predictor_Codec"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;