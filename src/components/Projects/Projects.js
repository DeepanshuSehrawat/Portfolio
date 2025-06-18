import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import TinDog from "../../Assets/Projects/TinDog.png"
import Paste from "../../Assets/Projects/Paste.png"
import Challenge from "../../Assets/Projects/Challenge.png"
import DeployingSoon from "../../Assets/Projects/DeployingSoon.png"

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
              imgPath={Challenge}
              isBlog={false}
              title="Challenge-Tracker"
              description="A gamified challenge system designed to push your coding boundaries by combining algorithmic problem-solving with new technologies, frameworks, and paradigms.."
              ghLink="https://github.com/DeepanshuSehrawat/Challenge-Tracker1.git"
              demoLink="https://challenge-tracker1.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Paste}
              isBlog={false}
              title="Paste-App"
              description="A modern and minimal Paste App built using React, Redux, and Tailwind CSS. This app allows users to create, save, view, and share text/code snippets with a sleek and responsive UI.."
              ghLink="https://github.com/DeepanshuSehrawat/Paste-App.git"
              demoLink="https://paste-app-two-flax.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TinDog}
              isBlog={false}
              title="TinDog-Startup-Landing Page"
              description="A full fledged webpage consisting of marvelous features with animated background by using HTML , CSS, BOOTSTRAP"
              ghLink="https://github.com/DeepanshuSehrawat/Tindog-startup-landing-page-web-page-using-HTML-CSS-Bootstrap.git"
              demoLink="https://deepanshusehrawat.github.io/Tindog-startup-landing-page-web-page-using-HTML-CSS-Bootstrap/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DeployingSoon}
              isBlog={false}
              title="Gen-Ai"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DeployingSoon}
              isBlog={false}
              title="APNI BOOKING"
              description=""
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DeployingSoon}
              isBlog={false}
              title="NLP Model"
              description=""
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
