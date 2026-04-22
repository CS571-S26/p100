import { Image, Button, Card } from "react-bootstrap";

function ProjectCard(props) {
  return (
    <Card
      style={{
        width: "100%", // fill column width
        maxWidth: 500, // limit max width on large screens
        height: "500px",
        backgroundColor: "#c6cbd4",
        border: "none",
      }}
    >
      <Card.Body>
        <Card.Img
          src={props.cover_image}
          style={{
            width: "100%",
            height: "300px",
            objectFit: "fit",
          }}
        />

        {/* Card title */}
        <Card.Title
          style={{
            color: "#3b2f2f",
            fontSize: 20,
            fontWeight: "700",
            marginTop: "8px",
            marginBottom: "4px", // smaller margin to next line
          }}
        >
          {props.project_name}
        </Card.Title>

        {/* Description */}
        <Card.Text
          style={{
            color: "#3b2f2f",
            marginBottom: "8px",
            fontSize: 15,
            paddingLeft: "16px",
            paddingRight: "16px",
            height: "30px",
          }}
        >
          {props.description}
        </Card.Text>
        <>
          <Button
            variant="outline-dark"
            className="mf-2 me-2"
            onClick={() => window.open(props.game_link, "_blank")}
          >
            Play
          </Button>
          <Button variant="outline-dark" className="mf-2 me-2">
            Learn More
          </Button>
        </>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
