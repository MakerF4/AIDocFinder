import React from "react";
import StyledButton from "../Components/StyledButton";
import TypewriterComponent from "typewriter-effect";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container-hero">
        <div className="hero-content">
          {/* Hero text content */}
          <div className="hero-text">
            <span>
              <h1 className="hero-h1">Find Your Ideal Healthcare</h1>
              <h2 className="hero-h2">
                <TypewriterComponent
                  options={{
                    strings: [
                      "Partner.",
                      "Provider.",
                      "Professional.",
                      "Doctor.",
                      "Specialist.",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>
            </span>
            <p className="hero-p">
              Discover and connect with top-notch healthcare professionals
              tailored to your needs. Simplify your search for the perfect
              doctor, whether for routine check-ups or specific health concerns.
            </p>
            <StyledButton />
          </div>

          {/* Hero image */}
          <div className="hero-image">
            <img
              src="photos/hero.png"
              alt="hero"
              width={650}
              height={460}
              className="hero-image-wh"
            />
          </div>
        </div>
      </div>
      {/* Counters Section */}
      <section className="counters-section">
        <div className="counters-container">
          <div className="counter">
            <span className="counter-number">30+</span>
            <span className="counter-label">Years of Experience</span>
          </div>
          <div className="counter">
            <span className="counter-number">99.9%</span>
            <span className="counter-label">Customer Satisfaction</span>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
