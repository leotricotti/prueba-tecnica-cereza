import InvoiceItem from "../invoiceItem/InvoiceItem";
import styles from "./invoiceList.module.css";

function InvoiceList({ invoices, setShowInvoice, setInvoiceId }) {
  return (
    <section className={styles.invoiceList}>
      <InvoiceItem
        invoices={invoices}
        setShowInvoice={setShowInvoice}
        setInvoiceId={setInvoiceId}
      />
    </section>
  );
}

export default InvoiceList;
