import React, { useState, useEffect } from "react";
import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner";
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
        }, 5000);
    };

    const handleNo = () => {
        alert("You must be at least 18 years old to access this site.");
    };

    return (
        <div className="age-verification-container">
            {loading ? (
                <LoadingSpinner />
            ) : (
                <>
                    {showModal && (
                        <div className="age-verification-overlay">
                            <div className="age-verification-modal">
                                <div className="age-verification-info">
                                    <div className="age-verification-left">
                                        <img className="age-verification-logo" src="./logo.png" alt="" />
                                        <h2>ARE YOU OF LEGAL DRINKING AGE?</h2>
                                        <button className="age-verification-button" onClick={handleYes}>
                                            Yes
                                        </button>
                                        <button className="age-verification-button" onClick={handleNo}>
                                            No
                                        </button>
                                    </div>
                                    {/* <div className="age-verification-right"></div> */}
                                </div>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default AgeVerification;
