import { useState } from "react";

function ProductSearch({ productList }) {
  const [inputValue, setInputValue] = useState("");
  const [matchingOptions, setMatchingOptions] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const filteredOptions = productList.filter((product) =>
      product.toLowerCase().includes(value.toLowerCase())
    );
    setMatchingOptions(filteredOptions);
  };

  const handleProductClick = (product) => {
    setSelectedProducts([...selectedProducts, product]);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Buscar producto"
      />
      <ul>
        {matchingOptions.map((option, index) => (
          <li key={index} onClick={() => handleProductClick(option)}>
            {option}
          </li>
        ))}
      </ul>
      <div>
        <h3>Productos seleccionados:</h3>
        <ul>
          {selectedProducts.map((product, index) => (
            <li key={index}>{product}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductSearch;
