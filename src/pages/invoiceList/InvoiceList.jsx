import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import StoredInvoice from "../../components/storedInvoice/StoredInvoice";
import InvoiceList from "../../components/invoiceList/InvoiceList";
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
    setIsLoading(true);
    return <Link to="/invoice" />;
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <div
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
      {showInvoice && (
        <StoredInvoice
          setShowInvoice={setShowInvoice}
          invoiceId={invoiceId}
          invoiceData={invoices}
          setIsLoading={setIsLoading}
        />
      )}
    </div>
  );
}

export default App;
