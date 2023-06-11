import SearchBar from "../searchBar/SearchBar";
import Button from "../button/Button";
import styles from "./invoiceFormHeader.module.css";

function InvoiceFormHeader({
  productList,
  setIsLoading,
  handleCancelButtonClick,
}) {
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
          <span className={styles.separador}>/</span>
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

export default InvoiceFormHeader;
