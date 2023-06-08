import FormRow from "../formRow/FormRow";
import styles from "./formBody.module.css";

function FormBody({ invoiceDetail, handleRowChange }) {
  return (
    <section className={styles.formBody}>
      {invoiceDetail.map((index) => (
        <FormRow
          key={index}
          invoiceDetail={invoiceDetail}
          handleRowChange={handleRowChange}
          index={index}
        />
      ))}
    </section>
  );
}

export default FormBody;
