import React from "react";
import "../Card/card.scss";

const Card = ({ title, cover }) => {
  return (
    <div className="card">
      <img src={cover} alt={title} />
      <div className="card_title">
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default Card;
