import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Deepanshu Sehrawat </span>
            from <span className="purple"> Noida, India.</span>
            <br />
            I am currently Summer Intern at <span className="purple">Celebal Technologies.</span>
            <br />
            I am pursuing <span className="purple"> B.Tech</span> in <span className="purple">Computer Science and Engineering</span> from <br/><span className="purple">Dr. A.P.J Abdul Kalam Technical University.</span>
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading about Universe Mysteries
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Just Believe in God's plan!"{" "}
          </p>
          {/* <footer className="blockquote-footer">Deepanshu</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
