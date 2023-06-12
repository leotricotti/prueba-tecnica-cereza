import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import InvoiceList from "./pages/invoiceList/InvoiceList";
import InvoiceForm from "./pages/invoiceForm/InvoiceForm";
import Spinner from "./components/spinner/Spinner";
import invoiceData from "./assets/data/invoiceData.json";

function App() {
  const [invoices, setInvoices] = useState([]);
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

  return isLoading ? (
    <Spinner />
  ) : (
    <Routes>
      <Route path="/" element={<InvoiceList invoices={invoices} />} />
      <Route path="/invoice" element={<InvoiceForm />} />
    </Routes>
  );
}

export default App;
