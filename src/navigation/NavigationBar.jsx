import { Link } from "react-router-dom";
import { Nav, Navbar, Container, Image } from "react-bootstrap";
import logo from "../assets/logo.png";

export default function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid style={{ backgroundColor: "#232749" }}>
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
