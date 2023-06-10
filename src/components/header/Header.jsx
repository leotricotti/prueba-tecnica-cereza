import Navbar from "../navbar/Navbar";
import styles from "./header.module.css";

import React from "react";

function Header({ data, setShowInvoice, onClick }) {
  return (
    <header className={styles.headerContainer}>
      <Navbar data={data} setShowInvoice={setShowInvoice} onClick={onClick} />
    </header>
  );
}

export default Header;
