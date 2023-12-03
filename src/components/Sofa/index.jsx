import React from "react";
import "./style.scss";

function Sofa() {
  return (
    <div className="sofa">
      <div className="sofaContainer">

        <div className="sofaHead">
          <h1>MOST POPULAR FURNITURES</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna <br />
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
        <div className="sofaCards">
          <div className="sofa">
            <img
              src="https://preview.colorlib.com/theme/woodrox/img/furniture/furniture-1.jpg.webp"
              alt=""
            />
            <h4>GREEN BUTTER SOFA</h4>
            <p>
              Sony laptops are among the most well known laptops on today’s
              market. Sony is a name that.
            </p>
          </div>
          <div className="sofa">
            <img
              src="https://preview.colorlib.com/theme/woodrox/img/furniture/furniture-2.jpg.webp"
              alt=""
            />
            <h4>GREEN BUTTER SOFA</h4>
            <p>
              Sony laptops are among the most well known laptops on today’s
              market. Sony is a name that.
            </p>
          </div>
          <div className="sofa">
            <img
              src="https://preview.colorlib.com/theme/woodrox/img/furniture/furniture-3.jpg.webp"
              alt=""
            />
            <h4>GREEN BUTTER SOFA</h4>
            <p>
              Sony laptops are among the most well known laptops on today’s
              market. Sony is a name that.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sofa;
