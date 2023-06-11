import styles from "./formRow.module.css";

function FormRow({
  matchingOptions,
  inputValue,
  showMenu,
  index,
  itemPrice,
  quantity,
  totalItem,
  handleRowChange,
  handleProductChange,
}) {
  return (
    <div className={styles.invoiceRow}>
      <input
        type="text"
        value={quantity}
        onChange={(e) => handleRowChange(index, "quantity", e.target.value)}
        required
        className={styles.quantity}
      />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => handleRowChange(index, "product", e.target.value)}
        className={styles.description}
        inputMode="numeric"
        pattern="[0-9]"
      />
      {showMenu && (
        <ul className={styles.menu}>
          {matchingOptions.map((option, idx) => (
            <li
              key={idx}
              onClick={() => handleProductChange(option)}
              className={styles.item}
            >
              {option.product}
            </li>
          ))}
        </ul>
      )}
      <span className={styles.price}>{itemPrice}</span>
      <span className={styles.total}>{totalItem}</span>
    </div>
  );
}

export default FormRow;
