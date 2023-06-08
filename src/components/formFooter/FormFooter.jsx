import styles from "./formFooter.module.css";

const FormFooter = ({ invoiceDetail }) => {
  const getTotalItems = () => {
    if (invoiceDetail.length === 0) {
      return 0;
    }

    let total = 0;
    for (const item of invoiceDetail) {
      total += item.quantity * item.price;
    }
    return total;
  };

  const getTaxes = () => {
    const totalItems = getTotalItems();
    if (totalItems === 0) {
      return 0;
    }
    return totalItems * 0.21;
  };

  const getTotalAmount = () => {
    const totalItems = getTotalItems();
    const taxes = getTaxes();
    return totalItems + taxes;
  };

  return (
    <section className={styles.invoiceFooter}>
      <div className={styles.totalItems}>{getTotalItems().toFixed(2)}</div>
      <div className={styles.taxes}>{getTaxes().toFixed(2)}</div>
      <div className={styles.total}>{getTotalAmount().toFixed(2)}</div>
    </section>
  );
};

export default FormFooter;
