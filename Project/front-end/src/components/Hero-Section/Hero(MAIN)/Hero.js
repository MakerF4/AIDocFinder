import React from "react";
import "../styles.css";
import AISection from "../AI/AISection";
import HeroSection from "./HeroSection";
import CardsSection from "../Cards/CardsSection";
import News from "../News/News";

const Hero = () => {
  return (
    <div className="main">
      {/* Hero section */}
      <HeroSection />

      {/* Cards section */}
      <CardsSection />

      {/* AI Section */}
      <AISection />

      {/* News section */}
      <News />
    </div>
  );
};

export default Hero;
