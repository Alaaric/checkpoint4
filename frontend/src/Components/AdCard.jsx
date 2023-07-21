import { useContext } from "react";
import userContext from "../contexts/userContext";
import DeleteConfirmModal from "./DeleteConfirmModal";
import UpdateAd from "./UpdateAd";
import MessageForm from "./messageForm";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function AdCard({ ad, setUserAds }) {
  const { user } = useContext(userContext);
  return (
    <Card sx={{ maxWidth: 345, minWidth: 345 }} className="card">
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={`${import.meta.env.VITE_BACKEND_URL}/uploads/${ad.photo}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Nom: {ad.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Age: {ad.age} {ad.age <= 1 ? "an" : "ans"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {ad.description}
        </Typography>
      </CardContent>
      <CardActions className="buttons-wraper">
        {user && user.id !== ad.user_id && user.id !== ad.author_id && (
          <MessageForm ad={ad} />
        )}
        {user && user.id === ad.user_id && (
          <UpdateAd ad={ad} setUserAds={setUserAds} />
        )}
        {user && (user.id === ad.user_id || user.isAdmin === 1) && (
          <DeleteConfirmModal state="ad" ad={ad} setUserAds={setUserAds} />
        )}
      </CardActions>
    </Card>
  );
}
