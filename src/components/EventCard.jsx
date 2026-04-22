import { Card } from "react-bootstrap";

export default function EventCard({ title, date, description, location }) {
  const formatted = new Date(date).toLocaleDateString("en-US", {
    month: "short", day: "numeric",
  });

  return (
    <Card className="h-100" style={{ backgroundColor: "#b9b5c7", border: "1px solid #232749", borderRadius: "12px" }}>
      <Card.Body>
        <p style={{ fontSize: "12px", color: "#010111", fontWeight: 500, marginBottom: "4px" }}>
          {formatted}
        </p>
        <Card.Title style={{ fontSize: "15px", color: "#010111" }}>{title}</Card.Title>
        <Card.Text style={{ fontSize: "13px", color: "#010111" }}>{location}</Card.Text>
        <Card.Text style={{ fontSize: "13px", color: "#010116" }}>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}