// Showcase.js
import React from "react";
import "./ShowcaseHero.scss";

const Showcase = () => {
  return (
    <section id="showcase" class="showcase">
      <div class="container">
        <div class="info">
          <h1>Discover the Bold Taste of Valedor Tequila</h1>
          <p>Savor the rich flavors of Valedor Tequila, crafted from the finest agave plants and matured to perfection. From smooth sipping to bold shots, our Tequila offers a complex taste profile that is sure to please even the most discerning palates. Experience the Valedor difference today</p>
        </div>
        <div class="image">
          <img src="./tequila-bottle.png" alt="Tequila Bottle" />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
