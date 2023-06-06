import InvoiceItem from "../invoiceItem/InvoiceItem";
import styles from "./invoiceList.module.css";

function InvoiceList({ title, invoices }) {
  return (
    <section className={styles.invoiceList}>
      <h2 className={styles.title}>{title}</h2>
      <InvoiceItem invoice={invoices} />
    </section>
  );
}

export default InvoiceList;
