import "../Header/header.scss";
import Logo from "../../assets/Logo.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <NavLink to={"/"} className="header__logo">
        <img src={Logo} alt="Logo" />
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="nav_link">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav_link">
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
