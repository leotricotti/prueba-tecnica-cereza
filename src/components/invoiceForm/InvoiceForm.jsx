import React, { useEffect, useContext, useState } from "react";
import { DataContext } from "../../context/dataContext";
import FormHeader from "../formHeader/FormHeader";
import FormBody from "../formBody/FormBody";
import Button from "../button/Button";
import FormFooter from "../formFooter/FormFooter";
import styles from "./invoiceForm.module.css";

function InvoiceForm({ invoices, onSaveInvoice, setShowForm, setIsLoading }) {
  const localDate = new Date().toLocaleDateString();
  const data = useContext(DataContext);
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

  console.log(typeof invoiceData.number);

  console.log(invoices.number);

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
    handleItemPriceChange();
    handleTotalItemChange();
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
      number: prevData.number,
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
      date: localDate,
    }));
  };

  const handleRowChange = (index, field, value) => {
    setInvoiceData((prevData) => {
      const updatedDetail = [...prevData.details];
      updatedDetail[index][field] = value;
      return {
        ...prevData,
        details: updatedDetail,
      };
    });
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
          itemPrice={itemPrice}
          quantity={quantity}
          totalItem={totalItem}
          product={product}
          handleRowChange={handleRowChange}
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
