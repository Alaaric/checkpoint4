import { useContext, useEffect, useState } from "react";
import axios from "axios";
import userContext from "../contexts/userContext";
import AdCard from "./AdCard";

export default function MyAds() {
  const { user } = useContext(userContext);
  const [userAds, setUserAds] = useState();

  const getMyAds = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/${user.id}/ads`)
      .then((res) => setUserAds(res.data))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getMyAds();
  }, []);

  return (
    <div className="myads">
      {userAds &&
        userAds.map((ad) => (
          <AdCard key={ad.id} ad={ad} getMyAds={getMyAds()} />
        ))}
    </div>
  );
}
