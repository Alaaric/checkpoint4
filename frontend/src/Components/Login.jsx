import { useContext, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import userContext from "../contexts/userContext";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [open, setOpen] = useState(false);
  const { setUser } = useContext(userContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const submit = () => {
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => setUser(res.data.user))
      .catch((err) => console.error(err));
    handleClose();
  };

  return (
    <div>
      <button variant="outlined" onClick={handleClickOpen}>
        Se connecter
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Inscription</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Veuillez renseigner votre email et mot de passe pour vous connecter
          </DialogContentText>
          <form>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Adresse email *"
              type="email"
              fullWidth
              variant="standard"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Mot de passe *"
              type="password"
              fullWidth
              variant="standard"
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>annuler</Button>
          <Button type="submit" onClick={submit}>
            Se connecter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
