import React, { useState, useEffect } from "react";
import Card from "./Card";

const CardsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const cardSection = document.querySelector(".card-section");
    const cardSectionTop = cardSection.getBoundingClientRect().top;

    if (cardSectionTop - windowHeight < 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={`card-section ${isVisible ? "visible" : ""}`}>
      <h1 className="intro-to-card">What do we offer?</h1>
      <div className="card-container">
        {/* Card 1 */}
        <Card
          imageSrc="/photos/feature1.svg"
          title="Easy Appointment"
          content="Our service is very easy to use and you can book an appointment in a few clicks!"
        />

        {/* Card 2 */}
        <Card
          imageSrc="/photos/feature2.svg"
          title="Emergency Service"
          content="We provide emergency service for our users!"
        />

        {/* Card 3 */}
        <Card
          imageSrc="/photos/feature3.svg"
          title="24/7 Service"
          content="We are available 24/7 for our users!"
        />
      </div>
    </section>
  );
};

export default CardsSection;
