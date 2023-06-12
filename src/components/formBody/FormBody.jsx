import FormRow from "../formRow/FormRow";
import styles from "./formBody.module.css";

function FormBody({ handleQuantityChange, invoiceData }) {
  const rowIndexes = ["0", "1", "2", "3", "4", "5", "6"];
  return (
    <section className={styles.formBodyContainer}>
      {rowIndexes.map((index) => (
        <FormRow
          key={index}
          index={index}
          invoiceData={invoiceData}
          handleQuantityChange={handleQuantityChange}
        />
      ))}
    </section>
  );
}

export default FormBody;
