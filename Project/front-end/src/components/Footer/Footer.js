import React from 'react'
import './styles.css'

const Footer = () => {
  return (
    <div className= "footer">
      <div className= "sb_footer section padding">
        <div className= "sb_footer-links">
          <div className="sb_footer-links_div">
            <h4>Links</h4>
            <a href= "Home">
              <p>Home</p>
            </a>
            <a href= "doctor">
              <p>Find Doctors</p>
            </a>
            <a href= "UserProfile">
              <p>Profile</p>
            </a>
            <a href= "contact">
              <p>Contact Us</p>
            </a>
            <a href= "about">
              <p>About</p>
            </a>
            <a href= "faq">
              <p>FAQ</p>
            </a>
            <a href= "reviews">
              <p>REVIEWS</p>
            </a>
            <a href= "signup">
              <p>Sign Up</p>
            </a>
            <a href= "login">
              <p>Log In</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Legal</h4>
            <a href= "TermsCon">
              <p>Terms & Conditions</p>
            </a>
            <a href= "Privacy">
              <p>Privacy Policy</p>
            </a>
            <a href= "TermsUse ">
              <p>Terms of Use</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>DOC</h4>
              <a href= "TermsUse ">
              <p>Logo Name</p>
            </a>
            <a href= "TermsUse ">
              <p>Logo Picture</p>
            </a>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>
              @{new Date().getFullYear()} DOC | All rights reserved. DOC provides general advice and is not to be used as a replacement for a doctor.
            </p>
          </div>
        </div>
      </div>
  )
}
export default Footer;
