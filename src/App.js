import Header from "./components/header/Header";
import InvoiceList from "./components/invoiceList/InvoiceList";
import Button from "./components/button/Button";
import InvoiceForm from "./components/invoiceForm/InvoiceForm";
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
      <Header title={"Facturación"} />
      <InvoiceList invoices={invoices} />
      <Button onClick={handleShowForm} />
      {showForm && (
        <InvoiceForm
          onSaveInvoice={handleSaveInvoice}
          setShowForm={setShowForm}
        />
      )}
    </div>
  );
}

export default App;
