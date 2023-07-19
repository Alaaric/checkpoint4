import DeleteConfirmModal from "./DeleteConfirmModal";

export default function Profil() {
  return (
    <div className="profil">
      <h2>modifier mes information</h2>
      <form>
        <label htmlFor="">
          nom:
          <input type="text" />
        </label>
        <label htmlFor="">
          prénom:
          <input type="text" />
        </label>
        <label htmlFor="">
          email :
          <input type="email" />
        </label>
        mot de passe:
        <label htmlFor="">
          <input type="password" />
        </label>
      </form>
      <button type="submit">appliquer les changements</button>
      <DeleteConfirmModal state="account" />
    </div>
  );
}
