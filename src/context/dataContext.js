import { createContext, useEffect, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [matchingOptions, setMatchingOptions] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const jsonData = await response.json();
        setProductList(jsonData);
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const value = {
    productList,
    matchingOptions,
    selectedProducts,
    setSelectedProducts,
    setMatchingOptions,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export { DataContext, DataProvider };
