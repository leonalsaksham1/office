import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2 style={{ color: "#12403F" }}>What our clients say</h2>
        </div>
        {/* <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      {" "}
                      <img src={d.img} alt="" />{" "}
                    </div>
                    <div className="testimonial-content">
                      <p>"{d.text}"</p>
                      <div className="testimonial-meta"> - {d.name} </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div> */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 1600,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: false }}
          className="service-swiper"
        >
          {props.data
            ? props.data.map((d, i) => (
                <SwiperSlide className="" key={`${d.name}-${i}`}>
                  <div className="">
                    <div className="testimonial">
                      <div className="testimonial-image">
                        {" "}
                        <img src={d.img} alt="" />{" "}
                      </div>
                      <div className="testimonial-content">
                        <p>"{d.text}"</p>
                        <div className="testimonial-meta"> - {d.name} </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            : "loading"}
        </Swiper>
      </div>
    </div>
  );
};
