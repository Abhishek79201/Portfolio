import "./contact.scss";
import React from "react";
import { contact } from "../../Data";

const Contact = () => {
  return (
<<<<<<< HEAD
    <div className="container">
      <Navbar />
    </div>
=======
    <>
      <div className="contact">
        <div className="line"></div>
        <a href={`mailto:${contact.email}`} target="blank">
          <div type="button" className="email">
            Vaghelaabhishek2580@gmail.com
          </div>
        </a>
        <div className="line"></div>
        <div className="call-section">
          <div className="call">call</div>
          <div className="call-number">
            <a href="tel:8200-394-360">8200-394-360</a>
          </div>
        </div>
        <div className="line"></div>
      </div>
    </>
>>>>>>> 17a9c27b9fc6430c6cb85afe415d552926dc086a
  );
};

export default Contact;
