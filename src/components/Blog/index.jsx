import React from "react";

function Blog({ img }) {
  return (
    <>
      <div className="post">
        <img src={img} alt="" />
        <button className="travelBtn">Travel</button>
        <button className="styleBtn">Life style</button>
        <h4>LOW COST ADVERTISING</h4>
        <p>
          Acres of Diamonds… you’ve read the famous story, or at least had it
          related to you A farmer.
        </p>
        <span>31st January, 2018</span>
      </div>
    </>
  );
}

export default Blog;
