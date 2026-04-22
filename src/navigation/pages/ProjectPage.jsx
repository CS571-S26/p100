import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabase";
import ProjectCard from "../../components/ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ProjectPage() {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProjects();
  }, []);

  async function getProjects() {
    const { data, err } = await supabase.from("Projects").select();
    if (err) console.error(err);
    setProjects(data);
  }

  return (
    <div style={{ background: "#232749", minHeight: "100vh", padding: "60px 20px" }}>
      <Container>
        <div style={{ marginBottom: "40px" }}>
          <h1 style={{ color: "#f0eeff", fontSize: "32px", fontWeight: 500, margin: "0 0 12px" }}>
            Projects
          </h1>
        </div>

        <Row xs={1} md={2} lg={3} className="g-4">
          {projects.map((project) => (
            <Col key={project.id}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}