import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <body>
        <div className="inicio">
          <div className="head">
            <nav className="navbar">
              <Link className="test" to="/login">
                <a className="sesion">Iniciar Sesiòn</a>
              </Link>
            </nav>
          </div>

          <header className="content header">
            <h2 className="title">Bienvenido</h2>
            <p>
              Bienvenido al sistema contable, para iniciar sesiòn dirìgase al
              botòn iniciar sesiòn que se encuentra en la parte superior
              izquierda de la pàgina
            </p>
          </header>
          <section className="content sau">
            <h2 className="title">Funciones</h2>
            <div className="box-container">
              <div className="box">
                <i className="fab fa-angular"></i>
                <h3>Contabilidad</h3>
                <p>Funciones respectivas a la contabilidad</p>
              </div>
              <div className="box">
                <i className="fab fa-apple"></i>
                <h3>Registros de Cuentas</h3>
                <p>Llevar registro de las diferentes tipos de cuentas</p>
              </div>
              <div className="box">
                <i className="fab fa-android"></i>
                <h3>Reportes de Cuentas</h3>
                <p>Poder crear un reporte de cuentas por medio de PDF</p>
              </div>
            </div>
          </section>
        </div>
      </body>
    </div>
  );
};

export default Home;
