import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import InvoiceList from "./pages/invoiceList/InvoiceList";
import Spinner from "./components/spinner/Spinner";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [isLoading]);

  return isLoading ? (
    <Spinner />
  ) : (
    <Routes>
      <Route path="/" element={<InvoiceList />} />
    </Routes>
  );
}

export default App;
