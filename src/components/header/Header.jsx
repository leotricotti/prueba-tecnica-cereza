import Navbar from "../navbar/Navbar";
import styles from "./header.module.css";

import React from "react";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <Navbar />
    </header>
  );
}

export default Header;
