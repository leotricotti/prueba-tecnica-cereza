import Navbar from "../navbar/Navbar";
import styles from "./header.module.css";

import React from "react";

function Header({ showForm, data, onClick, setIsLoading, setShowInvoice }) {
  return (
    <header
      className={`${styles.headerContainer} ${
        showForm ? styles.displayNone : ""
      }`}
    >
      <Navbar
        onClick={onClick}
        data={data}
        setIsLoading={setIsLoading}
        setShowInvoice={setShowInvoice}
      />
    </header>
  );
}

export default Header;
