import linkdin from "../assets/linkdin.png";
import github from "../assets/github.png";
export default function Footer() {
  return (
    <footer>
      <p>CopyRight: la moustache gauche de mon chat </p>
      <div target="_blank" className="socials">
        <a href="https://github.com/Alaaric">
          <img src={github} alt="github logo" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/alarichenrot/">
          <img src={linkdin} alt="linkdin logo" />
        </a>
      </div>
    </footer>
  );
}
