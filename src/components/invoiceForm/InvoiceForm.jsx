import { useEffect, useState } from "react";
import FormHeader from "../formHeader/FormHeader";
import FormBody from "../formBody/FormBody";
import Button from "../button/Button";
import FormFooter from "../formFooter/FormFooter";
import styles from "./invoiceForm.module.css";

function InvoiceForm({ onSaveInvoice, setShowForm, setIsLoading }) {
  const [invoiceData, setInvoiceData] = useState({
    clientName: "",
    clientAddress: "",
    invoiceDate: "",
    invoiceNumber: "00",
    invoiceDetail: Array(7)
      .fill()
      .map(() => ({
        quantity: "",
        description: "",
        price: "",
        total: "",
      })),
  });

  const {
    clientName,
    clientAddress,
    invoiceDate,
    invoiceNumber,
    invoiceDetail,
  } = invoiceData;

  useEffect(() => {
    setInvoiceData((prevData) => ({
      ...prevData,
      invoiceNumber: prevData.invoiceNumber + 1,
    }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInvoice = {
      clientName,
      invoiceDate,
      invoiceNumber,
      invoiceDetail,
    };
    onSaveInvoice(newInvoice);
  };

  const handleClientNameChange = (e) => {
    setInvoiceData((prevData) => ({
      ...prevData,
      clientName: e.target.value,
    }));
  };

  const handleClientAddressChange = (e) => {
    setInvoiceData((prevData) => ({
      ...prevData,
      clientAddress: e.target.value,
    }));
  };

  const handleInvoiceDateChange = (e) => {
    setInvoiceData((prevData) => ({
      ...prevData,
      invoiceDate: e.target.value,
    }));
  };

  const handleRowChange = (index, field, value) => {
    setInvoiceData((prevData) => {
      const updatedDetail = [...prevData.invoiceDetail];
      updatedDetail[index][field] = value;
      return {
        ...prevData,
        invoiceDetail: updatedDetail,
      };
    });
  };

  const handleCancelButtonClick = () => {
    setShowForm(false);
    setIsLoading(true);
  };

  return (
    <section className={styles.invoiceContainer}>
      <div className={styles.buttonsContainer}>
        <Button
          text="Guardar"
          styles={styles.button}
          onClick={() => {
            setIsLoading(true);
          }}
        />
        <Button
          text="Cancelar"
          onClick={handleCancelButtonClick}
          styles={`${styles.button} ${styles.cancel}`}
        />
      </div>
      <div className={styles.innerInvoice}>
        <FormHeader
          handleClientAddressChange={handleClientAddressChange}
          handleClientNameChange={handleClientNameChange}
          handleInvoiceDateChange={handleInvoiceDateChange}
          handleSubmit={handleSubmit}
          clientName={clientName}
          clientAddress={clientAddress}
          invoiceDate={invoiceDate}
          invoiceNumber={invoiceNumber}
        />
        <FormBody
          invoiceDetail={invoiceDetail}
          handleRowChange={handleRowChange}
        />
        <FormFooter invoiceDetail={invoiceDetail} />
      </div>
    </section>
  );
}

export default InvoiceForm;
