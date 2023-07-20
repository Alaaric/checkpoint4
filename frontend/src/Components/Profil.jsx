import { useContext, useState } from "react";
import DeleteConfirmModal from "./DeleteConfirmModal";
import userContext from "../contexts/userContext";
import axios from "axios";

export default function Profil() {
  const { user, setUser } = useContext(userContext);
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
      .put(`${import.meta.env.VITE_BACKEND_URL}/users/${user.id}`, {
        updatedUserInfos,
        password: newPassword,
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="profil">
      <h2>modifier mes information</h2>
      <form onSubmit={(e) => postUpdatedUserInfos}>
        <label htmlFor="">
          nom:
          <input
            type="text"
            name="lastname"
            placeholder={user.lastname}
            onChange={update}
          />
        </label>
        <label htmlFor="">
          prénom:
          <input
            type="text"
            name="firstname"
            placeholder={user.firstname}
            onChange={update}
          />
        </label>
        <label htmlFor="">
          email :
          <input
            type="email"
            name="email"
            placeholder={user.email}
            onChange={update}
          />
        </label>
        mot de passe:
        <label htmlFor="">
          <input
            type="password"
            name="password"
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </label>
      </form>
      <button type="submit" onClick={postUpdatedUserInfos}>
        appliquer les changements
      </button>
      <DeleteConfirmModal state="account" />
    </div>
  );
}
