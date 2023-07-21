import { useContext } from "react";
import Register from "../Components/Register";
import userContext from "../contexts/userContext";

export default function Home() {
  const { user } = useContext(userContext);

  return (
    <div className="home">
      <h1>BIENVENUE SUR AD{"{OPTION}"}</h1>
      <p>
        Vous avez trouvé un animal abandonné? Vous n'êtes plus en capacité
        d'avoir un animal de compagnie? Ne les abandonnez pas à leur sort!
      </p>
      <p>
        inscrivez vous et trouvez de ce pas une personne qui pourra prendre soin
        de votre animal.
      </p>
      {!user && <Register />}
    </div>
  );
}
