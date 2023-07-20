import { useContext, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import userContext from "../contexts/userContext";

export default function MessageForm({ ad }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState();
  const { user } = useContext(userContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sendMessage = () => {
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/messages`,
        {
          content: message,
          sender_id: user.id,
          receiver_id: ad.author_id,
        },
        {
          withCredentials: true,
        }
      )
      .catch((err) => console.error(err));
    handleClose();
  };

  return (
    <div>
      <button variant="outlined" onClick={handleClickOpen}>
        Contacter
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Message</DialogTitle>
        <DialogContent>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>annuler</Button>
          <Button onClick={sendMessage}>Envoyer</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
