import styles from "./formHeader.module.css";

function FormHeader({
  clientName,
  clientAddress,
  invoiceDate,
  invoiceNumber,
  handleSubmit,
  handleClientNameChange,
  handleClientAddressChange,
  handleInvoiceDateChange,
}) {
  return (
    <form onSubmit={handleSubmit} className={styles.formHeaderContainer}>
      <input
        type="text"
        id="client-name"
        value={clientName}
        onChange={handleClientNameChange}
        required
        className={styles.clientName}
      />
      <input
        type="text"
        id="client-address"
        value={clientAddress}
        onChange={handleClientAddressChange}
        required
        className={styles.clientAddress}
      />
      <input
        type="date"
        id="invoice-date"
        value={invoiceDate}
        onChange={handleInvoiceDateChange}
        required
        className={styles.invoiceDate}
      />
      <span className={styles.invoiceNumber}>Factura N° {invoiceNumber}</span>
    </form>
  );
}

export default FormHeader;
