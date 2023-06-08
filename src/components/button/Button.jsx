function Button({ styles, text, onClick }) {
  return (
    <button onClick={onClick} className={styles}>
      {text}
    </button>
  );
}

export default Button;
