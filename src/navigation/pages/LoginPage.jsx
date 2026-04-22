import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    const success = login(username, password);
    if (success) {
      navigate("/projects/post");
    } else {
      setError("Incorrect username or password.");
    }
  };

  return (
    <div style={{ background: "#232749", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
      <Card style={{ backgroundColor: "#2e3060", border: "1px solid rgba(157,147,255,0.3)", borderRadius: "12px", width: "100%", maxWidth: "400px" }}>
        <Card.Body className="p-4">
          <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", color: "#9d93ff", marginBottom: "6px" }}>
            Members only
          </p>
          <h2 style={{ color: "#f0eeff", marginBottom: "24px" }}>Login</h2>

          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", color: "#b8b8d0", fontSize: "13px", marginBottom: "6px" }}>
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid rgba(157,147,255,0.3)", background: "#232749", color: "#f0eeff", fontSize: "14px", outline: "none" }}
            />
          </div>

          <div style={{ marginBottom: "24px" }}>
            <label style={{ display: "block", color: "#b8b8d0", fontSize: "13px", marginBottom: "6px" }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleLogin()}
              style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid rgba(157,147,255,0.3)", background: "#232749", color: "#f0eeff", fontSize: "14px", outline: "none" }}
            />
          </div>

          {error && (
            <p style={{ color: "#ff6b6b", fontSize: "13px", marginBottom: "16px" }}>{error}</p>
          )}

          <Button
            onClick={handleLogin}
            style={{ width: "100%", background: "#5865f2", border: "none", borderRadius: "8px", padding: "10px" }}
          >
            Log in
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}