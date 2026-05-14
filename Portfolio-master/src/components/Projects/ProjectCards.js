import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view shadow-lg border-0">
      {/* 🔥 Project Image - Professional Thumbnail */}
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="project"
        style={{ 
          height: "150px", 
          objectFit: "cover",
          borderBottom: "3px solid #cd5ff8"
        }}
      />

      <Card.Body>
        {/* 🔥 Title */}
        <Card.Title style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
          {props.title}
        </Card.Title>

        {/* 🔥 Description */}
        <Card.Text style={{ textAlign: "justify", fontSize: "0.9rem" }}>
          {props.description}
        </Card.Text>

        {/* 🔥 Tech Stack (NEW FEATURE) */}
        {props.tech && (
          <p style={{ fontSize: "0.8rem", color: "#c770f0" }}>
            <b>Tech:</b> {props.tech}
          </p>
        )}

        {/* 🔥 Buttons */}
        <div style={{ display: "flex", gap: "10px" }}>

          {/* GitHub */}
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {/* Demo */}
          {!props.isBlog && props.demoLink && (
            <Button
              variant="outline-primary"
              href={props.demoLink}
              target="_blank"
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}

        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;