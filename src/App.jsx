import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Showcase from './components/showcase-hero/ShowcaseHero';
import AgeVerification from './pages/age-verification/AgeVerification';

import "./App.css"

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
              <h1>HOME SECTION!</h1>
              quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
            </section>

            <section id="about">
              <h1>ABOUT SECTION</h1>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.</section>
            <section id="contact">
              <h1>CONTACT</h1>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
            </section>
            <section id="gallery">
              <h1>GALLERY</h1>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum quidem incidunt corporis itaque quos distinctio voluptatum, cupiditate non quisquam.
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
