import FormProductSearch from "../formProductSearch/FormProductSearch";
import Button from "../button/Button";
import styles from "./formHeaderMain.module.css";

function FormHeaderMain({ productList }) {
  console.log(productList);
  return (
    <header className={styles.invoiceHeader}>
      <div className={styles.headerInner}>
        <FormProductSearch productList={productList} />
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

export default FormHeaderMain;