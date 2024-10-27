import React, { useEffect, useRef, useState } from "react";
import { About } from "../../components/about";
import JsonData from "../../data/data.json";
import { Image } from "../../components/image";
import { AboutDetail } from "../../components/about-detail";

const Aboutpage = () => {
 

  return (
    <div>
      
    
      <div className="container mb-10 mt-10">
        <div className="modal-gallery ">
        <AboutDetail data={JsonData.AboutDetail} />
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
