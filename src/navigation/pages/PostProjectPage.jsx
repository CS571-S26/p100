import { useState } from "react";
import { supabase } from "../../utils/supabase";
import { Form, Button, Alert } from "react-bootstrap";

export default function PostProjectPage() {
  const [form, setForm] = useState({
    project_name: "",
    description: "",
    game_link: "",
    owner: "",
    date_started: "",
    date_ended: "",
    team_members: "",
  });
  const [status, setStatus] = useState(null); // null | "loading" | "success" | "error"
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.project_name.trim()) {
      setStatus("error");
      setErrorMsg("Project name is required.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    const payload = {
      project_name: form.project_name.trim(),
      description: form.description.trim(),
      game_link: form.game_link.trim(),
      owner: form.owner.trim() || null,
      date_started: form.date_started || null,
      date_ended: form.date_ended || null,
      team: {
        members: form.team_members
          ? form.team_members
              .split(",")
              .map((m) => m.trim())
              .filter(Boolean)
          : [],
      },
    };

    const { error } = await supabase.from("Projects").insert(payload);

    if (error) {
      setStatus("error");
      setErrorMsg(error.message);
    } else {
      setStatus("success");
      setForm({
        project_name: "",
        description: "",
        game_link: "",
        owner: "",
        date_started: "",
        date_ended: "",
        team_members: "",
      });
    }
  }

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", padding: "0 16px" }}>
      <h1>Post a Project</h1>

      {status === "success" && (
        <Alert variant="success" onClose={() => setStatus(null)} dismissible>
          Project posted successfully!
        </Alert>
      )}
      {status === "error" && (
        <Alert variant="danger" onClose={() => setStatus(null)} dismissible>
          {errorMsg}
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGameName">
          <Form.Label>Game Title *</Form.Label>
          <Form.Control
            name="project_name"
            value={form.project_name}
            onChange={handleChange}
            placeholder="e.g. M.A.S.K."
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="What's your game about?"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formURL">
          <Form.Label>Game Link</Form.Label>
          <Form.Control
            name="game_link"
            value={form.game_link}
            onChange={handleChange}
            placeholder="https://itch.io/your-game"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formTeam">
          <Form.Label>Team Members</Form.Label>
          <Form.Control
            name="team_members"
            value={form.team_members}
            onChange={handleChange}
            placeholder="Name1, Name2, ..."
          />
          <Form.Text className="text-muted">
            Comma-separated list of members.
          </Form.Text>
        </Form.Group>

        <div className="mb-3 row g-3">
          <div className="col">
            <Form.Control
              type="date"
              name="date_started"
              value={form.date_started}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <Form.Control
              type="date"
              name="date_ended"
              value={form.date_ended}
              onChange={handleChange}
            />
          </div>
        </div>

        <Button variant="primary" type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Posting..." : "Submit"}
        </Button>
      </Form>
    </div>
  );
}
