import styles from "./formRow.module.css";

function FormRow({ index, invoiceData, handleQuantityChange }) {
  const { details } = invoiceData;

  return details[index] === "" ? null : (
    <div className={styles.invoiceRow}>
      <input
        type="text"
        value={details[index].quantity || ""}
        onChange={(e) => {
          handleQuantityChange(index, "quantity", e.target.value);
        }}
        required
        className={styles.quantity}
      />
      <span className={styles.product}>{details[index].product}</span>
      <span className={styles.price}>{details[index].itemPrice}</span>
      <span className={styles.total}>{details[index].totalItem}</span>
    </div>
  );
}

export default FormRow;
