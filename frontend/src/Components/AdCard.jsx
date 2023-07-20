import { useContext } from "react";
import userContext from "../contexts/userContext";
import DeleteConfirmModal from "./DeleteConfirmModal";

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

      {user && user.id !== ad.user_id && <button>contacter</button>}
      {user && user.id === ad.user_id && <button>modifier mon annonce</button>}
      {user && user.id === ad.user_id && (
        <DeleteConfirmModal state="ad" ad={ad} />
      )}
    </div>
  );
}
