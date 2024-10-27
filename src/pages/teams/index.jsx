import React, { useEffect, useRef, useState } from "react";
import { Team } from "../../components/Team";
import JsonData from "../../data/data.json";
import { Image } from "../../components/image";
import { AboutTeam } from "../../components/Team-detail";

const Teamspage = () => {
 

  return (
    <div>
      
    shahhshahs
      <div className="container mb-10 mt-10">
        <div className="modal-gallery ">
        <AboutTeam data={JsonData.TeamDetail} />
        </div>
      </div>
    </div>
  );
};

export default Teamspage;
