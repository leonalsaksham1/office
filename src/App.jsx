import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import Achievements from "./components/counter-section";
import GalleryPage from "./pages/gallery";
import Aboutpage from "./pages/about";
import Servicepage from "./pages/services";
import Featurepage from "./pages/features";
import Testimonialpage from "./pages/testimonials";
import Teamspage from "./pages/teams";
import Contactpage from "./pages/contact";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header data={landingPageData.Header} />
              <About data={landingPageData.About} />
              <Features data={landingPageData.Features} />
              <Services data={landingPageData.Services} />
              <Gallery data={landingPageData.Gallery} />
              <Testimonials data={landingPageData.Testimonials} />
              <Achievements />
              <Team data={landingPageData.Team} />
            </>
          }
        />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/services" element={<Servicepage />} />
        <Route path="/features" element={<Featurepage />} />
        <Route path="/testimonials" element={<Testimonialpage />} />
        <Route path="/team" element={<Teamspage />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
