import React, { useState, useEffect } from 'react'
import '../styles.css'

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(true);
  let scrollTimeout;

  const handleScroll = () => {
    if (scrollTimeout) clearTimeout(scrollTimeout);

    setIsVisible(false);
    scrollTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 5000);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  // eslint-disable-next-line
  }, []);

  return (
    <button className={`scroll-btn ${isVisible ? "show" : ""}`}>
      <div className="scroll"> </div>
    </button>
  );
};

export default Scroll;