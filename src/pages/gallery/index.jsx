import React, { useEffect, useRef, useState } from "react";
import { Gallery } from "../../components/gallery";
import JsonData from "../../data/data.json";
import { Image } from "../../components/image";

const GalleryPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef(null);
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const currentGallery = galleryRef.current;

    if (currentGallery) {
      observer.observe(currentGallery);
    }

    return () => {
      if (currentGallery) {
        observer.unobserve(currentGallery);
      }
    };
  }, []);

  return (
    <div ref={galleryRef}>
      <h1>Gallery Page</h1>
      {isVisible && <p>Gallery content is visible!</p>}
      <div className="container mb-10">
        <div className="modal-gallery mt-10">
          {landingPageData.Gallery &&
            landingPageData.Gallery.map((d, i) => (
              <Image
                key={`modal-${d.title}-${i}`}
                title={d.title}
                largeImage={d.largeImage}
                smallImage={d.smallImage}
                className="gallery-images"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
