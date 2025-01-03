import React from "react";
import Card from "react-bootstrap/Card";
import { ImCircleRight} from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammed Anas </span>
            from <span className="purple"> Wayanad, Kerala</span>
            <br />
            I am currently employed as a software developer at Neopraxis .
            <br />
            I have completed Engineering in software (CT) at GPTC 
            Meppadi.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity ">
              <ImCircleRight /> Online Games
            </li>
            <li className="about-activity">
              <ImCircleRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImCircleRight /> Travelling
            </li>
            <li className="about-activity">
              <ImCircleRight /> Photography
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Just like gems are found in deep waters, true innovation lies in diving deep into the tech world."{" "}
          </p>
          <footer className="blockquote-footer">- Anas -</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
