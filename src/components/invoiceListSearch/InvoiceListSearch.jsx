import { useState, useContext } from "react";
import { DataContext } from "../../context/dataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import StoredInvoice from "../storedInvoice/StoredInvoice";
import styles from "./invoiceListSearch.module.css";

function InvoiceListSeach({ setShowInvoice, setIsLoading }) {
  const { invoices } = useContext(DataContext);
  const [inputValue, setInputValue] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [matchingOptions, setMatchingOptions] = useState([]);
  const data = invoices;

  console.log(matchingOptions);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);

    const matchingOptions = data.invoices.filter((item) =>
      item.customer.toLowerCase().includes(inputValue.toLowerCase())
    );
    setMatchingOptions(matchingOptions);
    setShowMenu(true);
  };

  const handleOptionClick = (option) => {
    setInputValue(option.customer);
    setMatchingOptions(option);
    setShowMenu(false);
    setShowInvoice(true);
    setIsLoading(true);
  };

  return (
    <div className={styles.searchBar}>
      <button type="submit" className={styles.button}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
      </button>
      <input
        type="text"
        placeholder="Buscar factura..."
        value={inputValue}
        onChange={handleInputChange}
        className={styles.input}
      />
      {showMenu && (
        <ul className={styles.menu}>
          {matchingOptions.map((option, idx) => (
            <li
              key={idx}
              onClick={() => handleOptionClick(option)}
              className={styles.item}
            >
              {option.customer}
            </li>
          ))}
        </ul>
      )}
      {matchingOptions.length > 0 && (
        <StoredInvoice
          invoiceId={matchingOptions[0].number}
          setShowInvoice={setShowInvoice}
          setIsLoading={setIsLoading}
        />
      )}
    </div>
  );
}

export default InvoiceListSeach;
