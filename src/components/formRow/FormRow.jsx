import styles from "./formRow.module.css";

function FormRow({
  index,
  product,
  quantity,
  itemPrice,
  totalItem,
  handleQuantityChange,
}) {
  return (
    <div className={styles.invoiceRow}>
      <input
        type="text"
        value={quantity}
        onChange={(e) => {
          handleQuantityChange(index, "quantity", e.target.value);
        }}
        required
        className={styles.quantity}
      />
      <span className={styles.product}>{product}</span>
      <span className={styles.price}>{itemPrice}</span>
      <span className={styles.total}>{totalItem}</span>
    </div>
  );
}

export default FormRow;
