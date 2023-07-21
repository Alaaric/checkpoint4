import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";

export default function Register() {
  const [firstname, setFirstame] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const submit = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/register`, {
        firstname,
        lastname,
        email,
        password,
      })
      .catch((err) => console.error(err));
    handleClose();
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        s'inscrire
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Inscription</DialogTitle>
        <DialogContent>
          <DialogContentText>
            seule votre email et votre mot de passe sont nécessaire a votre
            inscription. Néanmoins, nous vous conseillons de renseigner votre
            nom et prénom afin de faciliter l'échange avec d'autres utilisateur
          </DialogContentText>
          <form>
            <TextField
              autoFocus
              margin="dense"
              id="lastname"
              label="Nom"
              type="text"
              fullWidth
              variant="standard"
              onChange={(e) => setLastname(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="firstname"
              label="Prénom"
              type="text"
              fullWidth
              variant="standard"
              onChange={(e) => setFirstame(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Adresse email *"
              type="email"
              fullWidth
              autoComplete="username"
              variant="standard"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Mot de passe *"
              type="password"
              autoComplete="current-password"
              fullWidth
              variant="standard"
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>annuler</Button>
          <Button type="submit" onClick={submit}>
            s'inscrire
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
