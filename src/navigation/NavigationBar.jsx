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
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid style={{ backgroundColor: "#1f223e" }}>
        <Navbar.Brand as={Link} to="/">
          <Image src={logo} alt="Logo" height="40" roundedCircle />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ backgroundColor: "#5b548e" }}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/socials">
              Socials
            </Nav.Link>

            {isLoggedIn ? (
              <>
                <Nav.Link as={Link} to="/projects/post">
                  Create Project
                </Nav.Link>
                <Button
                  onClick={handleLogout}
                  size="sm"
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(157,147,255,0.4)",
                    color: "#9d93ff",
                    borderRadius: "8px",
                    marginLeft: "8px",
                  }}
                >
                  Log out
                </Button>
              </>
            ) : (
              <Nav.Link as={Link} to="/login" style={{ color: "#9d93ff" }}>
                Log in
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
