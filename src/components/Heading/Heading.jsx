//main
import React from "react";

//image
import logo from "../../assets/image.png";
//scss
import "./Heading.scss";

const Heading = () => {
  return (
    <div className="heading-wrapper">
      <img src={logo} alt="covid-19" />
    </div>
  );
};

export default Heading;
