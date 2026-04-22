import { Link, useNavigate } from "react-router-dom";
import { Nav, Navbar, Container, Image, Button } from "react-bootstrap";
import logo from "../assets/logo.png";
import { useAuth } from "../context/AuthContext";

export default function NavigationBar() {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Navbar
      expand="lg"
      className="navbar-dark"
      style={{ padding: 0, minHeight: "80px" }}
    >
      <Container
        fluid
        style={{
          backgroundColor: "#1f223e",
          padding: 0,
          display: "flex",
          alignItems: "center",
          minHeight: "80px",
        }}
      >
        <Navbar.Brand as={Link} to="/">
          <Image
            src={logo}
            alt="Logo"
            height="40"
            roundedCircle
            style={{ marginLeft: 10 }}
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{
            border: "none",
            boxShadow: "none", // removes focus outline too
          }}
        />

        <Navbar.Collapse id="basic-navbar-nav" className="m-2">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" style={{ fontSize: "14px" }}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" style={{ fontSize: "14px" }}>
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/socials" style={{ fontSize: "14px" }}>
              Socials
            </Nav.Link>

            {isLoggedIn ? (
              <>
                <Nav.Link
                  as={Link}
                  to="/projects/post"
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(157,147,255,0.4)",
                    color: "#9d93ff",
                    borderRadius: "8px",
                    marginLeft: "8px",
                    fontSize: "14px",
                  }}
                >
                  Post Project
                </Nav.Link>
                <Button
                  onClick={handleLogout}
                  size="sm"
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(157,147,255,0.4)",
                    color: "#9d93ff",
                    fontSize: "14px",
                    borderRadius: "8px",
                    marginLeft: "8px",
                  }}
                >
                  Log out
                </Button>
              </>
            ) : (
              <Nav.Link
                as={Link}
                to="/login"
                style={{ color: "#9d93ff", fontSize: "14px" }}
              >
                Log in
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
