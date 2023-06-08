import styles from "./formRow.module.css";

function FormRow({ invoiceDetail, handleRowChange }) {
  return (
    <form>
      {invoiceDetail.map((row, index) => (
        <div key={index} className={styles.invoiceRow}>
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
            onChange={(e) =>
              handleRowChange(index, "description", e.target.value)
            }
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
      ))}
    </form>
  );
}

export default FormRow;
