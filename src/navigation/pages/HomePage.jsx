import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import React from "react";
import Crab from "../../assets/Crab.png"
import Mask from "../../assets/Mask.png"
import DiscordQR from "../../assets/DiscordQR.png"

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
          <Row className="align-items-center">
            
            <Col md={6}>
              <h2>What We Do</h2>
              <p>
                We meet weekly to design, code, and play games. Whether you're
                interested in programming, art, or storytelling, our club
                offers a place to collaborate and improve your skills.
              </p>
            </Col>

            <Col md={6}>
              <Image 
                src={Mask} 
                alt="Game Image" 
                height="300" width="500"
              />
            </Col>
          </Row>        
        </Card.Body>
      </Card>

      {/*Meeting time*/}
      <Card><Card.Body>
        <Row className="align-items-center">
          <Col md={6}>
            <Image 
              src={Crab} 
              alt="Game Image" 
              height="300" width="500" 
            />
          </Col>

        <Col md={6}>
          <h2>MEETING TIME:</h2>
          <h2> 6:30pm every Wednesday</h2>
        </Col>

        </Row>
      </Card.Body></Card>

      {/* Join Section */}
      <Card>
        <Card.Body>
            <Row className="align-items-center">
            <Col md={6}>
            <h2>WANT TO JOIN?</h2>
            <p>Scan the QR code to join our Club Discord</p>
            </Col>

            <Col md={6}>
            <Image 
              src={DiscordQR} 
              alt="Game Design and Development Discord QR Code" 
              height="300" width="250" 
            />
            </Col>

        </Row>
        </Card.Body>
        
      </Card>
    </div>
  );
}