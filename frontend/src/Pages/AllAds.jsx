import { useEffect, useState } from "react";
import axios from "axios";
import AdCard from "../Components/AdCard";

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
        <AdCard key={ad.id} ad={ad} />
      ))}
    </div>
  );
}
