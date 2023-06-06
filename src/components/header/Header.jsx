import SearchBar from "../searchBar/SearchBar";
import styles from "./header.module.css";

function Header({ title }) {
  return (
    <header className={styles.headerContainer}>
      <SearchBar />
    </header>
  );
}

export default Header;
