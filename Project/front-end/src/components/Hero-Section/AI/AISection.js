import React, { useEffect, useState } from "react";

const AISection = () => {
  const [isVisible, setIsVisible] = useState(false);


  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const aiSection = document.querySelector(".ai-section");
    const aiSectionTop = aiSection.getBoundingClientRect().top;

    if (aiSectionTop - windowHeight < 0) {
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
    <section className={`ai-section ${isVisible ? "visible" : ""}`}>
      <div className="ai-container">
        <div className="ai-image">
          <img src="/photos/ai.png" alt="ai" className="ai-image-wh" />
        </div>
        <div className="ai-content">
          <h1 className="ai-h1">AI Powered</h1>
          <h2 className="ai-h2">
            We use the lates, advanced technology to help you find the right doctor, and help you with all your medical needs.
          </h2>
          <p className="ai-p">
            Our AI is trained to help you with all your medical needs. It can help you find the right doctor, 
            and help you with all your medical needs, including diagnosing and curing illnesses.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AISection;
