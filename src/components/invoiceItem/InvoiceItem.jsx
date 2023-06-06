import styles from "./invoiceItem.module.css";

function InvoiceItem({ invoices }) {
  console.log(invoices);
  return invoices.invoices.map((invoice) => (
    <div key={invoice.number}>
      <h3>Factura N° {invoice.number}</h3>
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Cliente:</strong>
            </td>
            <td>{invoice.costumer}</td>
          </tr>
          <tr>
            <td>
              <strong>Fecha:</strong>
            </td>
            <td>{invoice.date}</td>
          </tr>
          <tr>
            <td>
              <strong>Total:</strong>
            </td>
            <td>$ {invoice.total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  ));
}

export default InvoiceItem;
