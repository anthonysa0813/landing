import React, { useState } from "react";
import "./hero.css";

const Formulario = () => {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    carrera: "",
  });

  const [error, setError] = useState(null);
  const [access, setAccess] = useState(false);

  // extraerme los datos de mi estado
  const { nombre, telefono, correo, carrera } = form;

  const handleSubmit = (e) => {
    e.preventDefault();

    //validar esos datos
    if (
      !nombre.trim() ||
      !telefono.trim() ||
      !correo.trim() ||
      !carrera.trim()
    ) {
      setError("Campos vacios!!!");
      return;
    }

    setError(null);
    setForm({
      nombre: "",
      telefono: "",
      correo: "",
      carrera: "",
    });
    setAccess(true);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form className="formulario-container" onSubmit={handleSubmit}>
        {access ? (
          <p className="alert-access">Gracias por tu registro</p>
        ) : null}
        {error ? <p className="alert">{error}</p> : null}
        <h1>Tu oportunidad para evolucionar esta aquí</h1>
        <p>Déjanos tus datos para poder iniciar tu proceso de matrícula.</p>
        <div className="input-container">
          <div className="input-icon user"></div>
          <input
            type="text"
            placeholder="Nombre y apellido"
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <div className="input-icon whatsapp"></div>
          <input
            type="text"
            placeholder="Número de celular"
            name="telefono"
            value={telefono}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <div className="input-icon email"></div>
          <input
            type="text"
            placeholder="Correo electrónico"
            name="correo"
            value={correo}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <div className="input-icon select"></div>
          <input
            type="text"
            placeholder="Selecciona tu carrera"
            name="carrera"
            value={carrera}
            onChange={handleChange}
          />
        </div>
        <input type="checkbox" /> He leído la declaración de Protección de Datos
        y acepto el tratamiento de mis datos que se describe en dicho
        formulario.
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Formulario;
