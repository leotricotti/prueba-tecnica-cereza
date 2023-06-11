import styles from "./formRow.module.css";

function FormRow({
  index,
  product,
  quantity,
  itemPrice,
  totalItem,
  matchingOptions,
  handleQuantityChange,
  handleProductChange,
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
      <input
        type="text"
        value={product}
        onChange={(e) => handleProductChange(index, "product", e.target.value)}
        className={styles.description}
      />
      <span className={styles.price}>{itemPrice}</span>
      <span className={styles.total}>{totalItem}</span>
    </div>
  );
}

export default FormRow;
