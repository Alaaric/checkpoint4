import { useContext } from "react";
import userContext from "../contexts/userContext";

export default function Profil() {
  const { user, setUser } = useContext(userContext);

  return (
    <div className="profil">
      <h2>modifier mes information</h2>
      <form>
        <label htmlFor="">
          nom:
          <input type="text" />
        </label>
        <label htmlFor="">
          prénom:
          <input type="text" />
        </label>
        <label htmlFor="">
          email :
          <input type="email" />
        </label>
        mot de passe:
        <label htmlFor="">
          <input type="password" />
        </label>
      </form>
      <button type="submit">appliquer les changements</button>
      <button type="button">supprimer mon compte</button>
    </div>
  );
}
