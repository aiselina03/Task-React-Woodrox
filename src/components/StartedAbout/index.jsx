import React from "react";
import "./style.scss";
function StartedAbout() {
  return (
    <>
      <div className="startedAbout">
        <div className="aboutContainer">
          <div className="about">
            <div className="textAbout">
              <h6>BRAND NEW APP TO BLOW YOUR MIND</h6>
              <h3>
                WE’VE MADE A LIFE <br />
                THAT WILL CHANGE YOU
              </h3>
              <h5>We are here to listen from you deliver exellence</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br />
                sed do eiusmod tempor incididunt ut labore et dolore magna
                <br />
                aliqua. Ut enim ad minim.
              </p>
              <button>GET STARTED NOW</button>
            </div>
            <div className="imgAbout">
              <img
                src="https://preview.colorlib.com/theme/woodrox/img/about-1.jpg.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StartedAbout;
