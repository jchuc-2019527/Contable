import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <Link to='/tareas' >
      <button  className="hola">
        Pagina Principal
      </button>
      </Link>
    </nav>
  );
}

export default Navbar;