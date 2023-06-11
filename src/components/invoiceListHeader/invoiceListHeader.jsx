import Navbar from "../navbar/Navbar";
import styles from "./invoicelistHeader.module.css";

import React from "react";

function Header({ data, link, setShowInvoice, onClick, setIsLoading }) {
  return (
    <header className={styles.headerContainer}>
      <Navbar
        data={data}
        setShowInvoice={setShowInvoice}
        onClick={onClick}
        link={link}
        setIsLoading={setIsLoading}
      />
    </header>
  );
}

export default Header;
