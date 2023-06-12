import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./formProductSearch.module.css";

function FormProductSearch({ productList }) {
  const [inputValue, setInputValue] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [matchingOptions, setMatchingOptions] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const filteredOptions = productList.products.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
    setMatchingOptions(filteredOptions);
    setShowMenu(true);
  };

  const handleProductClick = (product) => {
    setSelectedProducts([...selectedProducts, product]);
    setInputValue(product.title);
    setShowMenu(false);
  };

  console.log(selectedProducts);

  return (
    <div className={styles.searchBarContainer}>
      <button type="submit" className={styles.button}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
      </button>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Buscar producto..."
        className={styles.input}
      />
      {showMenu && (
        <ul className={styles.searchMenu}>
          {matchingOptions.map((option, index) => (
            <li
              key={index}
              onClick={() => handleProductClick(option)}
              className={styles.searchItem}
            >
              {option.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FormProductSearch;