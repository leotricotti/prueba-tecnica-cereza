import { useEffect, useState } from "react";
import FormHeader from "../formHeader/FormHeader";
import FormBody from "../formBody/FormBody";
import Button from "../button/Button";
import FormFooter from "../formFooter/FormFooter";
import styles from "./invoiceForm.module.css";

function InvoiceForm({ invoices, onSaveInvoice, setShowForm, setIsLoading }) {
  const invoiceNumber = parseInt(invoices.number);
  const [invoiceData, setInvoiceData] = useState({
    number: invoiceNumber,
    customer: "",
    address: "",
    date: new Date().toLocaleString(),
    details: Array(7)
      .fill()
      .map(() => ({
        product: "",
        itemPrice: "",
        quantity: "",
        totalItem: "",
      })),
    subtotal: "",
    taxes: "",
    total: "",
  });

  const {
    number,
    customer,
    address,
    date,
    product,
    itemPrice,
    quantity,
    totalItem,
    subtotal,
    taxes,
    total,
  } = invoiceData;

  useEffect(() => {
    setInvoiceData((prevData) => ({
      ...prevData,
      number: prevData.number + 1,
    }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInvoice = {
      customer,
      address,
      quantity,
    };
    onSaveInvoice(newInvoice);
  };

  const handelInvoiceNumberChange = (e) => {
    setInvoiceData((prevData) => ({
      ...prevData,
      number: prevData.number + 1,
    }));
  };
  const handleClientNameChange = (e) => {
    setInvoiceData((prevData) => ({
      ...prevData,
      customer: e.target.value,
    }));
  };

  const handleClientAddressChange = (e) => {
    setInvoiceData((prevData) => ({
      ...prevData,
      address: e.target.value,
    }));
  };

  const handleInvoiceDateChange = (e) => {
    setInvoiceData((prevData) => ({
      ...prevData,
      date: e.target.value,
    }));
  };

  const handleProductChange = (e) => {
    setInvoiceData((prevData) => ({
      ...prevData,
      product: e.target.value,
    }));
  };

  const handleItemPriceChange = (e) => {
    setInvoiceData((prevData) => ({
      ...prevData,
      itemPrice: e.target.value,
    }));
  };

  const handleQuantityChange = (e) => {
    setInvoiceData((prevData) => ({
      ...prevData,
      quantity: e.target.value,
    }));
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
          handleInvoiceNumberChange={handelInvoiceNumberChange}
          handleClientAddressChange={handleClientAddressChange}
          handleInvoiceDateChange={handleInvoiceDateChange}
          handleClientNameChange={handleClientNameChange}
          handleSubmit={handleSubmit}
          // customer={customer}
          // address={address}
          // date={date}
          // invoiceNumber={number}
        />
        <FormBody
          handleProductChange={handleProductChange}
          handleItemPriceChange={handleItemPriceChange}
          handleQuantityChange={handleQuantityChange}
        />
        <FormFooter subtotal={subtotal} taxes={taxes} total={total} />
      </div>
    </section>
  );
}

export default InvoiceForm;
