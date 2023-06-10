import InvoiceItem from "../invoiceItem/InvoiceItem";
import styles from "./invoiceList.module.css";

function InvoiceList({ invoices, setShowInvoice }) {
  return (
    <section className={styles.invoiceList}>
      <InvoiceItem invoices={invoices} setShowInvoice={setShowInvoice} />
    </section>
  );
}

export default InvoiceList;
