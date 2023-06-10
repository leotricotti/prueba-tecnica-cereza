import { useState, useEffect } from "react";
import Spinner from "./components/spinner/Spinner";
import Header from "./components/header/Header";
import StoredInvoice from "./components/storedInvoice/StoredInvoice";
import InvoiceList from "./components/invoiceList/InvoiceList";
import InvoiceForm from "./components/invoiceForm/InvoiceForm";
import invoicesData from "./assets/data/invoicesData.json";
import styles from "./app.module.css";

function App() {
  const [invoices, setInvoices] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showInvoice, setShowInvoice] = useState(false);
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
    <main
      className={`${styles.appWrapper} ${
        showForm || showInvoice ? styles.overflow : ""
      }`}
    >
      <Header
        title={"Facturación"}
        onClick={handleShowForm}
        showForm={showForm}
      />
      <InvoiceList invoices={invoices} setShowInvoice={setShowInvoice} />
      {showForm && (
        <InvoiceForm
          onSaveInvoice={handleSaveInvoice}
          setShowForm={setShowForm}
        />
      )}
      {showInvoice && <StoredInvoice setShowInvoice={setShowInvoice} />}
    </main>
  );
}

export default App;
