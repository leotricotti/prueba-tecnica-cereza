import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./productSearch.module.css";

function ProductSearch({ productList }) {
  const [inputValue, setInputValue] = useState("");
  const [matchingOptions, setMatchingOptions] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const filteredOptions = productList.products.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
    setMatchingOptions(filteredOptions);
  };

  const handleProductClick = (product) => {
    setSelectedProducts([...selectedProducts, product]);
  };

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
      {inputValue && (
        <>
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
          <div>
            <ul>
              {selectedProducts.map((product, index) => (
                <li key={index}>{product}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductSearch;
