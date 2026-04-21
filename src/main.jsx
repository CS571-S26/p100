import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

createRoot(document.getElementById("root")).render(
  <Container fluid style={{ padding: 0, border: "none" }}>
    <App />
  </Container>,
);
