import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import TinDog from "../../Assets/Projects/TinDog.png"
import Paste from "../../Assets/Projects/Paste.png"
import CrypTalk from "../../Assets/Projects/CrypTalk.png"
import DeployingSoon from "../../Assets/Projects/DeployingSoon.png"
import DevGPT from "../../Assets/Projects/DevGPT.png"
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
              imgPath={CrypTalk}
              isBlog={false}
              title="CrypTalk-Video Call & Chat App"
              description="CrypTalk – Secure Video & Chat Application CrypTalk is a full-stack real-time video chat application that enables users to connect securely via video calls and messaging. It is built using modern web technologies with a focus on performance, scalability, and data security."
              ghLink="https://github.com/DeepanshuSehrawat/CrypTalk-VideoCall-Chat-App"
              demoLink="https://cryptalk-videocall-chat-app-frontend.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DevGPT}
              isBlog={false}
              title="DevGPT"
              description="DevGPT is an intelligent code reviewer that analyzes your code to find bugs, suggest improvements, and provide corrected code snippets. Powered by the Gemini API, it helps developers enhance code quality and learn best practices."
              ghLink="https://github.com/DeepanshuSehrawat/DevGPT"
              demoLink="https://dev-gpt-seven.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Paste}
              isBlog={false}
              title="Paste-App"
              description="A modern and minimal Paste App built using React, Redux, and Tailwind CSS. This app allows users to create, save, view, and share text/code snippets with a sleek and responsive UI..                                                                                             "
              ghLink="https://github.com/DeepanshuSehrawat/Paste-App.git"
              demoLink="https://paste-app-two-flax.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TinDog}
              isBlog={false}
              title="TinDog-Startup-Landing Page"
              description="A full fledged webpage consisting of marvelous features with animated background by using HTML , CSS, BOOTSTRAP                                                                                                                                                                   "
              ghLink="https://github.com/DeepanshuSehrawat/Tindog-startup-landing-page-web-page-using-HTML-CSS-Bootstrap.git"
              demoLink="https://deepanshusehrawat.github.io/Tindog-startup-landing-page-web-page-using-HTML-CSS-Bootstrap/"              
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
