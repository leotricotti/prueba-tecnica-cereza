import styles from "./invoiceItem.module.css";

function InvoiceItem({ invoices }) {
  return invoices.map((invoice) => (
    <div key={invoice.numeroFactura}>
      <h3>Factura #{invoice.numeroFactura}</h3>
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Cliente:</strong>
            </td>
            <td>{invoice.cliente}</td>
          </tr>
          <tr>
            <td>
              <strong>Fecha:</strong>
            </td>
            <td>{invoice.fecha}</td>
          </tr>
          <tr>
            <td>
              <strong>Subtotal:</strong>
            </td>
            <td>{invoice.subtotal}</td>
          </tr>
          <tr>
            <td>
              <strong>IVA:</strong>
            </td>
            <td>{invoice.iva}</td>
          </tr>
          <tr>
            <td>
              <strong>Total:</strong>
            </td>
            <td>{invoice.total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  ));
}

export default InvoiceItem;
