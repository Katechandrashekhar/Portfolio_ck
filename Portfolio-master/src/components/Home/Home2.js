import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>

          {/* LEFT SIDE */}
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I am a passionate{" "}
              <b className="purple">B.Tech Computer Engineering student</b>{" "}
              at Pimpri Chinchwad University with an excellent academic record
              (CGPA: 9.4) and a deep commitment to building impactful, real-world solutions.
              <br />
              <br />

              With extensive hands-on experience, I specialize in developing{" "}
              <b className="purple">
                AI-powered applications, full-stack web platforms, and scalable systems
              </b>{" "}
              that address real-life challenges and create measurable value.
              <br />
              <br />

              I have strong expertise in
              <i>
                <b className="purple">
                  {" "}
                  Java, JavaScript, TypeScript, Python, SQL, and C++
                </b>
              </i>
              , with advanced proficiency in modern technologies including
              <b className="purple"> MERN Stack, Next.js, MongoDB, Firebase, and cloud platforms</b>.
              <br />
              <br />

              My key areas of focus include
              <i>
                <b className="purple">
                  {" "}
                  Full-Stack Web Development, Artificial Intelligence & Machine Learning,{" "}
                  System Design, and Scalable Architecture
                </b>
              </i>.
              <br />
              <br />

              I take pride in building impactful solutions such as
              <b className="purple">
                {" "}
                AI-based platforms, E-learning ecosystems, Career Guidance applications,
                and Data-driven systems
              </b>{" "}
              that significantly enhance user experiences and solve real business problems.
              <br />
              <br />

              <strong>📚 Continuous Learning:</strong> I stay updated with the latest
              industry trends and technologies, always eager to explore innovative solutions
              and best practices in software development.
            </p>
          </Col>

          {/* RIGHT SIDE IMAGE */}
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{ maxHeight: "300px" }}
              />
            </Tilt>
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Home2;