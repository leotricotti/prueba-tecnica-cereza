import { useEffect, useState } from "react";
import FormHead from "../formHead/FormHead";
import styles from "./invoiceForm.module.css";

function InvoiceForm({ onSaveInvoice, setShowForm }) {
  const [invoiceData, setInvoiceData] = useState({
    clientName: "",
    clientAddress: "",
    invoiceDate: "",
    invoiceNumber: "00",
    invoiceDetail: Array(7).fill({
      quantity: "",
      description: "",
      price: "",
      total: "",
    }),
  });

  const {
    clientName,
    clientAddress,
    invoiceDate,
    invoiceNumber,
    invoiceDetail,
  } = invoiceData;

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
      invoiceDetail,
    };
    onSaveInvoice(newInvoice);
  };

  const handleClientNameChange = (e) => {
    setInvoiceData((prevData) => ({
      ...prevData,
      clientName: e.target.value,
    }));
  };

  const handleClientAddressChange = (e) => {
    setInvoiceData((prevData) => ({
      ...prevData,
      clientAddress: e.target.value,
    }));
  };

  const handleInvoiceDateChange = (e) => {
    setInvoiceData((prevData) => ({
      ...prevData,
      invoiceDate: e.target.value,
    }));
  };

  const handleRowChange = (index, field, value) => {
    setInvoiceData((prevData) => {
      const updatedDetail = [...prevData.invoiceDetail];
      updatedDetail[index][field] = value;
      return {
        ...prevData,
        invoiceDetail: updatedDetail,
      };
    });
  };

  return (
    <section className={styles.invoiceContainer}>
      <div className={styles.innerInvoice}>
        <FormHead
          handleClientAddressChange={handleClientAddressChange}
          handleClientNameChange={handleClientNameChange}
          handleInvoiceDateChange={handleInvoiceDateChange}
          handleSubmit={handleSubmit}
          clientName={clientName}
          clientAddress={clientAddress}
          invoiceDate={invoiceDate}
          invoiceNumber={invoiceNumber}
        />
        {invoiceDetail.map((row, index) => (
          <div key={index} className={styles.invoiceRow}>
            <input
              type="number"
              value={row.quantity}
              onChange={(e) =>
                handleRowChange(index, "quantity", e.target.value)
              }
              required
              className={styles.quantity}
            />
            <input
              type="text"
              value={row.description}
              onChange={(e) =>
                handleRowChange(index, "description", e.target.value)
              }
              required
              className={styles.description}
            />
            <input
              type="number"
              value={row.price}
              onChange={(e) => handleRowChange(index, "price", e.target.value)}
              required
              className={styles.price}
            />
            <input
              type="number"
              value={row.total}
              onChange={(e) => handleRowChange(index, "total", e.target.value)}
              required
              className={styles.total}
            />
          </div>
        ))}

        <button type="submit">Guardar</button>
        <button type="button" onClick={() => setShowForm(false)}>
          Cancelar
        </button>
      </div>
    </section>
  );
}

export default InvoiceForm;
