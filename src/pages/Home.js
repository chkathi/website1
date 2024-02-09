import React from "react";
import { Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

import "bootstrap/dist/css/bootstrap.min.css";
import "../App.js";

export const Home = () => {
  return (
    <motion.div
      className="title-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <h1>Hello I'm</h1>
        <div className="typewriter">
          <Typewriter
            options={{
              strings: ["Chandu Kathi."],
              autoStart: true,
              loop: true,
              pauseFor: 2500,
              deleteSpeed: 100,
            }}
            className="typewriter"
          />
        </div>
        <hr className="divider"></hr>
        <p>Computer Sciences student at</p>
        <p>California State University, Sacramento</p>
        <LinkContainer to="/resume">
          <button className="resume-btn">
            <b>Resume</b>
          </button>
        </LinkContainer>
      </Container>
    </motion.div>
  );
};
