import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { name, img, description, price } = service;
  return (
    <div className="service-container">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <p>{description}</p>
      <h5>Price: {price}</h5>
      <button>Booking-{name}</button>
    </div>
  );
};

export default Service;
