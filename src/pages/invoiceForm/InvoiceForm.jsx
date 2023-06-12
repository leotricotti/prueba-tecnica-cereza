import React, { useEffect, useContext, useState } from "react";
import { DataContext } from "../../context/dataContext";
import FormHeaderMain from "../../components/formHeaderMain/FormHeadeMain";
import FormHeader from "../../components/formHeader/FormHeader";
import FormBody from "../../components/formBody/FormBody";
import FormFooter from "../../components/formFooter/FormFooter";
import styles from "./invoiceForm.module.css";
import Spinner from "../../components/spinner/Spinner";

function InvoiceForm({ onSaveInvoice }) {
  const localDate = new Date().toLocaleDateString();
  const { selectedProducts } = useContext(DataContext);
  const [isLoading, setIsLoading] = useState(true);
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
    date,
    taxes,
    total,
    number,
    address,
    product,
    customer,
    quantity,
    subtotal,
  } = invoiceData;

  console.log(invoiceData);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    handleDateChange();
    handelNumberChange();
    handleTaxesChange(subtotal);
    handleSubtotalChange(subtotal);
    handleTotalChange(subtotal, taxes);
    handleProductChange(selectedProducts.title);
    handleItemPriceChange(selectedProducts.price);
    handleTotalItemChange(selectedProducts, quantity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProducts, quantity, subtotal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInvoice = {
      address,
      customer,
      quantity,
    };
    onSaveInvoice(newInvoice);
  };

  const handelNumberChange = (number) => {
    setInvoiceData((prevData) => ({
      ...prevData,
      number: parseInt(number + 1),
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

  const handleQuantityChange = (index, label, value) => {
    setInvoiceData((prevData) => {
      const updatedQuantity = [...prevData.details];
      updatedQuantity[index][label] = value;
      return {
        ...prevData,
        details: [...prevData.details, updatedQuantity],
      };
    });
  };

  const handleProductChange = (price) => {
    setInvoiceData((prevData) => ({
      ...prevData,
      itemPrice: price,
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

  return isLoading ? (
    <Spinner />
  ) : (
    <main className={styles.invoiceContainer}>
      <FormHeaderMain />
      <div className={styles.innerInvoice}>
        <FormHeader
          date={date}
          number={number}
          address={address}
          customer={customer}
          handleSubmit={handleSubmit}
          handleNameChange={handleNameChange}
          handleAddressChange={handleAddressChange}
        />
        <FormBody
          product={product}
          quantity={quantity}
          handleQuantityChange={handleQuantityChange}
        />
        <FormFooter taxes={taxes} total={total} subtotal={subtotal} />
      </div>
    </main>
  );
}

export default InvoiceForm;
