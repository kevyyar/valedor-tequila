import React from "react";
import "./SpinningLogo.scss";
import { logo } from "../../assets/images";

const SpinningLogo = () => {
  const text = "Welcome To The New Era".split("");

  return (
    <div className="container">
      <img src={logo} className="logo" />
      <svg
        className="rotatingText"
        viewBox="0 0 400 400" // Increasing the size of SVG
        width="400"
        height="400"
      >
        <defs>
          <path
            id="circle"
            d="M 200, 200 m -150, 0 a 150, 150 0 1, 0 300, 0 a 150, 150 0 1, 0 -300, 0" // Increasing the size of path
          ></path>
        </defs>
        <text width="800">
          <textPath
            alignmentBaseline="middle"
            startOffset="50%"
            xlinkHref="#circle"
            className="text"
          >
            {text.map((char, index) => (
              <tspan key={index}>{char}</tspan>
            ))}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default SpinningLogo;
