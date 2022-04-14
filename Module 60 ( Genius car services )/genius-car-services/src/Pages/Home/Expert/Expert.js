import React from "react";
import "./Expert.css";

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 expert-container">
      <img className="img-fluid" src={img} alt="expert" />
      <h3 className="my-2">Name: {name}</h3>
    </div>
  );
};

export default Expert;
