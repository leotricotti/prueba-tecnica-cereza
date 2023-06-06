import styles from "./button.module.css";

function Button({ text, onClick }) {
  return (
    <button onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
}

export default Button;
