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
  const indexSelected = selectedProducts.map((product) =>
    selectedProducts.indexOf(product)
  );
  const productSelected = selectedProducts.map((product) => product.title);
  const label = "product";

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

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (selectedProducts.length === 0) {
      return;
    }
    handelNumberChange();
    handleTaxesChange(subtotal);
    handleDateChange(localDate);
    handleSubtotalChange(subtotal);
    handleTotalChange(subtotal, taxes);
    handleTotalItemChange(selectedProducts, quantity);
    handleProductChange(indexSelected, label, productSelected);
    handleItemPriceChange(selectedProducts.map((product) => product.price));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProducts]);

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

  const handleDateChange = (date) => {
    setInvoiceData((prevData) => ({
      ...prevData,
      date: date,
    }));
  };

  const handleQuantityChange = (index, label, value) => {
    console.log(index, label, value);
    setInvoiceData((prevData) => {
      const updatedQuantity = [...prevData.details];
      updatedQuantity[index][label] = value;
      return {
        ...prevData,
        details: [...prevData.details, updatedQuantity],
      };
    });
  };

  const handleProductChange = (index, label, value) => {
    console.log(index, label, value);
    setInvoiceData((prevData) => {
      const updatedProduct = [...prevData.details];
      updatedProduct[index] = {
        ...updatedProduct[index],
        [label]: value,
      };
      return {
        ...prevData,
        details: updatedProduct,
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
