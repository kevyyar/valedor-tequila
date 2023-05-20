import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

import images from "../../assets/images";
import "./ImageSlider.scss";

const ImageSlider = () => {
  const [carouselWidth, setCarouselWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setCarouselWidth(
      carousel.current.scrollWidth - carousel.current.offsetWidth
    );
  }, []);

  return (
    <motion.div className="imageSlider" ref={carousel}>
      <motion.div
        drag="x"
        dragConstraints={{
          left: -carouselWidth,
          right: 0,
        }}
        className="innerImageSlider"
      >
        {images.map((image, index) => (
          <motion.div key={index} className="item">
            <img src={image} alt="image" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ImageSlider;
