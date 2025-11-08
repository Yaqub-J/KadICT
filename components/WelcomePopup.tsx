'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function WelcomePopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has seen the popup before (in this session)
    const hasSeenPopup = sessionStorage.getItem('hasSeenWelcomePopup');

    if (!hasSeenPopup) {
      // Show popup after a short delay (1 second)
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    sessionStorage.setItem('hasSeenWelcomePopup', 'true');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="popup-backdrop" onClick={closePopup}></div>

      {/* Popup */}
      <div className="welcome-popup">
        <button className="popup-close" onClick={closePopup} aria-label="Close popup">
          <i className="bi bi-x-lg"></i>
        </button>

        <div className="popup-content">
          <div className="popup-icon">
            <i className="bi bi-rocket-takeoff"></i>
          </div>

          <h2>Welcome to KAD ICT Hub!</h2>
          <p className="popup-subtitle">Transform Your Future with Technology</p>

          <div className="popup-features">
            <div className="popup-feature">
              <i className="bi bi-check-circle-fill"></i>
              <span>Expert-Led Training Programs</span>
            </div>
            <div className="popup-feature">
              <i className="bi bi-check-circle-fill"></i>
              <span>Online & On-Site Courses</span>
            </div>
            <div className="popup-feature">
              <i className="bi bi-check-circle-fill"></i>
              <span>Industry Certifications</span>
            </div>
            <div className="popup-feature">
              <i className="bi bi-check-circle-fill"></i>
              <span>20,000+ Students Trained</span>
            </div>
          </div>

          <div className="popup-cta">
            <Link href="/register" className="popup-btn popup-btn-primary" onClick={closePopup}>
              <i className="bi bi-person-plus"></i>
              Register Now
            </Link>
            <Link href="/programs" className="popup-btn popup-btn-secondary" onClick={closePopup}>
              <i className="bi bi-mortarboard"></i>
              View Courses
            </Link>
          </div>

          <p className="popup-note">
            Start your tech journey today with Nigeria's premier ICT training hub!
          </p>
        </div>
      </div>
    </>
  );
}
