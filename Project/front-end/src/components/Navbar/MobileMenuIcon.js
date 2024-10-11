import React from "react";

const MobileMenuIcon = ({ isMobileMenuOpen, toggleMobileMenu }) => (
  <div className="menu-icon" onClick={toggleMobileMenu}>
    <div className={`bar ${isMobileMenuOpen ? "bar-open" : ""}`}></div>
    <div className={`bar ${isMobileMenuOpen ? "bar-open" : ""}`}></div>
    <div className={`bar ${isMobileMenuOpen ? "bar-open" : ""}`}></div>
  </div>
);

export default MobileMenuIcon;
