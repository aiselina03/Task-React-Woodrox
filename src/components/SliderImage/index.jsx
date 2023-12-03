import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
import React from "react";

function SliderImage() {
  const settings = {
    initialSlide: 0,
    autoplay: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <>
      <div className="slider">
        <Slider {...settings}>
          <div className="photo">
            <img
              src="https://preview.colorlib.com/theme/woodrox/img/clients-logo/c-logo-1.png.webp"
              alt=""
            />
          </div>
          <div className="photo">
            <img
              src="https://preview.colorlib.com/theme/woodrox/img/clients-logo/c-logo-2.png.webp"
              alt=""
            />
          </div>
          <div className="photo">
            <img
              src="https://preview.colorlib.com/theme/woodrox/img/clients-logo/c-logo-3.png.webp"
              alt=""
            />
          </div>
          <div className="photo">
            <img
              src="https://preview.colorlib.com/theme/woodrox/img/clients-logo/c-logo-4.png.webp"
              alt=""
            />
          </div>
          <div className="photo">
            <img
              src="https://preview.colorlib.com/theme/woodrox/img/clients-logo/c-logo-5.png.webp"
              alt=""
            />
          </div>
          <div className="photo">
            <img
              src="https://preview.colorlib.com/theme/woodrox/img/clients-logo/c-logo-1.png.webp"
              alt=""
            />
          </div>
          <div className="photo">
            <img
              src="https://preview.colorlib.com/theme/woodrox/img/clients-logo/c-logo-2.png.webp"
              alt=""
            />
          </div>
          <div className="photo">
            <img
              src="https://preview.colorlib.com/theme/woodrox/img/clients-logo/c-logo-3.png.webp"
              alt=""
            />
          </div>
          <div className="photo">
            <img
              src="https://preview.colorlib.com/theme/woodrox/img/clients-logo/c-logo-4.png.webp"
              alt=""
            />
          </div>
          <div className="photo">
            <img
              src="https://preview.colorlib.com/theme/woodrox/img/clients-logo/c-logo-5.png.webp"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default SliderImage;
