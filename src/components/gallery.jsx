import { Image } from "./image";
import React, { useState } from "react";
import Modal from "./modal";

export const Gallery = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <div className="button-container">
          <button
            className="btn btn-custom btn-lg page-scroll"
            onClick={openModal}
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
