import { useContext, useState } from "react";
import DeleteConfirmModal from "./DeleteConfirmModal";
import userContext from "../contexts/userContext";
import axios from "axios";
import Button from "@mui/material/Button";

export default function Profil() {
  const { user } = useContext(userContext);
  const [newPassword, setNewPassword] = useState(null);
  const [updatedUserInfos, setUpdatedUserInfos] = useState({
    firstname: null,
    lastname: null,
    email: null,
  });

  const update = (e) => {
    const target = e.currentTarget;

    setUpdatedUserInfos({
      ...updatedUserInfos,
      [target.name]: target.value,
    });
  };

  const postUpdatedUserInfos = () => {
    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/users/${user.id}`,
        {
          updatedUserInfos,
          password: newPassword,
        },
        {
          withCredentials: true,
        }
      )
      .catch((err) => console.error(err));
  };
  return (
    <div className="profile-page">
      <div className="profil">
        <h2>Modifier mes information</h2>
        <form onSubmit={(e) => postUpdatedUserInfos}>
          <label htmlFor="">
            <p>Nom:</p>
            <input
              type="text"
              name="lastname"
              placeholder={user && user.lastname}
              onChange={update}
            />
          </label>
          <label htmlFor="">
            <p>Prénom:</p>
            <input
              type="text"
              name="firstname"
              placeholder={user && user.firstname}
              onChange={update}
            />
          </label>
          <label htmlFor="">
            <p>Email :</p>
            <input
              type="email"
              name="email"
              autoComplete="username"
              placeholder={user && user.email}
              onChange={update}
            />
          </label>
          <label htmlFor="">
            <p>Mot de passe:</p>
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </label>
        </form>
        <div className="buttons">
          <Button
            size="small"
            variant="outlined"
            type="submit"
            onClick={postUpdatedUserInfos}
          >
            Appliquer les changements
          </Button>
          <DeleteConfirmModal state="account" />
        </div>
      </div>
    </div>
  );
}
