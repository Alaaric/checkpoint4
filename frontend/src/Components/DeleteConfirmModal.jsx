import { useState, useContext, useEffect } from "react";
import userContext from "../contexts/userContext";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

export default function DeleteConfirmModal({
  state,
  ad,
  message,
  getMessages,
  setUserAds,
}) {
  const { user, setUser } = useContext(userContext);
  const [open, setOpen] = useState(false);
  const [display, setDisplay] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (state) => {
    switch (state) {
      case "messages":
        axios
          .delete(
            `${import.meta.env.VITE_BACKEND_URL}/messages/${message.id}`,
            {
              withCredentials: true,
            }
          )
          .catch((err) => console.error(err));
        handleClose();
        setTimeout(() => {
          getMessages;
        }, 200);
        break;
      case "account":
        axios
          .delete(`${import.meta.env.VITE_BACKEND_URL}/users/${user.id}`, {
            withCredentials: true,
          })
          .catch((err) => console.error(err));
        setUser(null);
        handleClose();
        break;
      case "ad":
        axios
          .delete(`${import.meta.env.VITE_BACKEND_URL}/ads/${ad.id}`, {
            withCredentials: true,
          })
          .catch((err) => console.error(err));
        handleClose();
        setTimeout(() => {
          axios
            .get(`${import.meta.env.VITE_BACKEND_URL}/users/${user.id}/ads`, {
              withCredentials: true,
            })
            .then((res) => setUserAds(res.data))
            .catch((err) => console.error(err));
        }, 200);
        break;
      default:
        console.info("invalid value");
        break;
    }
  };

  useEffect(() => {
    switch (state) {
      case "messages":
        setDisplay("ce message");
        break;
      case "account":
        setDisplay("votre compte");
        break;
      case "ad":
        setDisplay("cette annonce");
        break;
      default:
        console.info("invalid value");
        break;
    }
  }, []);

  return (
    <>
      <button type="button" onClick={handleClickOpen}>
        supprimer {display}
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Êtes-vous sûr de vouloir supprimer {display}?</DialogTitle>
        <DialogActions>
          <Button type="button" onClick={() => handleDelete(state)}>
            Oui
          </Button>
          <Button onClick={handleClose}>Non</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
