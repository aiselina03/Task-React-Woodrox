import React from "react";

function Card({ icon, title }) {
  return (
    <>
      <div className="card">
        <div className="cardhead">
          <i className={icon}></i>
          <h4>{title}</h4>
        </div>
        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
      </div>
    </>
  );
}

export default Card;
