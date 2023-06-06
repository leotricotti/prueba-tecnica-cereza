import styles from "./invoiceItem.module.css";

function InvoiceItem({ invoice }) {
  return <li className={styles.item}>{invoice.clientName}</li>;
}

export default InvoiceItem;
