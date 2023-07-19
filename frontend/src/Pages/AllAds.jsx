import { useEffect, useState } from "react";
import axios from "axios";

export default function AllAds() {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/ads`)
      .then((res) => setAds(res.data));
  }, []);

  return (
    <div className="allAds">
      {ads.map((ad) => (
        <div key={ad.id} className="ad">
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
          <button>contacter</button>
        </div>
      ))}
    </div>
  );
}
