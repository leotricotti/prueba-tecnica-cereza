import Navbar from "../navbar/Navbar";
import styles from "./header.module.css";

import React from "react";

function Header({ data, link, setShowInvoice, onClick }) {
  return (
    <header className={styles.headerContainer}>
      <Navbar
        data={data}
        setShowInvoice={setShowInvoice}
        onClick={onClick}
        link={link}
      />
    </header>
  );
}

export default Header;
