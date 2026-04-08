import { Card, Button, Container, Row, Col } from "react-bootstrap";
import React from "react";

export default function HomePage() {
  return (
    <div>
      {/* Header Section */}
      <Container fluid className="text-center py-5 bg-light">
        <h1>Game Design and Development Club</h1>
      </Container>

      {/* About Section */}
      <Card>
        <Card.Body>
          <h2>What we do</h2>
          <p>
            We meet weekly to design, code, and playtest games. Whether you're
            interested in programming, art, or storytelling, our club
            offers a place to collaborate and improve your skills.
          </p>
        </Card.Body>
      </Card>

      {/*Meeting time*/}
      <Container>
        <h2>MEETING TIME: 6:30pm every Wednesday</h2>
      </Container>

      {/* Join Section */}
      <Container>
        <h2>Want to Join?</h2>
        <p>Scan the QR code to join our Club Discord</p>
        
      </Container>
    </div>
  );
}