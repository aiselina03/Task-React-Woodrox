import React from "react";
import "./style.scss";
import Navbar from "../../layout/Navbar";
import Sofa from "../../components/Sofa";
import Photos from "../../components/Photos";
import Cards from "../../components/Cards";
import BckgImage from "../../components/BckgImage";
import Blogs from "../../components/Blogs";
import SliderImage from "../../components/SliderImage";


function Home() {
  return (
    <>
      <div className="homePage">
        <Navbar />
        <div className="homeContainer">
          <div className="text">
            <h2>
              PRECISE CONCEPT DESIGN <br />
              FOR STYLISH LIVING
            </h2>
            <p>
              If you are looking at blank cassettes on the web, you may be very
              confused at the difference in price. You may see some for as low
              as $.17 each.
            </p>
            <button>Get Started</button>
          </div>
          <div className="icons">
            <div className="homeItem">
              <i class="fa-light fa-loveseat"></i>
            </div>
            <div className="homeItem">
              <i class="fa-light fa-bed-front"></i>
            </div>
            <div className="homeItem">
              <i class="fa-light fa-seat-airline"></i>
            </div>
            <div className="homeItem">
              <i class="fa-sharp fa-light fa-refrigerator"></i>
            </div>
            <div className="item">
              <i class="fa-light fa-oven"></i>
            </div>
            <div className="item">
              <i class="fa-light fa-tv"></i>
            </div>
          </div>
        </div>
      </div>
      <Sofa />
      <Photos />
      <Cards />
      <BckgImage />
      <Blogs/>
      <SliderImage/>
    </>
  );
}

export default Home;
