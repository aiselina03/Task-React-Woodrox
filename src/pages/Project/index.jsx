import React from "react";
import Navbar from "../../layout/Navbar";
import "./style.scss";
import { Link } from "react-router-dom";
import Photos from "../../components/Photos";

function Project() {
  return (
    <>
      <div className="projectPage">
        <Navbar />
        <div className="projectText">
          <h1>PROJECTS </h1>
          <div className="pageLink">
            <Link to="/">Home</Link>
            <i class="fa-solid fa-arrow-right-long"></i>
            <Link to="/project">Projects</Link>
          </div>
        </div>
      </div>
      <div className="phototext">
        <h1>LATEST COMPLETED PROJECTS</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna <br />
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </p>
      </div>
      <Photos />
    </>
  );
}

export default Project;
