import { useContext, useEffect, useState } from "react";
import axios from "axios";
import userContext from "../contexts/userContext";
import AdCard from "./AdCard";

export default function MyAds() {
  const { user } = useContext(userContext);
  const [userAds, setUserAds] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/${user.id}/ads`, {
        withCredentials: true,
      })
      .then((res) => setUserAds(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="myads">
      {userAds &&
        userAds.map((ad) => (
          <AdCard key={ad.id} ad={ad} setUserAds={setUserAds} />
        ))}
    </div>
  );
}
