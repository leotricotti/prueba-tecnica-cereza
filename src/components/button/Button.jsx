import { Link } from "react-router-dom";

function Button({ styles, link, text, onClick }) {
  return (
    <button onClick={onClick} className={styles}>
      <Link to={link}>{text}</Link>
    </button>
  );
}

export default Button;
