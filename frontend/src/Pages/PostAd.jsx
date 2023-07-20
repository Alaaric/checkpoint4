import axios from "axios";
import { useContext, useRef, useState } from "react";
import userContext from "../contexts/userContext";

export default function PostAd() {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [infos, setInfos] = useState();
  const inputRef = useRef();
  const { user } = useContext(userContext);

  const submit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photo", inputRef.current.files[0]);

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/uploads`, formData)
      .then((res) =>
        axios
          .post(`${import.meta.env.VITE_BACKEND_URL}/ads`, {
            name,
            age,
            infos,
            photo: res.data.photoName,
          })
          .then((res) =>
            axios.post(`${import.meta.env.VITE_BACKEND_URL}/ads/jointable`, {
              user_id: user.id,
              ad_id: res.data[0].insertId,
            })
          )
          .catch((err) => console.error(err))
      )
      .catch((err) => console.error(err));
  };

  return (
    <div className="postAd">
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
                onChange={(e) => setName(e.target.value)}
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
                onChange={(e) => setAge(e.target.value)}
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
            onChange={(e) => setInfos(e.target.value)}
          ></textarea>
        </label>

        <button type="submit">poster mon annonce</button>
      </form>
    </div>
  );
}
