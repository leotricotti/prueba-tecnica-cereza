import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileLines,
  faFolderOpen,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./invoiceItem.module.css";

function InvoiceItem({ invoices, setShowInvoice, setInvoiceId }) {
  const sortedInvoices = invoices.invoices.sort((a, b) => b.number - a.number);
  const openFolder = (id) => {
    setShowInvoice(true);
    setInvoiceId(id);
  };

  return (
    <div className={styles.invoiceContainer}>
      {sortedInvoices.map((invoice) => (
        <div key={invoice.number} className={styles.invoiceInner}>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon icon={faFileLines} className={styles.icon} />
          </div>
          <h4 className={styles.title}>
            Factura # <br /> {invoice.number}
          </h4>
          <table>
            <tbody className={styles.body}>
              <tr className={styles.item}>
                <td>
                  <p>Cliente</p>
                </td>
                <td>
                  <strong>{invoice.customer}</strong>
                </td>
              </tr>
            </tbody>
          </table>
          <div className={styles.options}>
            <button onClick={() => openFolder(invoice.number)}>
              <FontAwesomeIcon
                icon={faFolderOpen}
                className={styles.optionsIcon}
              />
            </button>
            <button>
              <FontAwesomeIcon icon={faPrint} className={styles.optionsIcon} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InvoiceItem;
