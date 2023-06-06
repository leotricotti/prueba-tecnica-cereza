import { useState, useEffect } from "react";
import Spinner from "./components/spinner/Spinner";
import Header from "./components/header/Header";
import InvoiceList from "./components/invoiceList/InvoiceList";
import Button from "./components/button/Button";
import InvoiceForm from "./components/invoiceForm/InvoiceForm";
import invoicesData from "./assets/data/invoices.json";

function App() {
  const [invoices, setInvoices] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    localStorage.setItem("invoices", JSON.stringify(invoicesData));
    const storedInvoices = JSON.parse(localStorage.getItem("invoices"));
    if (storedInvoices) {
      setInvoices(storedInvoices);
    }
  }, []);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleSaveInvoice = (invoiceData) => {
    setInvoices([...invoices, invoiceData]);
    setShowForm(false);
  };

  return isloading ? (
    <Spinner />
  ) : (
    <main>
      <Header title={"Facturación"} />
      <InvoiceList invoices={invoices} />
      <Button onClick={handleShowForm}>Agregar factura</Button>
      {showForm && (
        <InvoiceForm
          onSaveInvoice={handleSaveInvoice}
          setShowForm={setShowForm}
        />
      )}
    </main>
  );
}

export default App;
