import React, { useState, useEffect } from "react";
import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner";
import SpinningLogo from "../../components/spinning-logo/SpinningLogo";
import "./AgeVerification.scss";

const AgeVerification = ({ onAgeVerified }) => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const ageVerified = localStorage.getItem("ageVerified");
    if (!ageVerified) {
      setShowModal(true);
    } else {
      onAgeVerified();
    }
  }, [onAgeVerified]);

  const handleYes = () => {
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem("ageVerified", "true");
      setShowModal(false);
      setLoading(false);
      onAgeVerified();
    }, 2000);
  };

  const handleNo = () => {
    alert("You must be at least 18 years old to access this site.");
  };

  return (
    <>
      {loading ? (
        <div className="loading-container">
          {/* <LoadingSpinner /> */}
          <SpinningLogo />
        </div>
      ) : (
        <div className="age-verification-container">
          <div>
            <div className="overlay"></div>
            <video
              autoPlay="autoplay"
              loop="loop"
              muted
              className="video-background"
            >
              <source src="/Agave 7.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {showModal && (
            <div className="age-verification-overlay">
              <div className="age-verification-modal">
                <div className="age-verification-info">
                  <div className="age-verification-left">
                    <img
                      className="age-verification-logo"
                      src="./logo.png"
                      alt=""
                    />
                    <h2>ARE YOU OF LEGAL DRINKING AGE?</h2>
                    <button
                      className="age-verification-button"
                      onClick={handleYes}
                    >
                      Yes
                    </button>
                    <button
                      className="age-verification-button"
                      onClick={handleNo}
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default AgeVerification;
