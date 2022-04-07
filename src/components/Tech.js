import React from "react";
import JavaScript from "../components/BodyAnimation";
import {Card, CardGroup} from "react-bootstrap";
function Tech() {
  return (
    <div className="Technologies">
      <div className="fullbody">
        <CardGroup>
        <Card className = 'card'>
          <Card.Body >
            <JavaScript />
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <JavaScript />
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <JavaScript />
          </Card.Body>
        </Card>
        </CardGroup>
      </div>
    </div>
  );
}

export default Tech;
