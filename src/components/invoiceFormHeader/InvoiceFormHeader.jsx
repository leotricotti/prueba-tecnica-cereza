import SearchBar from "../searchBar/SearchBar";
import Button from "../button/Button";
import styles from "./invoiceHeader.module.css";

function InvoiceHeader({ productList, setIsLoading, handleCancelButtonClick }) {
  return (
    <header className={styles.invoiceHeader}>
      <div className={styles.headerInner}>
        <SearchBar productList={productList} />

        <div className={styles.buttonsContainer}>
          <Button
            text="Guardar"
            styles={styles.button}
            onClick={() => {
              setIsLoading(true);
            }}
          />
          <Button
            text="Cancelar"
            onClick={handleCancelButtonClick}
            styles={`${styles.button} ${styles.cancel}`}
          />
        </div>
      </div>
    </header>
  );
}

export default InvoiceHeader;
