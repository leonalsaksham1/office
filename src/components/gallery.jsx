import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2 style={{ color: "#2B4F56" }}>Gallery</h2>
          
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
        {/* Adding the "See More" button */}
        <div className="button-container" style={{ marginTop: "20px" }}>
          <button
            style={{
              backgroundColor: "#2B4F56",
              border: "none",
              borderRadius: "30px",
              color: "#fff",
              padding: "16px 16px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            See More
          </button>
        </div>
      </div>
    </div>
  );
};
