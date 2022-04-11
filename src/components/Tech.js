import React from "react";
import JavaScript from "../components/BodyAnimation";
import Html from "../components/HtmlAnimation"
import Css from "../components/CssAnimation"
import {Card, CardGroup} from "react-bootstrap";
function Tech() {
  return (
    <div className="Technologies"  id = 'Technologies'>
      <div className="fullbody">
        <h1>Technologies</h1>
        <CardGroup>
        <Card className = 'card'>
          <Card.Body >
            <JavaScript />
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Html/>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Css />
          </Card.Body>
        </Card>
        
        </CardGroup>
      </div>
    </div>
  );
}

export default Tech;
