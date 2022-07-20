import React from "react";
import { Button, CardGroup, Card } from "react-bootstrap";
import Solrising from "../components/pictures/solrising.png";
import Hydepark from "../components/pictures/hydepark.png";
import Gameboy from "../components/pictures/gameboy.png";
function Resume() {
  return (
    <div className="projects">
      <h1>PROJECTS</h1>
      <CardGroup className="project-card">
        <Card data-aos="flip-right">
          <Card.Img variant="top" src={Gameboy} alt="building" />
          <Card.Body>
            <Card.Title>Echeros GameBoy</Card.Title>
            <br />
            <Card.Text>
              Basic snake game inside of a gameboy! Build with basic javascript
              and lots of css uses local storage to save heighest score, can
              pause resume, restart game. the more apples you eat the faster you
              get. Built with Vanilla JS
            </Card.Text>
          </Card.Body>
          <Button className="cardButton" href="https://game-boy-iaed055mv-codygant.vercel.app/" target="_blank">
            VISIT HERE!
          </Button>
        </Card>

        <Card data-aos="flip-right" className="card">
          <Card.Img variant="top" src={Hydepark} alt="building" />
          <Card.Body>
            <Card.Title>Hyde Park</Card.Title>
            <br />
            <Card.Text>
              Hyde Park is a luxury restaurant chain currently standing at 11
              restaurants throughout the USA. Built with the React.js framework
              utilizing rest apis and sendgrid for the contact form. also has a
              page to buy giftcards...kinda cool
            </Card.Text>
          </Card.Body>
          <Button className="cardButton" href="https://hydepark-react.vercel.app/" target="_blank">
            VISIT HERE!
          </Button>
        </Card>

        <Card data-aos="flip-right" className="card">
          <Card.Img variant="top" src={Solrising} alt="building" />
          <Card.Body>
            <Card.Title>Sol Rising Energy.</Card.Title>
            <br />
            <Card.Text>
              Sol Rising Energy is a solar company based in Florida who hired me
              to make there website! Built with Next.js
            </Card.Text>
          </Card.Body>
          <Button className="cardButton" href="https://solrisingenergy.com/" target='_blank'>
          VISIT HERE!
          </Button>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Resume;
