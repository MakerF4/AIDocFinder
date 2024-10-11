import React, { useRef, useEffect, useState, useCallback } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Newsletter = ({ onClose, isActive }) => {
  const modalRef = useRef(null);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(false);

  useEffect(() => {
    const isValid = validateEmail(email);
    setIsEmailValid(isValid);
    setSubmitDisabled(!isValid);
  }, [email]);

  const handleClickOutside = useCallback(
    (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:3001/subscribe", { email })
      .then((response) => {
        toast.success("Email saved successfully! We've sent you a confirmation email.");
        console.log(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          toast.error("Email already subscribed!");
        } else {
          toast.error("Failed to save email!");
        }
        console.error("Error:", error);
      });
  };

  return (
    <div className={`newsletter-overlay ${isActive ? "active" : ""}`}>
      <Toaster reverseOrder={false} />
      <div
        className={`subscribe ${submitDisabled ? "submit-disabled" : ""}`}
        ref={modalRef}
      >
        <button className="close-btn" onClick={onClose}>
          X
        </button>

        <p>SUBSCRIBE</p>
        <h5 className="newsletter-h5">
          Subscribe to our newsletter and stay up-to-date!
        </h5>
        <input
          placeholder="Your e-mail"
          className="subscribe-input"
          name="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
        <br></br>
        <button
          className="submit-btn"
          onClick={handleSubmit}
          disabled={!isEmailValid}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
