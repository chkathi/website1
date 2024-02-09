import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import HomeIcon from "@mui/icons-material/Home";

export const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-home">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <h2>Chandu Kathi</h2>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {/* State machine to add projects after authentication */}
            <Nav.Link href="/">
              <HomeIcon />
            </Nav.Link>
            <Nav.Link href="/projects-page">Projects</Nav.Link>
            <Nav.Link eventKey={2} href="/contact-page">
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
