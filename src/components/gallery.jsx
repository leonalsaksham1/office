import { Image } from "./image";
import React, { useState } from "react";
import Modal from "./modal";

export const Gallery = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // State to handle hover

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2 style={{ color: "#12403F" }}>Gallery</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.slice(0, 3).map((d, i) => (
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
        {/* Inline style to change the button size and shape */}
        <div className="button-container" style={{ textAlign: "right" }}>
          <button
            className="btn btn-danger btn-lg page-scroll"
            onClick={openModal}
            style={{
              backgroundColor: isHovered ? "#12403F" : "red",
              color: "white",
              cursor: "pointer",
              borderRadius: "30px", // Adjust border radius for oval shape
              padding: "10px 16px", // Smaller padding for smaller button size
              fontSize: "14px", // Adjust font size to make it smaller
              transition: "background-color 0.3s ease", // Smooth hover transition
              border: "none", // Remove any border
            }}
            onMouseEnter={() => setIsHovered(true)} // Set hover state to true
            onMouseLeave={() => setIsHovered(false)} // Set hover state to false
          >
            See More
          </button>
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <div className="modal-gallery">
            {props.data &&
              props.data.map((d, i) => (
                <Image
                  key={`modal-${d.title}-${i}`}
                  title={d.title}
                  largeImage={d.largeImage}
                  smallImage={d.smallImage}
                />
              ))}
          </div>
        </Modal>
      )}
    </div>
  );
};
