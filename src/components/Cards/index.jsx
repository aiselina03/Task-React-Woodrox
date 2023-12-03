import React from "react";
import "./style.scss";
import Card from "../Card";
function Cards() {
  return (
    <>
      <div className="features">
        <div className="featuresContainer">
          <div className="cardsHead">
            <h1>SOME FEATURES THAT MADE US UNIQUE</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna <br />
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
          <div className="cards">
            <Card icon="fa-regular fa-user" title="  EXPERT TECHNICIANS" />
            <Card icon="fa-regular fa-id-card" title="PROFESSIONAL SERVICE" />
            <Card icon="fa-solid fa-phone" title="GREAT SUPPORT" />
            <Card icon="fa-solid fa-rocket" title="TECHNICAL SKILLS" />
            <Card icon="fa-solid fa-gem" title="HIGHLY RECOMENDED" />
            <Card icon="fa-regular fa-comment" title="POSITIVE REVIEWS" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
