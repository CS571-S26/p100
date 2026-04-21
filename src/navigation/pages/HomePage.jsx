import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import React from "react";
import Crab from "../../assets/Crab.png"
import Mask from "../../assets/Mask.png"
import logo from "../../assets/logo.png"
import DiscordQR from "../../assets/DiscordQR.png"
import events from "../../eventsData";
import EventCard from "../../components/EventCard";


export default function HomePage() {
  const discordInviteLink = "https://discord.gg/AbwwUH6H";

  return (
    <div style = {{ background:"#0f0f1a" }}>

      {/* Intro */}
      <div style={{ background: "#0f0f1a", padding: "56px 40px", textAlign: "center", marginBottom: "2px" }}>
        <h1 style={{ color: "#f0eeff", fontSize: "36px", fontWeight: 500, marginBottom: "12px" }}>
          Game Design & Development Club
        </h1>
        <p style={{ color: "#9090b0", maxWidth: "420px", margin: "0 auto"}}>
          Design, Code, and Play
        </p>
        <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginTop: "16px", flexWrap: "wrap" }}>
          {["Programming", "Art", "Storytelling", "Game Jams"].map(tag => (
            <span key={tag} style={{
              fontSize: "11px", padding: "4px 12px", borderRadius: "20px",
              background: "rgba(120,100,255,0.18)", color: "#a090ff",
              border: "0.5px solid rgba(120,100,255,0.35)"
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* What We Do Section */}
      <Card className="mb-2 rounded-0">
        <Card.Body className="p-4">
          <Row className="align-items-center g-4">
            <Col md={6}>
              <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", color: "#999", marginBottom: "6px" }}>
                About
              </p>
              <h2>What We Do</h2>
              <p>
                We meet weekly to design, code, and play games. Whether you're
                interested in programming, art, or storytelling, our club
                offers a place to collaborate and improve your skills.
              </p>
              {/* Meeting time callout */}
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "16px", marginTop: "16px" }}>
                <div style={{
                  background: "rgba(122,111,255,0.1)", border: "0.5px solid rgba(122,111,255,0.3)",
                  borderRadius: "8px", padding: "10px 18px", textAlign: "center"
                }}>
                  <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", color: "#7a6fff", margin: 0 }}>Weekly Meeting</p>
                  <p style={{ fontSize: "20px", fontWeight: 500, margin: "2px 0" }}>6:30 PM 131 Teacher Education</p>
                  <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", color: "#7a6fff", margin: 0 }}>Wednesday</p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div style={{ width: "100%", height: "300px", overflow: "hidden", borderRadius: "8px" }}>
                <Image
                  src={logo}
                  alt="Game Image"
                  style={{ width: "50%", height: "100%", objectFit: "fill" }}
                />
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Upcoming Events Section */}
      <Card className="mb-2 rounded-0">
        <Card.Body className="p-4">
          <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", color: "#999", marginBottom: "6px" }}>
            What's coming up
          </p>
          <h2 className="mb-3">Upcoming Events</h2>
          <Row className="g-3">
            {events.length > 0 ? (
              events.map(event => (
                <Col md={4} key={event.id}>
                  <EventCard {...event} />
                </Col>
              ))
            ) : (
              <p className="text-muted">No upcoming events. Check back soon!</p>
            )}
          </Row>
        </Card.Body>
      </Card>

      {/* Join Section */}
      <Card className="rounded-0">
        <Card.Body className="p-4">
          <Row className="align-items-center g-4">
            <Col md={6}>
              <h2>Want to Get Involved?</h2>
              <p>Scan the QR code or click below to join our Discord.</p>
              <Button href={discordInviteLink} style={{ background: "#5865f2", border: "none" }}>
                Join our Discord →
              </Button>
            </Col>
            <Col md={6}>
              <div style={{ width: "100%", maxWidth: "180px" }}>
                <Image
                  src={DiscordQR}
                  alt="Game Design and Development Discord QR Code"
                  style={{ width: "100%", height: "auto", objectFit: "contain" }}
                />
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>

    </div>
  );
}