import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./searchBar.module.css";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleFormSubmit} className={styles.searchBar}>
      <button type="submit">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
      <input
        type="text"
        placeholder="Buscar factura..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </form>
  );
}

export default SearchBar;
