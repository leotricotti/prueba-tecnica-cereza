import { useEffect, useState } from "react";
import styles from "./invoiceForm.module.css";

function InvoiceForm({ onSaveInvoice, setShowForm }) {
  const [invoiceData, setInvoiceData] = useState({
    clientName: "",
    clientAddress: "",
    invoiceDate: "",
    invoiceNumber: 10,
  });

  const { clientName, invoiceDate, invoiceNumber } = invoiceData;

  useEffect(() => {
    setInvoiceData((prevData) => ({
      ...prevData,
      invoiceNumber: prevData.invoiceNumber + 1,
    }));
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

  const handleClientNameChange = (e) => {
    setInvoiceData((prevData) => ({
      ...prevData,
      clientName: e.target.value,
    }));
  };

  const handleInvoiceDateChange = (e) => {
    setInvoiceData((prevData) => ({
      ...prevData,
      invoiceDate: e.target.value,
    }));
  };

  return (
    <section className={styles.invoiceContainer}>
      <div className={styles.innerInvoice}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="client-name"
            value={clientName}
            onChange={handleClientNameChange}
            required
            className={styles.clientName}
          />
          <input
            type="date"
            id="invoice-date"
            value={invoiceDate}
            onChange={handleInvoiceDateChange}
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
