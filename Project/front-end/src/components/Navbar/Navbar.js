import React, { useState } from "react";
import "./styles.css";
import NavigationLink from "./NavigationLink";
import MobileMenuIcon from "./MobileMenuIcon";
import FaqButton from "./FaqButton";

const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/doctor",
    title: "Find Doctors",
  },
  {
    path: "/UserProfile",
    title: "Profile",
  },
  {
    path: "/contact",
    title: "Contact",
  },
  {
    path: "/about",
    title: "About",
  },


];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(window.location.pathname);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    closeMobileMenu();
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className={`container ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
      <a className="logo" href="/">
        <img src="photos/logo.png" width={60} alt="" className="img" />
      </a>
      <MobileMenuIcon
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
      <div className={`navbar ${isMobileMenuOpen ? "navbar-mobile" : ""}`}>
        <div className="links">
          {navLinks.map((link, index) => (
            <NavigationLink
              key={index}
              link={link}
              activeLink={activeLink}
              handleLinkClick={handleLinkClick}
            />
          ))}
        </div>
        <div className="button-navbar">
          <button
            className="btn"
            onClick={() => (window.location.href = "/signup")}
          >
            Sign up
            <div className="arrow-wrapper">
              <div className="arrow"></div>
            </div>
          </button>
          <FaqButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
