import SearchBar from "../searchBar/SearchBar";
import Button from "../button/Button";
import styles from "./navbar.module.css";

function InvoiceListHeader({
  data,
  setShowInvoice,
  link,
  setIsLoading,
  onClick,
}) {
  return (
    <nav className={styles.navContainer}>
      <SearchBar
        data={data}
        setShowInvoice={() => setShowInvoice(true)}
        setIsLoading={setIsLoading}
      />
      <Button
        text="Crear factura"
        onClick={onClick}
        styles={styles.button}
        link={link}
      />
    </nav>
  );
}

export default InvoiceListHeader;
