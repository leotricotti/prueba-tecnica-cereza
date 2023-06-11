import { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import StoredInvoice from "../../components/storedInvoice/StoredInvoice";
import InvoiceList from "../../components/invoiceList/InvoiceList";
import InvoiceForm from "../invoiceForm/InvoiceForm";
import Spinner from "../../components/spinner/Spinner";
import invoiceData from "../../assets/data/invoiceData.json";
import styles from "./invoiceList.module.css";

function App() {
  const [invoices, setInvoices] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showInvoice, setShowInvoice] = useState(false);
  const [invoiceId, setInvoiceId] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [isLoading]);

  useEffect(() => {
    localStorage.setItem("invoices", JSON.stringify(invoiceData));
    const storedInvoices = JSON.parse(localStorage.getItem("invoices"));
    if (storedInvoices) {
      setInvoices(storedInvoices);
    }
  }, []);

  const handleShowForm = () => {
    setShowForm(true);
    setIsLoading(true);
  };

  const handleSaveInvoice = (invoiceData) => {
    setInvoices([...invoices, invoiceData]);
    setShowForm(false);
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <main
      className={`${styles.appWrapper} ${
        showForm || showInvoice ? styles.overflow : ""
      }`}
    >
      <Header
        onClick={handleShowForm}
        showForm={showForm}
        data={invoices}
        setShowInvoice={setShowInvoice}
      />
      <InvoiceList
        invoices={invoices}
        setShowInvoice={setShowInvoice}
        setInvoiceId={setInvoiceId}
        setIsLoading={setIsLoading}
      />
      {showForm && (
        <InvoiceForm
          invoices={invoices}
          onSaveInvoice={handleSaveInvoice}
          setShowForm={setShowForm}
          setIsLoading={setIsLoading}
        />
      )}
      {showInvoice && (
        <StoredInvoice
          setShowInvoice={setShowInvoice}
          invoiceId={invoiceId}
          invoiceData={invoices}
          setIsLoading={setIsLoading}
        />
      )}
    </main>
  );
}

export default App;
