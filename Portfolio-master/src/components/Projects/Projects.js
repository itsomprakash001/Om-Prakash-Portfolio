import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import rental from "../../Images/rental.png"
import HMS from "../../Images/HMS.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row
          style={{
            justifyContent: "center",
            paddingBottom: "10px",
          }}
        >
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rental}
              isBlog={false}
              title="Rental Booking Platform"
              description="A full-stack rental booking platform where users can browse properties, book stays, and list their own rentals easily."
              ghLink="https://github.com/itsomprakash001/rental-booking-platform"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HMS}
              isBlog={false}
              title="Hospital Management System"
              description="A full-stack hospital management system to manage patients, appointments, staff, authentication, role-based access, and CRUD operations."
              ghLink="https://github.com/itsomprakash001/Hospital-Management-System-FullStack"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;