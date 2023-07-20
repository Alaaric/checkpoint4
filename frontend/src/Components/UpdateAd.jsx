import { useState, useRef, useContext } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import axios from "axios";
import userContext from "../contexts/userContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function UpdateAd({ ad, setUserAds }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { user } = useContext(userContext);
  const inputRef = useRef(null);
  const [updatedAdInfos, setUpdatedAdInfos] = useState({
    description: null,
    name: null,
    age: null,
  });

  const update = (e) => {
    const target = e.currentTarget;

    setUpdatedAdInfos({
      ...updatedAdInfos,
      [target.name]: target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();

    if (inputRef.current.files[0]) {
      console.log("test1");
      const formData = new FormData();
      formData.append("photo", inputRef.current.files[0]);
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/uploads`, formData, {
          withCredentials: true,
        })
        .then((res) =>
          axios
            .put(
              `${import.meta.env.VITE_BACKEND_URL}/ads/${ad.id}`,
              {
                updatedAdInfos,
                photo: res.data.photoName,
              },
              {
                withCredentials: true,
              }
            )
            .catch((err) => console.error(err))
        )
        .catch((err) => console.error(err));
      setTimeout(() => {
        axios
          .get(`${import.meta.env.VITE_BACKEND_URL}/users/${user.id}/ads`, {
            withCredentials: true,
          })
          .then((res) => setUserAds(res.data))
          .catch((err) => console.error(err));
      }, 200);
    } else {
      console.log("test2");
      axios
        .put(
          `${import.meta.env.VITE_BACKEND_URL}/ads/${ad.id}`,
          {
            updatedAdInfos,
          },
          {
            withCredentials: true,
          }
        )
        .catch((err) => console.error(err));
      setTimeout(() => {
        axios
          .get(`${import.meta.env.VITE_BACKEND_URL}/users/${user.id}/ads`, {
            withCredentials: true,
          })
          .then((res) => setUserAds(res.data))
          .catch((err) => console.error(err));
      }, 200);
    }
  };

  return (
    <div>
      <Button size="small" variant="outlined" onClick={handleOpen}>
        Modifier mon annonce
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form encType="multipart/form-data" onSubmit={submit}>
            <div className="input">
              <div>
                <label htmlFor="name">
                  nom:
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="off"
                    onChange={update}
                  />
                </label>
                <label htmlFor="age">
                  age:
                  <input
                    type="number"
                    min={0}
                    max={100}
                    id="age"
                    name="age"
                    onChange={update}
                  />
                </label>
              </div>
              <label htmlFor="photo">
                photo:
                <input type="file" id="photo" name="photo" ref={inputRef} />
              </label>
            </div>
            <label htmlFor="description">
              infos:
              <textarea
                name="description"
                id="description"
                onChange={update}
              ></textarea>
            </label>

            <Button size="small" variant="outlined" type="submit">
              Valider
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
