import "./contact.scss";
import React from "react";
import { contact } from "../../Data";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="line"></div>
        <a href={`mailto:${contact.email}`} target="blank">
          <div type="button" className="email">
            {contact.email}
          </div>
        </a>
        <div className="line"></div>
        <div className="call-section">
          <div className="call">call</div>
          <div className="call-number">
            <a href="tel:8200-394-360">{contact.call}</a>
          </div>
        </div>
        <div className="line"></div>
      </div>
    </>
  );
};

export default Contact;
