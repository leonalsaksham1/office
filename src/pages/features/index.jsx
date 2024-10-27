import React, { useEffect, useRef, useState } from "react";
import { Features } from "../../components/features";
import JsonData from "../../data/data.json";
import { Image } from "../../components/image";
import { AboutFeatures } from "../../components/features-detail";

const Featurepage = () => {
 

  return (
    <div>
      <div className="container mb-10 mt-10">
        <div className="modal-gallery ">
        <AboutFeatures data={JsonData.FeaturesDetail} />
        </div>
      </div>
    </div>
  );
};

export default Featurepage;
