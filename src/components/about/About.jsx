import ImageSlider from "../image-slider/ImageSlider";
import "./About.scss";

const About = () => {
  return (
      <div className="about-container">
        <div className="about-info">
          <h1>Welcome to Paradise!</h1>
          <p>
          We are proud to offer some of the best Tequila in the market, made from the finest agave plants in the heart of Mexico. Our Tequila is made with utmost care and expertise, ensuring that every bottle is matured to perfection before it reaches your hands. From farm to bottle, we track every step of the process, guaranteeing that our Tequila is of the highest quality.
          </p>
        </div>
        <div className="about-slider">
        <ImageSlider />
        </div>
      </div>
  );
};

export default About;
