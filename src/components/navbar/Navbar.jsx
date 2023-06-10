import SearchBar from "../searchBar/SearchBar";
import Button from "../button/Button";
import styles from "./navbar.module.css";

function Navbar({ data, onClick, setIsLoading, setShowInvoice }) {
  return (
    <nav className={styles.navContainer}>
      <SearchBar
        data={data}
        setIsLoading={setIsLoading}
        setShowInvoice={setShowInvoice}
      />
      <Button text="Crear factura" onClick={onClick} styles={styles.button} />
    </nav>
  );
}

export default Navbar;
