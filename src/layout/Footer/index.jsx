import React from "react";
import "./style.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="foot">
          <div className="about">
            <h3>ABOUT ME</h3>
            <p>
              Do you want to be even more successful? Learn to love learning and
              growth. The more effort you put into improving your skills.
            </p>
            <p>
              Copyright ©2023 All rights reserved | This template is made with
              by
              <a href="https://colorlib.com/"> Colorlib</a>
            </p>
          </div>
          <div className="newsletter">
            <h3>NEWSLETTER</h3>
            <p>Stay updated with our latest trends</p>
            <input type="text" name="" id="" placeholder="Email Address" />
            <button>
              <i class="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
          <div className="follow">
            <h3>FOLLOW ME</h3>
            <p>Let us be social</p>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-dribbble"></i>
            <i class="fa-brands fa-behance"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
