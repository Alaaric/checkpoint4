import { Link } from "react-router-dom";

export default function () {
  return (
    <header>
      <div className="logo">AD{"{OPTION}"}</div>
      <nav className="navbar">
        <label>
          <input type="checkbox" />
          <span className="menu">
            {" "}
            <span className="hamburger"></span>{" "}
          </span>
          <ul>
            <li>
              <Link to="/">Acceuil</Link>
            </li>
            <li>
              <Link to="/ads">Annonces</Link>
            </li>
            <li>
              <Link to="/postads">poster une annonce</Link>
            </li>
            <li>
              <button to="/contact">connexion</button>
            </li>
          </ul>
        </label>
      </nav>
    </header>
  );
}
