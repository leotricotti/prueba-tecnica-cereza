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
  const indexSelected = parseInt(selectedProducts.length - 1);
  const productSelected = selectedProducts.map((product) => product.title);
  const priceItem = selectedProducts.map((product) => product.price);

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

  const { date, taxes, total, number, address, customer, subtotal } =
    invoiceData;

  const detail = invoiceData.details[selectedProducts.length - 1];
  const { product, quantity, itemPrice, totalItem } = detail || {};

  console.log(totalItem);

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
    handleProductChange(
      indexSelected,
      label,
      productSelected[selectedProducts.length - 1]
    );
    handleTotalItemChange(itemPrice, 3);
    handleItemPriceChange(
      indexSelected,
      "itemPrice",
      priceItem[selectedProducts.length - 1]
    );
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

  const handleItemPriceChange = (index, label, value) => {
    setInvoiceData((prevData) => {
      const updatedPrice = [...prevData.details];
      updatedPrice[index] = {
        ...updatedPrice[index],
        [label]: parseInt(value).toFixed(2),
      };
      return {
        ...prevData,
        details: updatedPrice,
      };
    });
  };

  const handleTotalItemChange = (price, quantity) => {
    console.log(price, quantity);
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
          itemPrice={itemPrice}
          totalItem={totalItem}
          handleQuantityChange={handleQuantityChange}
        />
        <FormFooter taxes={taxes} total={total} subtotal={subtotal} />
      </div>
    </main>
  );
}

export default InvoiceForm;
