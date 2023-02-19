import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import Container from "../styled/Container";
export default function Sliders({ data }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    cssEase: "linear",
  };
  return (
    <Container class1="home-wrapper-1 py-5">
      <div className="row">
        <div className="col-6">
          <Slider {...settings}>
            {data.map((slider) => {
              return (
                <div className="main-banner position-relative ">
                  <img
                    src={slider.image}
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="main-banner-content position-absolute text-white">
                    <h4>{slider.subtitle}</h4>
                    <h5>{slider.title}</h5>
                    <p>{slider.small_text}</p>
                    <Link href={"/"} className="button">
                      BUY NOW
                    </Link>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

        <div className="col-6">
          <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
            <div className="small-banner position-relative">
              <img
                src="images/catbanner-01.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="small-banner-content position-absolute">
                <h4>Best Sake</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>
                  From $999.00 <br /> or $41.62/mo.
                </p>
              </div>
            </div>
            <div className="small-banner position-relative">
              <img
                src="images/catbanner-02.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="small-banner-content position-absolute">
                <h4>NEW ARRIVAL</h4>
                <h5>But IPad Air</h5>
                <p>
                  From $999.00 <br /> or $41.62/mo.
                </p>
              </div>
            </div>
            <div className="small-banner position-relative ">
              <img
                src="images/catbanner-03.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="small-banner-content position-absolute">
                <h4>NEW ARRIVAL</h4>
                <h5>But IPad Air</h5>
                <p>
                  From $999.00 <br /> or $41.62/mo.
                </p>
              </div>
            </div>
            <div className="small-banner position-relative ">
              <img
                src="images/catbanner-04.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="small-banner-content position-absolute">
                <h4>NEW ARRIVAL</h4>
                <h5>But IPad Air</h5>
                <p>
                  From $999.00 <br /> or $41.62/mo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
