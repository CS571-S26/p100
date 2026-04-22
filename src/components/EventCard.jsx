import { Card } from "react-bootstrap";

export default function EventCard({ title, date, description, location }) {
  const formatted = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  return (
    <Card
      className="h-100"
      style={{
        backgroundColor: "rgba(122,111,255,0.1)",
        border: "0.5px solid rgba(122,111,255,0.3)",
        borderRadius: "12px",
      }}
    >
      <Card.Body>
        <p
          style={{
            fontSize: "12px",
            color: "#9d93ff",
            fontWeight: 500,
            marginBottom: "4px",
          }}
        >
          {formatted}
        </p>

        <Card.Title style={{ fontSize: "15px", color: "#FFFFFF" }}>
          {title}
        </Card.Title>
        <Card.Text style={{ fontSize: "12px", color: "#b1a5b7" }}>
          {location}
        </Card.Text>
        <Card.Text style={{ fontSize: "13px", color: "#ffffff" }}>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
