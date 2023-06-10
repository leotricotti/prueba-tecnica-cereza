import SearchBar from "../searchBar/SearchBar";
import Button from "../button/Button";
import styles from "./navbar.module.css";

function Navbar({ data, onClick }) {
  return (
    <nav className={styles.navContainer}>
      <SearchBar data={data} />
      <Button text="Crear factura" onClick={onClick} styles={styles.button} />
    </nav>
  );
}

export default Navbar;
