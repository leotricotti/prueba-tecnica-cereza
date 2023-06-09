import styles from "./formRow.module.css";

function FormRow({ invoiceDetail, handleRowChange, index }) {
  const row = invoiceDetail;

  return (
    <div className={styles.invoiceRow}>
      <input
        type="number"
        value={row.quantity}
        onChange={(e) => handleRowChange(index, "quantity", e.target.value)}
        required
        className={styles.quantity}
      />
      <input
        type="text"
        value={row.description}
        onChange={(e) => handleRowChange(index, "description", e.target.value)}
        required
        className={styles.description}
      />
      <input
        type="number"
        value={row.price}
        onChange={(e) => handleRowChange(index, "price", e.target.value)}
        required
        className={styles.price}
      />
      <input
        type="number"
        value={row.total}
        onChange={(e) => handleRowChange(index, "total", e.target.value)}
        required
        className={styles.total}
      />
    </div>
  );
}

export default FormRow;
