import SearchBar from "../searchBar/SearchBar";
import Button from "../button/Button";
import styles from "./navbar.module.css";

function Navbar({ data, setShowInvoice, link, onClick }) {
  return (
    <nav className={styles.navContainer}>
      <SearchBar data={data} setShowInvoice={setShowInvoice} />
      <Button
        text="Crear factura"
        onClick={onClick}
        styles={styles.button}
        link={link}
      />
    </nav>
  );
}

export default Navbar;
