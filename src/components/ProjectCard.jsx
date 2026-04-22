import { Image, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ProjectCard(props) {
  const navigate = useNavigate();

  return (
    <Card
      style={{
        width: "100%", // fill column width
        maxWidth: 500, // limit max width on large screens
        height: "24rem",
        maxHeight: 600,
        backgroundColor: "#2e3060",
        border: "none",
      }}
    >
      <Card.Body>
        <Card.Img
          src={props.cover_image}
          style={{
            width: "100%",
            height: "14rem",
            objectFit: "fit",
          }}
        />

        {/* Card title */}
        <Card.Title
          style={{
            color: "#9d93ff",
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
            color: "#9d93ff",
            fontSize: 15,
            height: 48,
            display: "-webkit-box",
            WebkitLineClamp: 2, // limit to 2 lines
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
          className="ps-1 pe-1 m-2"
        >
          {props.description}
        </Card.Text>

        <div className="m-2">
          <Button
            className="mf-2 me-2"
            style={{
              background: "transparent",
              border: "1px solid rgba(157,147,255,0.4)",
              color: "#9d93ff",
              borderRadius: "8px",
            }}
            onClick={() => window.open(props.game_link, "_blank")}
          >
            Play
          </Button>
          <Button
            className="mf-2 me-2"
            style={{
              background: "transparent",
              border: "1px solid rgba(157,147,255,0.4)",
              color: "#9d93ff",
              borderRadius: "8px",
            }}
            onClick={() => navigate(`/projects/${props.id}`)}
          >
            Learn More
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
