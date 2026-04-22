import { useState, useRef } from "react";
import { supabase } from "../../utils/supabase";
import { Form, Button, Alert } from "react-bootstrap";

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

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
  const [coverImage, setCoverImage] = useState(null); // File object
  const [coverPreview, setCoverPreview] = useState(null); // Object URL for preview
  const [status, setStatus] = useState(null); // null | "loading" | "success" | "error"
  const [errorMsg, setErrorMsg] = useState("");
  const fileInputRef = useRef(null);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleImageChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setStatus("error");
      setErrorMsg("Only image files are allowed.");
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      setStatus("error");
      setErrorMsg("Image must be under 50MB.");
      return;
    }

    setCoverImage(file);
    setCoverPreview(URL.createObjectURL(file));
    setStatus(null);
  }

  function handleRemoveImage() {
    setCoverImage(null);
    setCoverPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  async function uploadCoverImage(projectName) {
    if (!coverImage) return null;

    const ext = coverImage.name.split(".").pop();
    const fileName = `${Date.now()}-${projectName.replace(/\s+/g, "_")}.${ext}`;

    const { error } = await supabase.storage
      .from("project-images")
      .upload(fileName, coverImage, { contentType: coverImage.type });

    if (error) throw new Error(error.message);

    const { data } = supabase.storage
      .from("project-images")
      .getPublicUrl(fileName);

    return data.publicUrl;
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

    try {
      const coverUrl = await uploadCoverImage(form.project_name.trim());

      const payload = {
        project_name: form.project_name.trim(),
        description: form.description.trim(),
        game_link: form.game_link.trim(),
        owner: form.owner.trim() || null,
        date_started: form.date_started || null,
        date_ended: form.date_ended || null,
        cover_image: coverUrl, // null if no image uploaded
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
      if (error) throw new Error(error.message);

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
      handleRemoveImage();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  }

  return (
    <div style={{ maxWidth: "900px", margin: "40px auto", padding: "0 16px" }}>
      <h1 className="mb-4">Post a Project</h1>

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
        <div className="d-flex gap-4 align-items-start">
          {/* ── Left column ── */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <Form.Group className="mb-3" controlId="formGameName">
              <Form.Label>Game Title *</Form.Label>
              <Form.Control
                name="project_name"
                value={form.project_name}
                onChange={handleChange}
                placeholder="Title"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="What's your game about?"
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
          </div>

          {/* ── Right column ── */}
          <div style={{ width: "260px", flexShrink: 0 }}>
            {/* Cover image */}
            <Form.Group className="mb-3" controlId="formCoverImage">
              <Form.Label>Cover Image</Form.Label>

              <div
                onClick={() => fileInputRef.current?.click()}
                style={{
                  width: "100%",
                  aspectRatio: "3 / 2",
                  border: "2px dashed #adb5bd",
                  borderRadius: "6px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  overflow: "hidden",
                  background: coverPreview ? "transparent" : "#f8f9fa",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "#6c757d")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "#adb5bd")
                }
              >
                {coverPreview ? (
                  <img
                    src={coverPreview}
                    alt="Cover preview"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#adb5bd"
                      viewBox="0 0 16 16"
                      style={{ marginBottom: "8px" }}
                    >
                      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                      <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
                    </svg>
                    <span
                      style={{
                        color: "#6c757d",
                        fontSize: "13px",
                        textAlign: "center",
                        padding: "0 8px",
                      }}
                    >
                      Click to upload cover image
                    </span>
                    <span
                      style={{
                        color: "#adb5bd",
                        fontSize: "11px",
                        marginTop: "4px",
                      }}
                    >
                      Max 50MB
                    </span>
                  </>
                )}
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />

              {coverPreview && (
                <Button
                  variant="outline-secondary"
                  size="sm"
                  className="mt-2 w-100"
                  onClick={handleRemoveImage}
                >
                  Remove Image
                </Button>
              )}
            </Form.Group>

            {/* Game link */}
            <Form.Group className="mb-3" controlId="formURL">
              <Form.Label>Game Link</Form.Label>
              <Form.Control
                name="game_link"
                value={form.game_link}
                onChange={handleChange}
                placeholder="https://itch.io/your-game"
              />
            </Form.Group>
          </div>
        </div>

        <Button variant="primary" type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Posting..." : "Submit"}
        </Button>
      </Form>
    </div>
  );
}
