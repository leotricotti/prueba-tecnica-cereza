import SearchBar from "../searchBar/SearchBar";
import Button from "../button/Button";
import styles from "./navbar.module.css";

function Navbar({ onClick }) {
  return (
    <nav className={styles.navContainer}>
      <SearchBar />
      <Button text="Crear factura" onClick={onClick} styles={styles.button} />
    </nav>
  );
}

export default Navbar;
