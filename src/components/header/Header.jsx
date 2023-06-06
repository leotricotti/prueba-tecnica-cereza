import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import styles from "./header.module.css";

function Header({ title }) {
  return (
    <header className={styles.header}>
      <FontAwesomeIcon icon={faList} />
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
