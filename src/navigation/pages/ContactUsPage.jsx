import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";

const boardMembers = [
  { role: "President", name: "Cristiana Vlagali" },
  { role: "Vice President/ Workshop Coordinator", name: "Bruno Wu" },
  { role: "Outreach Chair", name: "Cristiana Vlagali" },
  { role: "Project Manager", name: "Emma Glaser" },
];

export default function ContactPage() {
  const discordInviteLink = "https://discord.gg/hS8AHX8UzX";

  return (
    <div style={{ background: "#232749", minHeight: "100vh", padding: "60px 20px" }}>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h1 style={{ color: "#f0eeff", fontSize: "32px", fontWeight: 500, margin: "0 0 12px" }}>
          Contact Us
        </h1>
        <p style={{ color: "#b8b8d0", maxWidth: "400px", margin: "0 auto" }}>
          The best way to reach us is through our Discord server
        </p>
      </div>

      <Container>

        {/* Discord CTA */}
        <Card className="mb-4" style={{ backgroundColor: "#2e3060", border: "1px solid rgba(122,111,255,0.3)", borderRadius: "12px" }}>
          <Card.Body className="p-4" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", color: "#9d93ff", marginBottom: "6px" }}>
                Primary contact
              </p>
              <h2 style={{ color: "#f0eeff", marginBottom: "6px" }}>Join our Discord</h2>
              <p style={{ color: "#b8b8d0" }}>
                Ask questions, get updates, and connect with other members.
              </p>
            </div>
            <Button
              href={discordInviteLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "#5865f2", border: "none", padding: "10px 24px", borderRadius: "8px", whiteSpace: "nowrap" }}
            >
              Join Discord →
            </Button>
          </Card.Body>
        </Card>

        {/* Board Members */}
        <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", color: "#9d93ff", marginBottom: "12px" }}>
          Board members
        </p>
        <Row className="g-3">
          {boardMembers.map(({ role, name }) => (
            <Col md={6} key={role}>
              <Card style={{ backgroundColor: "#2e3060", border: "1px solid #232749", borderRadius: "12px" }}>
                <Card.Body className="p-3">
                  <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", color: "#9d93ff", margin: "0 0 4px" }}>
                    {role}
                  </p>
                  <p style={{ color: "#f0eeff", fontSize: "16px", fontWeight: 500, margin: 0 }}>
                    {name}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    </div>
  );
}