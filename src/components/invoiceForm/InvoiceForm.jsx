import { useState } from "react";

function InvoiceForm({ onSaveInvoice, setShowForm }) {
  const [clientName, setClientName] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [invoiceTotal, setInvoiceTotal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInvoice = {
      clientName,
      invoiceDate,
      invoiceTotal,
    };
    onSaveInvoice(newInvoice);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="client-name">Nombre del Cliente:</label>
        <input
          type="text"
          id="client-name"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          required
        />

        <label htmlFor="invoice-date">Fecha:</label>
        <input
          type="date"
          id="invoice-date"
          value={invoiceDate}
          onChange={(e) => setInvoiceDate(e.target.value)}
          required
        />

        <label htmlFor="invoice-total">Total:</label>
        <input
          type="number"
          id="invoice-total"
          value={invoiceTotal}
          onChange={(e) => setInvoiceTotal(e.target.value)}
          required
        />

        <button type="submit">Guardar</button>
        <button type="button" onClick={() => setShowForm(false)}>
          Cancelar
        </button>
      </form>
    </section>
  );
}

export default InvoiceForm;
