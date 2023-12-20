import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";
import logoimg from "../assets/images/logo.png";

function NavBar() {
  return (
    <Navbar expand="lg" className="header-nav">
      <Container>
        <Navbar.Brand href="#home" className="brand">
          <img src={logoimg} alt="none" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-auto head-center-div">
            <Nav.Link href="#home" className="text-light">
              Web3Makr
            </Nav.Link>
            <Nav.Link href="#link" className="text-light">
              White paper
            </Nav.Link>
            <Nav.Link href="#link" className="text-light">
              Services
            </Nav.Link>
            <Nav.Link href="#link" className="text-light">
              Tool
            </Nav.Link>
            <Nav.Link href="#link" className="text-light">
              Contact us
            </Nav.Link>
          </Nav>
          <div className="head-buttons">
            <Button variant="outline-primary" className="me-1">
              Start for free
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
