import ProductSearch from "../productSearch/ProductSearch";
import Button from "../button/Button";
import styles from "./invoiceFormHeader.module.css";

function InvoiceFormHeader({
  productList,
  setIsLoading,
  handleCancelButtonClick,
}) {
  console.log(productList);
  return (
    <header className={styles.invoiceHeader}>
      <div className={styles.headerInner}>
        <ProductSearch productList={productList} />
        <div className={styles.buttonsContainer}>
          <Button text="Guardar" styles={styles.button} />
          <span className={styles.separador}>/</span>
          <Button
            text="Cancelar"
            link={"/"}
            styles={`${styles.button} ${styles.cancel}`}
          />
        </div>
      </div>
    </header>
  );
}

export default InvoiceFormHeader;
