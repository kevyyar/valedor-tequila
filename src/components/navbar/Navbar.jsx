// Navbar.js
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.scss";
// import "../spinning-logo/SpinningLogo.scss";
import { CgMenuLeftAlt } from "react-icons/cg";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

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

  return (
    <nav className={scrolling ? "navbar navbar-scroll" : "navbar"}>
      <div className="navbar-container">
        <div
          className={
            scrolling
              ? "logo-container logo-container-scroll"
              : "logo-container"
          }
        ></div>
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
              Inicio
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
              Quienes Somos
            </Link>
          </li>
          <Link
            className="circle"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            offset={-130}
          >
            <div className="logo"></div>
          </Link>
          <li>
            <Link
              activeClass="active"
              to="gallery"
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
            >
              Galeria
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
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
