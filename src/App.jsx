import React from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Schools from "./components/Schools";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <div className="hero-container">
        <div className="fondo-recurso">
          <div className="model">
            <Hero />
          </div>
        </div>
      </div>
      <div className="services-container">
        <Services />
      </div>
      <div className="school-container">
        <Schools />
      </div>
      <Footer />
    </>
  );
};

export default App;
