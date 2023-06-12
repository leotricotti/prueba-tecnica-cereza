import React, { useEffect, useContext, useState } from "react";
import styles from "./invoiceForm.module.css";
import Spinner from "../../components/spinner/Spinner";
import { DataContext } from "../../context/dataContext";
import FormBody from "../../components/formBody/FormBody";
import FormFooter from "../../components/formFooter/FormFooter";
import FormHeader from "../../components/formHeader/FormHeader";
import FormHeaderMain from "../../components/formHeaderMain/FormHeadeMain";

function InvoiceForm({ onSaveInvoice, invoices }) {
  const [isLoading, setIsLoading] = useState(true);
  const localDate = new Date().toLocaleDateString();
  const invoiceNumber = invoices.invoices.length + 1;
  const { selectedProducts, setSelectedProducts } = useContext(DataContext);

  const [invoiceData, setInvoiceData] = useState({
    number: `0000${invoiceNumber}`,
    customer: "",
    address: "",
    date: localDate,
    details: [],
    subtotal: "",
    taxes: "",
    total: "",
  });

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const subtotal = selectedProducts
      .reduce((acc, product) => {
        const itemPrice = parseFloat(product.price) || 0;
        const quantity = parseFloat(product.quantity) || 0;
        const totalItem = itemPrice * quantity;
        return acc + totalItem;
      }, 0)
      .toFixed(2);

    const taxes = (subtotal * 0.21).toFixed(2);
    const total = (parseFloat(subtotal) + parseFloat(taxes)).toFixed(2);

    setInvoiceData((prevData) => ({
      ...prevData,
      details: selectedProducts.map((product) => ({
        product: product.title,
        itemPrice: parseFloat(product.price).toFixed(2),
        quantity: parseFloat(product.quantity).toFixed(2),
        totalItem: (
          parseFloat(product.price) * parseFloat(product.quantity)
        ).toFixed(2),
      })),
      subtotal,
      taxes,
      total,
    }));
  }, [selectedProducts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveInvoice({
      address: invoiceData.address,
      customer: invoiceData.customer,
      quantity: invoiceData.details.reduce(
        (acc, detail) => acc + parseFloat(detail.quantity),
        0
      ),
    });
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

  const handleQuantityChange = (index, label, value) => {
    setInvoiceData((prevData) => {
      const updatedDetails = [...prevData.details];
      updatedDetails[index] = {
        ...updatedDetails[index],
        [label]: value,
        totalItem: (
          parseFloat(updatedDetails[index].itemPrice) * parseFloat(value)
        ).toFixed(2),
      };
      return {
        ...prevData,
        details: updatedDetails,
        subtotal: updatedDetails
          .reduce((acc, detail) => acc + parseFloat(detail.totalItem), 0)
          .toFixed(2),
        total: (
          parseFloat(
            updatedDetails.reduce(
              (acc, detail) => acc + parseFloat(detail.totalItem),
              0
            )
          ) + parseFloat(prevData.taxes)
        ).toFixed(2),
      };
    });
  };

  const handleRowDelete = (index) => {
    setSelectedProducts((prevSelectedProducts) => {
      const updatedSelectedProducts = [
        ...prevSelectedProducts.slice(0, index),
        ...prevSelectedProducts.slice(index + 1),
      ];
      return updatedSelectedProducts;
    });

    setInvoiceData((prevInvoiceData) => ({
      ...prevInvoiceData,
      details: [
        ...prevInvoiceData.details.slice(0, index),
        ...prevInvoiceData.details.slice(index + 1),
      ],
      subtotal: prevInvoiceData.details
        .slice(0, index)
        .concat(prevInvoiceData.details.slice(index + 1))
        .reduce((acc, detail) => acc + parseFloat(detail.totalItem), 0)
        .toFixed(2),
      total: (
        prevInvoiceData.details
          .slice(0, index)
          .concat(prevInvoiceData.details.slice(index + 1))
          .reduce((acc, detail) => acc + parseFloat(detail.totalItem), 0) +
        parseFloat(prevInvoiceData.taxes)
      ).toFixed(2),
    }));
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <main className={styles.invoiceContainer}>
      <FormHeaderMain />
      <div className={styles.innerInvoice}>
        <FormHeader
          date={invoiceData.date}
          number={invoiceData.number}
          address={invoiceData.address}
          customer={invoiceData.customer}
          handleSubmit={handleSubmit}
          handleNameChange={handleNameChange}
          handleAddressChange={handleAddressChange}
        />
        <FormBody
          invoiceData={invoiceData}
          handleRowDelete={handleRowDelete}
          handleQuantityChange={handleQuantityChange}
        />
        <FormFooter
          taxes={invoiceData.taxes}
          total={invoiceData.total}
          subtotal={invoiceData.subtotal}
        />
      </div>
    </main>
  );
}

export default InvoiceForm;
