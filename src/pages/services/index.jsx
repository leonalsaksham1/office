import React, { useEffect, useRef, useState } from "react";
import { Services } from "../../components/services";
import JsonData from "../../data/data.json";
import { Image } from "../../components/image";
import { AboutService } from "../../components/services-detail";

const Servicepage = () => {
 

  return (
    <div>
      
    
      <div className="container mb-10 mt-10">
        <div className="modal-gallery ">
        <AboutService data={JsonData.ServiceDetail} />
        </div>
      </div>
    </div>
  );
};

export default Servicepage;
