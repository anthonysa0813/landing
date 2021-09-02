import React from "react";
import "./hero.css";

const Formulario = () => {
  return (
    <>
      <form className="formulario-container">
        <h1>Tu oportunidad para evolucionar esta aquí</h1>
        <p>Déjanos tus datos para poder iniciar tu proceso de matrícula.</p>
        <div className="input-container">
          <div className="input-icon user"></div>
          <input type="text" placeholder="Nombre y apellido" />
        </div>
        <div className="input-container">
          <div className="input-icon whatsapp"></div>
          <input type="text" placeholder="Número de celular" />
        </div>
        <div className="input-container">
          <div className="input-icon email"></div>
          <input type="text" placeholder="Correo electrónico" />
        </div>
        <div className="input-container">
          <div className="input-icon select"></div>
          <input type="text" placeholder="Selecciona tu carrera" />
        </div>
        <input type="text" />
      </form>
    </>
  );
};

export default Formulario;
