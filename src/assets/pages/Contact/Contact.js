import "./contact.scss";
import React from "react";
import { contact } from "../../Data";
import TextField from "@mui/material/TextField";
import { alpha, styled } from "@mui/material/styles";
import Container from "@mui/material/Container";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "white",
  },
  "& label": {
    color: "#be81ef",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#be81ef",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#be81ef",
    },
    "&:hover fieldset": {
      borderColor: "yellow",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
});

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="line"></div>
        <Container>
          <a href={`mailto:${contact.email}`} target="blank">
            <div type="button" className="email">
              {contact.email}
            </div>
          </a>
        </Container>
        <div className="line"></div>

        <Container>
          <div className="call-section">
            <div className="call">call</div>
            <div className="call-number">
              <a href="tel:8200-394-360">{contact.call}</a>
            </div>
          </div>
        </Container>

        <div className="line"></div>

        <Container>
          <div className="namefield">
            <div className="name">Name</div>

            <CssTextField
              label="Enter Name"
              id="custom-css-outlined-input"
              color="success"
            />
          </div>
        </Container>
        <div className="line"></div>
        <Container>
          <div className="namefield">
            <div className="name">Email</div>

            <CssTextField label="Enter Email" id="custom-css-outlined-input" />
          </div>
        </Container>
        <div className="line"></div>
        <Container>
          <div className="namefield">
            <div className="name">Message</div>

            <CssTextField
              label="Enter Message"
              id="custom-css-outlined-input"
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Contact;
