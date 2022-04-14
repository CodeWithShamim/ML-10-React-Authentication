import React from "react";

const Footer = () => {
  const todayDate = new Date();
  const getYear = todayDate.getFullYear();
  return (
    <div>
      <p>Copyright @ {getYear}</p>
    </div>
  );
};

export default Footer;
