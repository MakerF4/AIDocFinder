import React from "react";

const Card = ({ title, content, imageSrc }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt="" className="card-image" />
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;
