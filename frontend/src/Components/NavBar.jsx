import { Link } from "react-router-dom";
import Login from "./Login";
import { useContext } from "react";
import userContext from "../contexts/userContext";
import Disconnect from "./Disconnect";

export default function () {
  const { user } = useContext(userContext);

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
            {user && (
              <li>
                <Link to="/postads">poster une annonce</Link>
              </li>
            )}
            {user ? (
              <li>
                <Disconnect />
              </li>
            ) : (
              <li>
                <Login />
              </li>
            )}
          </ul>
        </label>
      </nav>
    </header>
  );
}
