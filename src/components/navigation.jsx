import { UsersRound } from "lucide-react";
import { Mail } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import logo from "../img/logo.png"; // Updated pathb

export const Navigation = (props) => {
  const [scrolled, setScrolled] = useState(false);
  const [hideTop, setHideTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
        setHideTop(true);
      } else {
        setScrolled(false);
        setHideTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="menu"
      className={`navbar navbar-default navbar-fixed-top scrolled p-0 ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className={``}>
        <div className="top-top-nav">
          <div className="container">
            <div className="top-top-div">
              <a href="#">English,</a>
              <a href="#">Nepali</a>
              <a href="#"></a>
              <a href="#">Admin</a>
              <a href="#"></a>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className={`container navbar-top `}>
            <div className="navbar-top-wrapper">
              <Link
                className="navbar-brand page-scroll"
                style={{ padding: "0px" }}
                to="/"
              >
                <img
                  src={"img/logo.png"}
                  alt="logo"
                  style={{ width: "76px", height: "76px" }}
                />
              </Link>
              <h3>
                Softech <br />
                AI + technology{" "}
              </h3>
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {/* <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a
            className="navbar-brand page-scroll"
            style={{ padding: "0px" }}
            href="#page-top"
          >
            <img
              src={"img/logo.png"}
              alt="logo"
              style={{ width: "60px", height: "60px" }}
            />
          </a>{" "}
        </div> */}

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right navbar-wrapper">
            <li>
              <Link to="/" className="page-scroll">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1.4em"
                  width="1.4em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="36"
                    d="M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212"
                  ></path>
                  <path
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="36"
                    d="M480 256 266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"
                  ></path>
                </svg>
              </Link>
            </li>

            <li>
              <a href="/about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="/features" className="page-scroll">
                Features
              </a>
            </li>
            <li>
              <a href="/services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="/gallery" className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a href="/testimonials" className="page-scroll">
                Testimonials
              </a>
            </li>
            <li>
              <a href="/team" className="page-scroll">
                <UsersRound />
              </a>
            </li>
            <li>
              <a href="/contact" className="page-scroll">
                <Mail />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
