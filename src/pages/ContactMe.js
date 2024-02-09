import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import { TextField } from "@mui/material";
import Typewriter from "typewriter-effect";

export const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="contact-section"
    >
      <Container>
        <div className="contact-info">
          <h1>Feel free to reach out</h1>
          <div className="contact-email" data-aos="fade-up">
            <form
              className="contact-form"
              action="https://formsubmit.co/timothy_doan@yahoo.com"
              method="POST"
            >
              <TextField
                style={{
                  width: "50%",
                  marginBottom: "10px",
                  marginTop: "1vh",
                  backgroundColor: "#E8ECF0",
                }}
                size="small"
                id="outlined-basic"
                label="Name"
                name="name"
                variant="outlined"
                type="ema"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <br></br>
              <TextField
                style={{
                  width: "50%",
                  marginBottom: "10px",
                  backgroundColor: "#E8ECF0",
                }}
                size="small"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                name="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <br></br>
              <TextField
                style={{
                  width: "50%",
                  marginBottom: "10px",
                  backgroundColor: "#E8ECF0",
                }}
                size="small"
                id="outlined-basic"
                label="Subject"
                variant="outlined"
                name="subject"
                onChange={(e) => setSubject(e.target.value)}
                required
              />
              <br></br>
              <TextField
                style={{
                  width: "50%",
                  marginBottom: "40px",
                  backgroundColor: "#E8ECF0",
                }}
                id="outlined-basic"
                label="Subject"
                variant="outlined"
                name="message"
                multiline
                rows={8}
                maxRows={12}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
              <br></br>
              <input
                type="hidden"
                name="_next"
                value="https://timdoan.netlify.app//thankyou"
              ></input>
              <button type="submit" className="email-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default ContactMe;
