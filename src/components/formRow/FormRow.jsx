import { useState, useEffect } from "react";
import styles from "./formRow.module.css";

function FormRow({
  index,
  itemPrice,
  quantity,
  totalItem,
  handleProductChange,
  handleQuantityChange,
}) {
  const [inputValue, setInputValue] = useState("");

  useEffect((e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
  }, []);

  return (
    <div className={styles.invoiceRow}>
      <input
        type="text"
        value={quantity}
        onChange={(e) =>
          handleQuantityChange(index, "quantity", e.target.value)
        }
        required
        className={styles.quantity}
      />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          handleProductChange(index, "product", e.target.value);
        }}
        className={styles.description}
        inputMode="numeric"
        pattern="[0-9]"
      />
      {/* {showMenu && (
        <ul className={styles.menu}>
          {matchingOptions.map((option, idx) => (
            <li
              key={idx}
              onClick={() => handleOptionClick(option)}
              className={styles.item}
            >
              {option.title}
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
