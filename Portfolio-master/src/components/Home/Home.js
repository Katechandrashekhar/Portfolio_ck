import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import homePhoto from "../../Assets/ck photo.jpeg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { ImBlog } from "react-icons/im";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />

        <Container className="home-content">
          <Row>
            {/* LEFT SIDE */}
            <Col md={7} className="home-header">
              <h1 className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M{" "}
                <strong className="main-name">
                  CHANDRASHEKHAR KATE
                </strong>
              </h1>
              <p className="home-hero-description">
                Crafting immersive digital experiences with modern web apps, interactive UI, and smart AI-powered workflows.
              </p>

              {/* 🔥 Typing Animation */}
              <div style={{ padding: 40, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            {/* RIGHT SIDE IMAGE */}
            <Col md={5} style={{ paddingBottom: 20 }}>
              <div className="home-photo-card home-avatar-card">
                <Tilt
                  className="home-photo-tilt"
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  perspective={1200}
                  scale={1.03}
                  transitionSpeed={350}
                  gyroscope={true}
                >
                  <img
                    src={homePhoto}
                    alt="Chandrashekhar Kate"
                    className="img-fluid home-profile-photo home-avatar-photo"
                  />
                </Tilt>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* 🔥 About Section */}
      <Home2 />

      {/* 🔥 Social Links */}
      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1 style={{ fontSize: "2.4em", marginBottom: "20px" }}>
              Let's Connect <span style={{ color: "#cd5ff8" }}>& Collaborate</span>
            </h1>
            <p style={{ fontSize: "1.2em", marginBottom: "40px" }}>
              I'm always excited to work on interesting projects and connect with fellow developers. 
              Feel free to reach out! 🚀
            </p>

            {/* CTA Buttons */}
            <div className="home-hero-buttons">
              <a
                href="https://github.com/Katechandrashekhar"
                target="_blank"
                rel="noreferrer"
                className="hero-button-link"
              >
                <Button className="btn-primary btn-hero" size="lg">
                  <AiFillGithub style={{ marginRight: "10px" }} /> GitHub Profile
                </Button>
              </a>
              <a
                href="https://neuro-blog-liart.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="hero-button-link"
              >
                <Button className="btn-primary btn-hero" size="lg">
                  <ImBlog style={{ marginRight: "10px" }} /> Read My Blog
                </Button>
              </a>
            </div>

            {/* Social Icons */}
            <ul className="home-about-social-links">

              {/* GitHub */}
              <li className="social-icons">
                <a
                  href="https://github.com/Katechandrashekhar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>

              {/* LinkedIn */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/chandrashekhar-kate-159b45334/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              {/* Instagram */}
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_____ck_13____/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="Instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>

              {/* Blog */}
              <li className="social-icons">
                <a
                  href="https://neuro-blog-liart.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="Blog"
                >
                  <ImBlog />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;