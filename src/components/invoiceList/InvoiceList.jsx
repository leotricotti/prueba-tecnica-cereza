import InvoiceItem from "../invoiceItem/InvoiceList";
import styles from "./invoiceList.module.css";

function InvoiceList({ title, invoices }) {
  return (
    <section className={styles.invoiceList}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.listContainer}>
        {invoices.map((invoice, index) => (
          <InvoiceItem key={index} invoice={invoice} />
        ))}
      </ul>
    </section>
  );
}

export default InvoiceList;
