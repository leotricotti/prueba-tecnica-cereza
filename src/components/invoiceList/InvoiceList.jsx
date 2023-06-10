import InvoiceItem from "../invoiceItem/InvoiceItem";
import styles from "./invoiceList.module.css";

function InvoiceList({ invoices, setShowInvoice, setInvoiceId, setIsLoading }) {
  const handleShowInvoice = (id) => {
    setShowInvoice(true);
    setInvoiceId(id);
    setIsLoading(true);
  };
  return (
    <section className={styles.invoiceList}>
      <InvoiceItem invoices={invoices} handleShowInvoice={handleShowInvoice} />
    </section>
  );
}

export default InvoiceList;
