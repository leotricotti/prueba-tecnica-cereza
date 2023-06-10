import Navbar from "../navbar/Navbar";
import styles from "./header.module.css";

import React from "react";

function Header({ showForm, data, onClick }) {
  return (
    <header
      className={`${styles.headerContainer} ${
        showForm ? styles.displayNone : ""
      }`}
    >
      <Navbar onClick={onClick} data={data} />
    </header>
  );
}

export default Header;
