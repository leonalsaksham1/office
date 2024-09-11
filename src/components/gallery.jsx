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
              ? props.data
                  .slice(0, 6) // Display only 6 images
                  .map((d, i) => (
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
        {/* Adjusting the "See More" button */}
        <div
          className="button-container"
          style={{
            marginTop: "10px", // Adjust this to move it closer to the images
            paddingBottom: "50px", // Added padding at the bottom to prevent it from touching the next section
            position: "relative",
            width: "100%",
          }}
        >
          <button
            style={{
              backgroundColor: "#2B4F56",
              border: "none",
              borderRadius: "30px",
              color: "#fff",
              padding: "16px 16px",
              fontSize: "18px",
              cursor: "pointer",
              position: "absolute",
              right: "-16", // Aligns to the right
            }}
          >
            See More
          </button>
        </div>
      </div>
    </div>
  );
};
