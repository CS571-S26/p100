import { Card } from "react-bootstrap";

export default function EventCard({ title, date, description }) {
  const formatted = new Date(date).toLocaleDateString("en-US", {
    month: "short", day: "numeric",
  });

  return (
    <Card className="h-100">
      <Card.Body>
        <p style={{ fontSize: "12px", color: "#7a6fff", fontWeight: 500, marginBottom: "4px" }}>
          {formatted}
        </p>
        <Card.Title style={{ fontSize: "15px" }}>{title}</Card.Title>
        <Card.Text style={{ fontSize: "13px", color: "#666" }}>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}