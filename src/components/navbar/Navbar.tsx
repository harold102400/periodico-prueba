import { useState } from "react";

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
          <NavLink to="/internacional">Internacional</NavLink>
        </li>
        <li>
          <NavLink to="/estilo">Cultura</NavLink>
        </li>
        <li>
          <NavLink to="/deporte">Deporte</NavLink>
        </li>
        <li>
          <NavLink to="/economia">Economia</NavLink>
        </li>
        <li>
          <NavLink to="/opinion">Gente</NavLink>
        </li>
        <li>
          <NavLink to="/nacionales">Politica</NavLink>
        </li>
        <li>
          <NavLink to="/entretenimiento">Sociedad</NavLink>
        </li>
        <li>
          <NavLink to="/tecnologia">Tecnologia</NavLink>
        </li>
        <li>
          <NavLink to="/turismo">Turismo</NavLink>
        </li>
      </ul>
    </nav>
  );
};