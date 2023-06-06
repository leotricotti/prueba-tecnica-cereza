import { useEffect, useState } from "react";
import styles from "./invoiceForm.module.css";

function InvoiceForm({ onSaveInvoice, setShowForm }) {
  const [clientName, setClientName] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState(10);

  useEffect(() => {
    setInvoiceNumber((prev) => prev + 1);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInvoice = {
      clientName,
      invoiceDate,
      invoiceNumber,
    };
    onSaveInvoice(newInvoice);
  };

  return (
    <section className={styles.invoiceContainer}>
      <div className={styles.innerInvoice}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="client-name"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            required
            className={styles.clientName}
          />
          <input
            type="date"
            id="invoice-date"
            value={invoiceDate}
            onChange={(e) => setInvoiceDate(e.target.value)}
            required
            className={styles.invoiceDate}
          />
          <span className={styles.invoiceNumber}>
            Factura N° {invoiceNumber}
          </span>
          <button type="submit">Guardar</button>
          <button type="button" onClick={() => setShowForm(false)}>
            Cancelar
          </button>
        </form>
      </div>
    </section>
  );
}

export default InvoiceForm;
