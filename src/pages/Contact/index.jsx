import React from "react";
import Navbar from "../../layout/Navbar";
import "./style.scss";
import { Link } from "react-router-dom";
import ContactInfo from "../../components/ContactInfo";

function Contact() {
  return (
    <>
      <div className="contactPage">
        <Navbar />
        <div className="contactText">
          <h1>CONTACT US</h1>
          <div className="pageLink">
            <Link to="/">Home</Link>
            <i class="fa-solid fa-arrow-right-long"></i>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
      </div>
      <ContactInfo/>
    </>
  );
}

export default Contact;
