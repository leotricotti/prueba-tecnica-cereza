import { useState, useEffect } from "react";
import Spinner from "./components/spinner/Spinner";
import Header from "./components/header/Header";
import InvoiceList from "./components/invoiceList/InvoiceList";
import InvoiceForm from "./components/invoiceForm/InvoiceForm";
import invoicesData from "./assets/data/invoices.json";

function App() {
  const [invoices, setInvoices] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

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
      {showForm && (
        <InvoiceForm
          onSaveInvoice={handleSaveInvoice}
          setShowForm={setShowForm}
        />
      )}
      <Header title={"Facturación"} onClick={handleShowForm} />
      <InvoiceList invoices={invoices} />
    </main>
  );
}

export default App;
