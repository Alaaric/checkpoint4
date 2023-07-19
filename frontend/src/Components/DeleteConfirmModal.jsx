import { useState, useContext } from "react";
import userContext from "../contexts/userContext";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

export default function DeleteConfirmModal({ state, ad, messages }) {
  const { user, setUser } = useContext(userContext);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const deleteAccount = () => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/users/${user.id}`)
      .catch((err) => console.error(err));
    setUser(null);
    handleClose();
  };

  const deleteAd = () => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/ads/${ad.id}`)
      .catch((err) => console.error(err));
    setUser(null);
    handleClose();
  };

  const deleteMessage = () => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/messages/${messages.id}`)
      .catch((err) => console.error(err));
    setUser(null);
    handleClose();
  };

  return (
    <>
      <button type="button" onClick={handleClickOpen}>
        supprimer mon compte
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Êtes-vous sûr de vouloir supprimer?</DialogTitle>
        <DialogActions>
          <Button type="button" onClick={deleteAccount}>
            Oui
          </Button>
          <Button onClick={handleClose}>Non</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
