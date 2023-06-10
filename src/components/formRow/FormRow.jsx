import React, { useContext, useState } from "react";
import { DataContext } from "../../context/dataContext";
import styles from "./formRow.module.css";

function FormRow({ invoiceDetail, handleRowChange, index }) {
  const data = useContext(DataContext);
  const row = invoiceDetail[index];

  const [inputValue, setInputValue] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [matchingOptions, setMatchingOptions] = useState([]);

  const handleDescriptionChange = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);

    const matchingOptions = data.products.filter((item) =>
      item.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    setMatchingOptions(matchingOptions);
    setShowMenu(true);
  };

  const handleOptionClick = (option) => {
    setInputValue(option.title);
    handleRowChange(index, "description", option.title);
    handleRowChange(index, "price", option.price?.toFixed(2) || "");
    setShowMenu(false);
  };

  return (
    <div className={styles.invoiceRow}>
      <input
        type="text"
        value={row.quantity}
        onChange={(e) => handleRowChange(index, "quantity", e.target.value)}
        required
        className={styles.quantity}
      />
      <input
        type="text"
        value={inputValue}
        onChange={handleDescriptionChange}
        required
        className={styles.description}
        inputMode="numeric"
        pattern="[0-9]"
      />
      {showMenu && (
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
      )}
      <span className={styles.price}>{row.price}</span>
      <span className={styles.total}>
        {row.price && row.quantity ? (row.price * row.quantity).toFixed(2) : ""}
      </span>
    </div>
  );
}

export default FormRow;
