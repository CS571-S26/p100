import { Image, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ProjectCard(props) {
  const navigate = useNavigate();

  return (
    <Card
      style={{
        width: "100%", // fill column width
        maxWidth: 500, // limit max width on large screens
        height: "26rem",
        maxHeight: 600,
        backgroundColor: "#c6cbd4",
        border: "none",
      }}
    >
      <Card.Body>
        <Card.Img
          src={props.cover_image}
          style={{
            width: "100%",
            height: "16rem",
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
            variant="outline-dark"
            className="mf-2 me-2"
            onClick={() => window.open(props.game_link, "_blank")}
          >
            Play
          </Button>
          <Button 
            variant="outline-dark" 
            className="mf-2 me-2"
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
