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
    console.log(data);
    setProjects(data);
  }

  return (
    <div>
      <Container className="d-flex justify-content-center">
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
