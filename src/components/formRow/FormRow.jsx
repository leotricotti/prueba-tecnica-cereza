import styles from "./formRow.module.css";

function FormRow({
  matchingOptions,
  inputValue,
  showMenu,
  invoiceData,
  index,
  itemPrice,
  quantity,
  totalItem,
  handleQuantityChange,
  handleProductChange,
}) {
  const rowQuantity = quantity[index];
  const rowProduct = invoiceData[index];

  console.log(rowQuantity);

  return (
    <div className={styles.invoiceRow}>
      <input
        type="text"
        value={rowQuantity.quantity}
        onChange={(e) => {
          handleQuantityChange(index, e.target.value);
        }}
        required
        className={styles.quantity}
      />
      <input
        type="text"
        value={rowProduct.product}
        onChange={(e) => handleProductChange(index, e.target.value)}
        className={styles.description}
      />
      {/* {showMenu && (
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
      )} */}
      <span className={styles.price}>{itemPrice}</span>
      <span className={styles.total}>{totalItem}</span>
    </div>
  );
}

export default FormRow;
