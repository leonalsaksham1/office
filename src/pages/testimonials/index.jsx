import React, { useEffect, useRef, useState } from "react";
import { Testimonials } from "../../components/testimonials";
import JsonData from "../../data/data.json";
import { Image } from "../../components/image";
import { AboutTestimonials } from "../../components/testimonials-detail";

const Testimonialpage = () => {
 

  return (
    <div>
      
    
      <div className="container  mt-10">
        
        <AboutTestimonials data={JsonData.TestimonialsDetail} />
        </div>
      </div>
    
  );
};

export default Testimonialpage;
