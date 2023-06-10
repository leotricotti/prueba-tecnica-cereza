import React from "react";
import invoicesData from "../../assets/data/invoicesData.json";
import Button from "../button/Button";
import styles from "./invoiceForm.module.css";

function StoredInvoice({ setShowForm }) {
  return invoicesData.invoices.map((invoice) => (
    <section className={styles.invoiceContainer} key={invoice.number}>
      <div className={styles.buttonsContainer}>
        <Button
          text="Cancelar"
          onClick={() => setShowForm(false)}
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
              <span className={styles.detailPrice}>{detail.price}</span>
              <span className={styles.detailTotal}>{detail.price}</span>
            </div>
          ))}

          <div className={styles.invoiceTotal}>
            <span className={styles.totalItems}>
              Subtotal: {invoice.subtotal}
            </span>
            <span className={styles.taxes}>Impuestos: {invoice.taxes}</span>
            <span className={styles.total}>Total: {invoice.total}</span>
          </div>
        </div>
      </div>
    </section>
  ));
}

export default StoredInvoice;
