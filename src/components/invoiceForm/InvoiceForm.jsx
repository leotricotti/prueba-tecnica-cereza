import React, { useEffect, useContext, useState } from "react";
import { DataContext } from "../../context/dataContext";
import FormHeader from "../formHeader/FormHeader";
import FormBody from "../formBody/FormBody";
import Button from "../button/Button";
import FormFooter from "../formFooter/FormFooter";
import styles from "./invoiceForm.module.css";

function InvoiceForm({
  invoices,
  inputValue,
  onSaveInvoice,
  setShowForm,
  setIsLoading,
}) {
  const data = useContext(DataContext);
  const invoiceNumber = parseInt(invoices.number);
  const [showMenu, setShowMenu] = useState(false);
  const [matchingOptions, setMatchingOptions] = useState([]);
  const [invoiceData, setInvoiceData] = useState({
    number: "",
    customer: "",
    address: "",
    date: "",
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

  useEffect(() => {
    handelNumberChange();
    handleDateChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const handelNumberChange = (e) => {
    setInvoiceData((prevData) => ({
      ...prevData,
      number: invoiceNumber + 1,
    }));
  };

  const handleNameChange = (e) => {
    setInvoiceData((prevData) => ({
      ...prevData,
      customer: e.target.value,
    }));
  };

  const handleAddressChange = (e) => {
    setInvoiceData((prevData) => ({
      ...prevData,
      address: e.target.value,
    }));
  };

  const handleDateChange = () => {
    setInvoiceData((prevData) => ({
      ...prevData,
      date: new Date().toLocaleString(),
    }));
  };

  const handleQuantityChange = (e) => {
    setInvoiceData((prevData) => ({
      ...prevData,
      quantity: e.target.value,
    }));
  };

  const handleProductChange = (e) => {
    const matchingOptions = data.products.filter((item) =>
      item.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    setInvoiceData((prevData) => ({
      ...prevData,
      product: matchingOptions,
    }));
  };

  const handleItemPriceChange = (price) => {
    setInvoiceData((prevData) => ({
      ...prevData,
      itemPrice: price,
    }));
  };

  const handleTotalItemChange = (price, quantity) => {
    setInvoiceData((prevData) => ({
      ...prevData,
      totalItem: price * quantity,
    }));
  };

  const handleSubtotalChange = (totalItem) => {
    setInvoiceData((prevData) => ({
      ...prevData,
      subtotal: totalItem + totalItem,
    }));
  };

  const handleTaxesChange = (subtotal) => {
    setInvoiceData((prevData) => ({
      ...prevData,
      taxes: subtotal * 0.21,
    }));
  };

  const handleTotalChange = (subtotal, taxes) => {
    setInvoiceData((prevData) => ({
      ...prevData,
      total: subtotal + taxes,
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
          handleAddressChange={handleAddressChange}
          handleNameChange={handleNameChange}
          handleSubmit={handleSubmit}
          customer={customer}
          address={address}
          date={date}
          number={number}
        />
        <FormBody
          handleProductChange={handleProductChange}
          handleItemPriceChange={handleItemPriceChange}
          handleQuantityChange={handleQuantityChange}
          handleTotalItemChange={handleTotalItemChange}
          itemPrice={itemPrice}
          quantity={quantity}
          totalItem={totalItem}
        />
        <FormFooter
          handleSubtotalChange={handleSubtotalChange}
          handleTaxesChange={handleTaxesChange}
          handleTotalChange={handleTotalChange}
          subtotal={subtotal}
          taxes={taxes}
          total={total}
        />
      </div>
    </section>
  );
}

export default InvoiceForm;
