import React, { useEffect } from "react";
import Typed from "typed.js";

export const Header = (props) => {
  useEffect(() => {
    if (props.data) {
      const options = {
        strings: [props.data.title],
        typeSpeed: 60,
        backSpeed: 25,
        loop: true,
      };
      const typed = new Typed("#typed", options);
      return () => {
        typed.destroy();
      };
    }
  }, [props.data]);

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1 className="header-title-text">
                  <span id="typed"></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <br />
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
