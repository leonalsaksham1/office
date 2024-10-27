import React, { useEffect, useRef, useState } from "react";
import { Testimonials } from "../../components/testimonials";
import JsonData from "../../data/data.json";
import { Image } from "../../components/image";
import { AboutTestimonials } from "../../components/testimonials-detail";

const Testimonialpage = () => {
 

  return (
    <div>
      
    
      <div className="container mb-10 mt-10">
        <div className="modal-gallery ">
        <AboutTestimonials data={JsonData.TestimonialsDetail} />
        </div>
      </div>
    </div>
  );
};

export default Testimonialpage;
