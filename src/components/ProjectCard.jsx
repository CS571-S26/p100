import { Image, Button, Card } from "react-bootstrap";

function ProjectSection(props) {
  const toolsText = props.tools.join(" | ");

  return (
    <Card
      style={{
        width: "100%", // fill column width
        maxWidth: 500, // limit max width on large screens
        backgroundColor: "#e2d3ab",
        border: "none",
      }}
    >
      <Card.Body>
        <Image src="../assets/logo.png"></Image>

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
          M.A.S.K.
        </Card.Title>

        {/* Tools line */}
        <p
          style={{
            color: "#6b4c3b",
            fontSize: 15,
            fontWeight: "700",
            margin: "0 0 8px 0", // bottom margin to description
          }}
        >
          {props.tools.join(" | ")}
        </p>

        {/* Description */}
        <Card.Text
          style={{
            color: "#3b2f2f",
            marginBottom: "8px",
            fontSize: 15,
            paddingLeft: "16px",
            paddingRight: "16px",
            height: "96px",
          }}
        >
          {props.description}
        </Card.Text>
        <>
          <Button variant="outline-dark" className="mf-2 me-2">
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

export default ProjectSection;
