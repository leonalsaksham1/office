import React, { useEffect, useRef, useState } from "react";
import { Contact } from "../../components/contact";
import JsonData from "../../data/data.json";
import { Image } from "../../components/image";
import { AboutContact } from "../../components/contact-detail";

const Contactpage = () => {
 

  return (
    <div style={{ backgroundColor: "#ddd" }}>
      <div className="container mt-10">
        <AboutContact data={JsonData.ContactDetail} />
      </div>
    </div>
  );
};

export default Contactpage;
