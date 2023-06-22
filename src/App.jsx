import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Showcase from "./components/showcase-hero/ShowcaseHero";
import AgeVerification from "./pages/age-verification/AgeVerification";

import "./App.css";
import About from "./components/about/About";
import Authentic from "./components/authentic/Authentic";
import Gallery from "./components/gallery/Gallery";

const App = () => {
  const [ageVerified, setAgeVerified] = useState(false);

  const handleAgeVerified = () => {
    setAgeVerified(true);
  };
  return (
    <div>
      {ageVerified ? (
        <>
          <Navbar />
          <main className="main-content">
            <section id="home">
              <Showcase />
            </section>
            <section id="about">
              <About />
            </section>
            <section>
              <Authentic />
            </section>
            <section id="gallery">
              <Gallery />
            </section>
          </main>
        </>
      ) : (
        <AgeVerification onAgeVerified={handleAgeVerified} />
      )}
    </div>
  );
};

export default App;
