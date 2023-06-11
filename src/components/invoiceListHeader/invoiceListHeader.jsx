import InvoiceListSearch from "../invoiceListSearch/InvoiceListSearch";
import Button from "../button/Button";
import styles from "./invoicelistHeader.module.css";

function InvoiceListHeader({
  data,
  setShowInvoice,
  link,
  setIsLoading,
  onClick,
}) {
  return (
    <nav className={styles.navContainer}>
      <InvoiceListSearch
        data={data}
        setShowInvoice={() => setShowInvoice(true)}
        setIsLoading={setIsLoading}
      />
      <Button
        text="Crear factura"
        onClick={onClick}
        styles={styles.button}
        link={link}
      />
    </nav>
  );
}

export default InvoiceListHeader;
