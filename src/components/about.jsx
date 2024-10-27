import React, { useEffect, useRef, useState } from "react";

export const About = (props) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div
      id="about"
      ref={domRef}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      <div className="container">
        <div className="row">
          {/* Swapping the position of the text and image columns */}
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2 style={{ color: "#12403F" }}>About Us</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <img src="img/about.jpg" className="img-responsive" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
