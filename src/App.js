import { useState, useEffect } from "react";
import InvoiceList from "./pages/invoiceList/InvoiceList";
import Spinner from "./components/spinner/Spinner";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [isLoading]);

  return isLoading ? <Spinner /> : <InvoiceList />;
}

export default App;
