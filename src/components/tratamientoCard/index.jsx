import React from "react";
import './TratamientoCard.css'
const TratamientoCard = ({ titulo, bodyHtml }) => {
  return (
    <div className="card card-tratamiento shadow-sm">
      <div className="card-body">
        <h5 className="card-title text-danger  mb-3">{titulo}</h5>
        <div
          className="card-text text-secondary"
          dangerouslySetInnerHTML={{ __html: bodyHtml }}
        />
      </div>
    </div>
  );
};

export default TratamientoCard;
