import React from "react";
import "./services.css";
import imagen1 from "../images/grupo7.png";
import imagen2 from "../images/grupo_5.png";
import imagen3 from "../images/grupo_4.png";
import imagen4 from "../images/grupo_1.png";
import imagen5 from "../images/grupo_8.png";
import imagen6 from "../images/grupo_2.png";

const Services = () => {
  return (
    <div className="wrapper services-grid">
      <img src={imagen1} alt="" />
      <img src={imagen2} alt="" />
      <img src={imagen3} alt="" />
      <img src={imagen4} alt="" />
      <img src={imagen5} alt="" />
      <img src={imagen6} alt="" />
    </div>
  );
};

export default Services;
