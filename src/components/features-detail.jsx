import React from "react";
import { useIntersectionObserver } from "./useIntersectionObserver";

export function AboutFeatures({ data }) {
  const [targetRef, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      id="features"
      ref={targetRef}
      className={`text-center features-animate ${
        isIntersecting ? "animate" : ""
      }`}
    >
      <div className="container mb-10 mt-10">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2 style={{ color: "#12403F" }}>Features</h2>
        </div>
        <div className="row">
          {data
            ? data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
}
