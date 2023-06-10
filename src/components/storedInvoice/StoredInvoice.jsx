import React from "react";
import invoicesData from "../../assets/data/invoicesData.json";
import Button from "../button/Button";
import styles from "./storedInvoice.module.css";

function StoredInvoice({ setShowInvoice }) {
  return invoicesData.invoices.map((invoice) => (
    <section className={styles.invoiceContainer} key={invoice.number}>
      <div className={styles.buttonsContainer}>
        <Button
          text="Cancelar"
          onClick={() => setShowInvoice(false)}
          styles={`${styles.button} ${styles.cancel}`}
        />
      </div>
      <div className={styles.innerInvoice}>
        <div className={styles.invoiceHeader}>
          <span className={styles.invoiceNumber}>{invoice.number}</span>
          <span className={styles.invoiceDate}>{invoice.date}</span>
          <span className={styles.invoiceCustomer}>{invoice.customer}</span>
          <span className={styles.invoiceAddress}>{invoice.address}</span>
        </div>
        <div className={styles.invoiceBody}>
          {invoice.details.map((detail, index) => (
            <div className={styles.invoiceDetail} key={index}>
              <span className={styles.detailQuantity}>{detail.quantity}</span>
              <span className={styles.detailProduct}>{detail.product}</span>
              <span className={styles.itemlPrice}>{detail.itemPrice}</span>
              <span className={styles.totalItem}>{detail.totalItem}</span>
            </div>
          ))}

          <div className={styles.invoiceTotal}>
            <span className={styles.totalItems}>{invoice.subtotal}</span>
            <span className={styles.taxes}>{invoice.taxes}</span>
            <span className={styles.total}>{invoice.total}</span>
          </div>
        </div>
      </div>
    </section>
  ));
}

export default StoredInvoice;
