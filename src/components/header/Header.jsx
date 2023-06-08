import SearchBar from "../searchBar/SearchBar";
import Button from "../button/Button";
import styles from "./header.module.css";

function Header({ onClick }) {
  return (
    <header className={styles.headerContainer}>
      <SearchBar />
      <Button text="Crear factura" onClick={onClick} styles={styles.button} />
    </header>
  );
}

export default Header;
