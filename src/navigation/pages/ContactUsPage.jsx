import React from "react";
import { Container, Card, Button } from "react-bootstrap";

import DiscordQR from "../../assets/DiscordQR.png"

export default function ContactDiscord() {
  const discordUsername = ""; // replace with your actual Discord tag
  const discordInviteLink = "https://discord.gg/AbwwUH6H";

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Contact Us on Discord</h1>

      <Card className="text-center py-4">
        <Card.Body>
          <Card.Title>Reach out to us!</Card.Title>
          <Card.Text>
            You can contact our club via Discord. Add or message our club account:
          </Card.Text>
          <h4>{discordUsername}</h4>

          <p>Or join our server for faster communication:</p>
          <Button
            variant="primary"
            href={discordInviteLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Discord Server
          </Button>
        </Card.Body>
      </Card>

    </Container>
  );
}