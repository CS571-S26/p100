import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { supabase } from "../../utils/supabase";

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProject();
  }, [id]);

  async function getProject() {
    const { data, err } = await supabase
      .from("Projects")
      .select()
      .eq("id", id)
      .single();

    if (err) {
      setError("Project not found.");
      console.error(err);
    } else {
      setProject(data);
    }
    setLoading(false);
  }

  if (loading) {
    return (
      <div
        style={{
          background: "#232749",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ color: "#b8b8d0" }}>Loading...</p>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div
        style={{
          background: "#232749",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ color: "#ff6b6b" }}>{error || "Project not found."}</p>
      </div>
    );
  }

  const teamMembers = project.team_members
    ? project.team_members
        .split(",")
        .map((m) => m.trim())
        .filter(Boolean)
    : [];

  return (
    <div
      style={{
        background: "#232749",
        minHeight: "100vh",
        padding: "60px 20px",
      }}
    >
      <Container>
        {/* Back button */}
        <Button
          onClick={() => navigate("/projects")}
          style={{
            background: "transparent",
            border: "1px solid rgba(157,147,255,0.4)",
            color: "#9d93ff",
            borderRadius: "8px",
            marginBottom: "32px",
          }}
        >
          ← Back to Projects
        </Button>

        {/* Header */}
        <div style={{ marginBottom: "32px" }}>
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "#9d93ff",
              marginBottom: "8px",
            }}
          >
            Project
          </p>
          
          <h1
            style={{
              color: "#f0eeff",
              fontSize: "32px",
              fontWeight: 500,
              margin: "0 0 12px",
            }}
          >
            {project.project_name}
          </h1>

         {project.cover_image && (
          <div style={{ 
            width: "100%", 
            borderRadius: "12px", 
            marginBottom: "32px",
            background: "#1e1e35",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px"
          }}>
            <img
              src={project.cover_image}
              alt={project.project_name}
              style={{ 
                width: "60%",
                height: "auto",
                borderRadius: "8px"
              }}
            />
          </div>
        )}

        </div>

        <Row className="g-4">
          {/* Left column — main info */}
          <Col md={8}>
            {/* Team Members */}
            {teamMembers.length > 0 && (
              <Card
                className="mb-4"
                style={{
                  backgroundColor: "#2e3060",
                  border: "1px solid #232749",
                  borderRadius: "12px",
                }}
              >
                <Card.Body className="p-4">
                  <p
                    style={{
                      fontSize: "11px",
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      color: "#9d93ff",
                      marginBottom: "12px",
                    }}
                  >
                    Team Members
                  </p>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
                  >
                    {teamMembers.map((member, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: "13px",
                          padding: "4px 12px",
                          borderRadius: "20px",
                          background: "rgba(120,100,255,0.18)",
                          color: "#b8b0ff",
                          border: "0.5px solid rgba(170,150,255,0.45)",
                        }}
                      >
                        {member}
                      </span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            )}

            {/* Game Link + Description */}
            {project.game_link && (
              <Card style={{ backgroundColor: "#2e3060", border: "1px solid rgba(157,147,255,0.3)", borderRadius: "12px" }}>
                <Card.Body className="p-4">
                  
                  {/* Description */}
                  <div style={{ marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid rgba(157,147,255,0.2)" }}>
                    <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", color: "#9d93ff", marginBottom: "8px" }}>
                      Description
                    </p>
                    <p style={{ color: "#b8b8d0", margin: 0, lineHeight: "1.7" }}>
                      {project.description}
                    </p>
                  </div>

                  {/* Play button row */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
                    <div>
                      <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", color: "#9d93ff", marginBottom: "6px" }}>
                        Play the game
                      </p>
                      <p style={{ color: "#b8b8d0", margin: 0 }}>
                        This project is available to play online.
                      </p>
                    </div>
                    <Button
                      href={project.game_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ background: "#5865f2", border: "none", borderRadius: "8px", padding: "10px 24px", whiteSpace: "nowrap" }}
                    >
                      Play Now →
                    </Button>
                  </div>

                </Card.Body>
              </Card>
            )}
          </Col>

          {/* Right column — metadata */}
          <Col md={4}>
            <Card
              style={{
                backgroundColor: "#2e3060",
                border: "1px solid #232749",
                borderRadius: "12px",
              }}
            >
              <Card.Body className="p-4">
                <p
                  style={{
                    fontSize: "11px",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: "#9d93ff",
                    marginBottom: "16px",
                  }}
                >
                  Details
                </p>

                <div style={{ marginBottom: "16px" }}>
                  <p
                    style={{
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      color: "#9d93ff",
                      margin: "0 0 4px",
                    }}
                  >
                    Team Members
                  </p>
                  <p style={{ color: "#f0eeff", fontWeight: 500, margin: 0 }}>
                    {project.team_members || "—"}
                  </p>
                </div>

                <div style={{ marginBottom: "16px" }}>
                  <p
                    style={{
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      color: "#9d93ff",
                      margin: "0 0 4px",
                    }}
                  >
                    Date Started
                  </p>
                  <p style={{ color: "#f0eeff", fontWeight: 500, margin: 0 }}>
                    {project.date_started || "—"}
                  </p>
                </div>

                <div>
                  <p
                    style={{
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      color: "#9d93ff",
                      margin: "0 0 4px",
                    }}
                  >
                    Date Ended
                  </p>
                  <p style={{ color: "#f0eeff", fontWeight: 500, margin: 0 }}>
                    {project.date_ended || "—"}
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
