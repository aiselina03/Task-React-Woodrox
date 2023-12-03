import React from "react";
import Navbar from "../../layout/Navbar";
import "./style.scss";
import { Link } from "react-router-dom";
import Detail from "../../components/Detail";

function ProjectDetails() {
  return (
    <>
      <div className="projectDetailPage">
        <Navbar />
        <div className="projectDetailText">
          <h1>PROJECT DETAILS </h1>
          <div className="pageLink">
            <Link to="/">Home</Link>
            <i class="fa-solid fa-arrow-right-long"></i>
            <Link to="/project">Projects</Link>
            <i class="fa-solid fa-arrow-right-long"></i>
            <Link to="/projectDetails">Project Details</Link>
          </div>
        </div>
      </div>
       <Detail/>
    </>
  );
}

export default ProjectDetails;
