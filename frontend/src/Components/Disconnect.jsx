import { useContext, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import userContext from "../contexts/userContext";

export default function Disconnect() {
  const [open, setOpen] = useState(false);
  const { setUser } = useContext(userContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const submit = () => {
    setUser(null);
    handleClose();
  };

  return (
    <div>
      <button variant="outlined" onClick={handleClickOpen}>
        Se déconnecter
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Voulez-vous vraiment vous déconnecter?</DialogTitle>
        <DialogContent>
          <Button
            size="small"
            variant="outlined"
            type="submit"
            onClick={submit}
          >
            Oui
          </Button>
          <Button size="small" variant="outlined" onClick={handleClose}>
            Non
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
