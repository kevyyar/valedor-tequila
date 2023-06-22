import ImageSlider from "../image-slider/ImageSlider";
import "./About.scss";

const About = () => {
  return (
      <div className="about-container">
        <div className="about-info">
          <h1>Esto es CASA VALEDOR</h1>
          <p>
          Uno de nuestros principales objetivos es ser una empresa tequilera líder del mercado moderno para beneficiar a los consumidores de la mejor manera posible, degustando el exquisito sabor del mejor tequila cristalino. Somos creadores de una marca intuitiva y moderna que nuestro sabor se caracteriza por tener esas notas frutales y amaderadas perfectamente seleccionadas para el paladar.
          </p>
        </div>
        <div className="about-slider">
        <ImageSlider />
        </div>
      </div>
  );
};

export default About;
