import React from "react";

const SubscribeButton = ({ onSubscribeClick }) => {
  return (
    <button className="Btn" onClick={onSubscribeClick}>
      <div className="sign">
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zM48 106c3.313 0 6 2.687 6 6v16.2l200 124.8 200-124.8V112c0-3.313 2.687-6 6-6s6 2.687 6 6v300c0 3.313-2.687 6-6 6H48c-3.313 0-6-2.687-6-6V112c0-3.313 2.687-6 6-6zm0 42.1v249.8L228.4 256 48 148.1zm416 249.8V148.1L283.6 256 464 397.9z" />
        </svg>
      </div>
      <div className="text">Subscribe</div>
    </button>
  );
};

export default SubscribeButton;
