import Header from "./components/header/Header";
import Button from "./components/button/Button";
import { useState } from "react";

function App() {
  const [invoices, setInvoices] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleSaveInvoice = (invoiceData) => {
    setInvoices([...invoices, invoiceData]);
    setShowForm(false);
  };

  return (
    <div>
      <Header />
      <InvoiceList invoices={invoices} />
      <Button onClick={handleShowForm} />
      {showForm && <InvoiceForm onSaveInvoice={handleSaveInvoice} />}
    </div>
  );
}

export default App;
