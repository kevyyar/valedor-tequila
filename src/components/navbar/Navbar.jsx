// Navbar.js
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.scss";
import "../spinning-logo/SpinningLogo.css";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const text = "Welcome To The New Era";
  const letters = text.split("");

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={scrolling ? "navbar navbar-scroll" : "navbar"}>
      <div className="navbar-container">
        <div className={scrolling ? "logo-container logo-container-scroll" : "logo-container"}>
          {/* <div className="circle">
            <div className="logo"></div>
            <div className="text">
              <p>
                {letters.map((char, i) => (
                  <span
                    key={i}
                    style={{ transform: `rotate(${i * 15.5}deg)` }}
                  >
                    {char}
                  </span>
                ))}
              </p>
            </div>
          </div> */}
        </div>
        <ul className="navbar-links">
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              offset={-145}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-160}
            >
              About
            </Link>
          </li>
          <div className="circle">
            <div className="logo"></div>
            {/* <div className="text">
              <p>
                {letters.map((char, i) => (
                  <span
                    key={i}
                    style={{ transform: `rotate(${i * 15.5}deg)` }}
                  >
                    {char}
                  </span>
                ))}
              </p>
            </div> */}
          </div>
          <li>
            <Link
              activeClass="active"
              to="gallery"
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
