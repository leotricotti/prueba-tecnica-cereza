import { useContext } from "react";
import { DataContext } from "../../context/dataContext";
import Button from "../button/Button";
import styles from "./formHeaderMain.module.css";
import FormProductSearch from "../formProductSearch/FormProductSearch";

function FormHeaderMain({ invoiceData }) {
  const { onSaveInvoice } = useContext(DataContext);
  return (
    <header className={styles.invoiceHeader}>
      <div className={styles.headerInner}>
        <FormProductSearch />
        <div className={styles.buttonsContainer}>
          <Button
            text="Guardar"
            styles={styles.button}
            onClick={onSaveInvoice(invoiceData)}
          />
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
