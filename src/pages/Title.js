import React from "react";
import { Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "../App.css";

export const Title = () => {
  return (
    <div className="landing-page">
      <Container>
        <h1>Chandu Kathi</h1>
        <p>Computer Sciences</p>
        <p>California State University, Sacramento</p>
        <LinkContainer to="/resume">
          <button className="resume-btn">
            <b>Resume</b>
          </button>
        </LinkContainer>
      </Container>
    </div>
  );
};
