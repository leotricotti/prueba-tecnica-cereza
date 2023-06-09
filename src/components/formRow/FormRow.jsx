import { useContext } from "react";
import { DataContext } from "../../context/dataContext";
import styles from "./formRow.module.css";

function FormRow({ invoiceDetail, handleRowChange, index }) {
  const data = useContext(DataContext);
  const row = invoiceDetail[index];

  console.log(data);

  const handleDescriptionChange = (event) => {
    const inputValue = event.target.value;
    const matchingData = data.find((item) => item.title === inputValue);
    const description = matchingData ? matchingData.description : "";
    handleRowChange(index, "description", description);
  };

  return (
    <div className={styles.invoiceRow}>
      <input
        type="number"
        value={row.quantity}
        onChange={(e) => handleRowChange(index, "quantity", e.target.value)}
        required
        className={styles.quantity}
      />
      <input
        type="text"
        value={row.description}
        onChange={handleDescriptionChange}
        required
        className={styles.description}
      />
      <input
        type="number"
        value={row.price}
        onChange={(e) => handleRowChange(index, "price", e.target.value)}
        required
        className={styles.price}
      />
      <input
        type="number"
        value={row.price * row.quantity}
        onChange={(e) => handleRowChange(index, "total", e.target.value)}
        required
        className={styles.total}
      />
    </div>
  );
}

export default FormRow;
