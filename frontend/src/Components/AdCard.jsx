import { useContext } from "react";
import userContext from "../contexts/userContext";

export default function AdCard({ ad }) {
  const { user } = useContext(userContext);
  return (
    <div className="ad">
      <div className="info">
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${ad.photo}`}
          alt={ad.photo}
        />
        <div>
          <p>nom: {ad.name}</p>
          <p>age: {ad.age} ans</p>
        </div>
      </div>
      <p>{ad.description}</p>
      {user.id !== ad.user_id && <button>contacter</button>}
      {user.id === ad.user_id && <button>modifier mon annonce</button>}
      {user.id === ad.user_id && <button>supprimer mon annonce</button>}
    </div>
  );
}
