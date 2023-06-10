import styles from "./formFooter.module.css";

const FormFooter = ({
  handleSubtotalChange,
  handleTaxesChange,
  handleTotalChange,
  subtotal,
  taxes,
  total,
}) => {
  return (
    <section className={styles.invoiceFooterContainer}>
      <div className={styles.totalItems}>{subtotal}</div>
      <div className={styles.taxes}>{taxes}</div>
      <div className={styles.total}>{total}</div>
    </section>
  );
};

export default FormFooter;
