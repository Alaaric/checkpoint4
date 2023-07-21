import { Link } from "react-router-dom";
import Login from "./Login";
import { useContext, useState } from "react";
import userContext from "../contexts/userContext";
import Disconnect from "./Disconnect";

export default function () {
  const { user } = useContext(userContext);
  const [displayMenu, setDisplayMenu] = useState(false);

  const handleDisplayMenu = () => {
    setDisplayMenu(!displayMenu);
  };

  return (
    <header>
      <div className="logo">AD{"{OPTION}"}</div>
      <nav className="navbar">
        <label>
          <input
            type="checkbox"
            onChange={handleDisplayMenu}
            checked={displayMenu}
          />
          <span className="menu">
            {" "}
            <span className="hamburger"></span>{" "}
          </span>
          <ul>
            <li>
              <Link to="/" onClick={handleDisplayMenu}>
                Acceuil
              </Link>
            </li>
            <li>
              <Link to="/ads" onClick={handleDisplayMenu}>
                Annonces
              </Link>
            </li>
            {user && (
              <li>
                <Link to="/postads" onClick={handleDisplayMenu}>
                  Poster une annonce
                </Link>
              </li>
            )}
            {user ? (
              <>
                <li>
                  <Link to="/account" onClick={handleDisplayMenu}>
                    Mon compte
                  </Link>
                </li>
                <li>
                  <Disconnect handleDisplayMenu={handleDisplayMenu} />
                </li>
              </>
            ) : (
              <li>
                <Login handleDisplayMenu={handleDisplayMenu} />
              </li>
            )}
          </ul>
        </label>
      </nav>
    </header>
  );
}
