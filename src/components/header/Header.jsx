import Navbar from "../navbar/Navbar";
import styles from "./header.module.css";

import React from "react";

function Header({ showForm, onClick }) {
  return (
    <header
      className={`${styles.headerContainer} ${
        showForm ? styles.displayNone : ""
      }`}
    >
      <Navbar onClick={onClick} />
    </header>
  );
}

export default Header;
