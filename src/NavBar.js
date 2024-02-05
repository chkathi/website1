import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

import "./App.css";

export const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="navbar-home">
        <Container>
          <Navbar.Brand href="/">Chandu Kathi</Navbar.Brand>
        </Container>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
