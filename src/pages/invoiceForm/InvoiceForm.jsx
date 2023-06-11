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
  const productList = useContext(DataContext);
  const [isLoading, setIsLoading] = useState(true);
  // const [showMenu, setShowMenu] = useState(false);
  // const [matchingOptions, setMatchingOptions] = useState([]);
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
    product,
    customer,
    address,
    date,
    quantity,
    subtotal,
    taxes,
    total,
  } = invoiceData;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

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
    handleProductChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInvoice = {
      customer,
      address,
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
      <FormHeaderMain productList={productList} />
      <div className={styles.innerInvoice}>
        <FormHeader
          date={date}
          number={number}
          address={address}
          customer={customer}
          handleAddressChange={handleAddressChange}
          handleNameChange={handleNameChange}
          handleSubmit={handleSubmit}
        />
        <FormBody
          product={product}
          quantity={quantity}
          handleQuantityChange={handleQuantityChange}
        />
        <FormFooter
          taxes={taxes}
          total={total}
          subtotal={subtotal}
          handleSubtotalChange={handleSubtotalChange}
          handleTaxesChange={handleTaxesChange}
          handleTotalChange={handleTotalChange}
        />
      </div>
    </main>
  );
}

export default InvoiceForm;
