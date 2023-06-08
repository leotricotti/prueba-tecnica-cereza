import FormRow from "../formRow/FormRow";
import styles from "./formBody.module.css";

function FormBody({ invoiceDetail, handleRowChange }) {
  return (
    <section className={styles.formBodyContainer}>
      <FormRow
        invoiceDetail={invoiceDetail}
        handleRowChange={handleRowChange}
      />
      <FormRow
        invoiceDetail={invoiceDetail}
        handleRowChange={handleRowChange}
      />
    </section>
  );
}
export default FormBody;
