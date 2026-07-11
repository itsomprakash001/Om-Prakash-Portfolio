import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Om Prakash </span>
            from <span className="purple"> Bihar, India.</span>
            <br />
            I have completed my Bachelor's degree from Lakshmi Narain College of Technology, Bhopal.
            <br />
            
            <br />
            Beyond coding, I enjoy activities that keep me inspired, curious, and continuously learning.
</p>
<ul>
  <li className="about-activity">
    <ImPointRight /> Reading Books
  </li>
  <li className="about-activity">
    <ImPointRight /> Exploring New Technologies
  </li>
  <li className="about-activity">
    <ImPointRight /> Problem Solving
  </li>
  <li className="about-activity">
    <ImPointRight /> Travelling
  </li>
</ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Om Prakash</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
