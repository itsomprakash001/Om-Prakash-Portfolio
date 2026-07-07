import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import PGF from "../../../Images/PGF.png";

import HMS from "../../../Images/HMS.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HMS}
              isBlog={false}
              title="Hospital Management System"
              description="A complete hospital management system built with the MERN stack. Features include patient records, doctor management, appointment scheduling, and secure authentication using JWT."
              ghLink="https://github.com/itsomprakash001/Hospital-Management-System-Fullstack"
              demoLink="https://hms-frontend-umber.vercel.app/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PGF}
              isBlog={false}
              title="PG-Finder"
              description="PG-Finder is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) that helps users find paying guest accommodations. The application provides various features to facilitate property listing, booking, and reservation management."
              ghLink="https://github.com/itsomprakash001/PG_Finder"
              demoLink="#"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
