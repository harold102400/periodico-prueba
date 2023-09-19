import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <nav>
      <Link to="/" className="title">
        Portada
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/about">Internacional</NavLink>
        </li>
        <li>
          <NavLink to="/services">Cultura</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Deporte</NavLink>
        </li>
        <li>
          <NavLink to="/about">Economia</NavLink>
        </li>
        <li>
          <NavLink to="/services">Gente</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Politica</NavLink>
        </li>
        <li>
          <NavLink to="/about">Sociedad</NavLink>
        </li>
        <li>
          <NavLink to="/services">Tecnologia</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Turismo</NavLink>
        </li>
      </ul>
    </nav>
  );
};