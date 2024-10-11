import React from "react";

const NavigationLink = ({ link, activeLink, handleLinkClick }) => (
  <a
    href={link.path}
    className={`links-elements ${activeLink === link.path ? "active" : ""}`}
    onClick={() => handleLinkClick(link.path)}
  >
    {link.title}
  </a>
);

export default NavigationLink;
