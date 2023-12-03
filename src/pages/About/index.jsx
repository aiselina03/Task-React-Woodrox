import React from "react";
import Navbar from "../../layout/Navbar";
import "./style.scss";
import { Link } from "react-router-dom";
import Photos from "../../components/Photos";
import Cards from "../../components/Cards";
import StartedAbout from "../../components/StartedAbout";
import SliderImage from "../../components/SliderImage";

function About() {
  return (
    <>
    <div className="aboutPage">
      <Navbar />
      <div className="aboutText">
        <h1>ABOUT US</h1>
        <div className="pageLink">
          <Link to="/">Home</Link>
          <i class="fa-solid fa-arrow-right-long"></i>
          <Link to="/about">About Us</Link>
        </div>
      </div>
    </div>
 <StartedAbout/>
    <Photos/>
    <Cards/>
    <SliderImage/>
    </>
  );
}

export default About;
