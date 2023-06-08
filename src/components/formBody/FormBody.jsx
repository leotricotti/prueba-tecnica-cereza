import FormRow from "../formRow/FormRow";
import styles from "./formBody.module.css";

function FormBody({ invoiceDetail, handleRowChange }) {
  return (
    <section className={styles.formBodyContainer}>
      <FormRow
        invoiceDetail={invoiceDetail}
        handleRowChange={handleRowChange}
        index={"1"}
      />
      <FormRow
        invoiceDetail={invoiceDetail}
        handleRowChange={handleRowChange}
        index={"2"}
      />
      <FormRow
        invoiceDetail={invoiceDetail}
        handleRowChange={handleRowChange}
        index={"3"}
      />
      <FormRow
        invoiceDetail={invoiceDetail}
        handleRowChange={handleRowChange}
        index={"4"}
      />
      <FormRow
        invoiceDetail={invoiceDetail}
        handleRowChange={handleRowChange}
        index={"5"}
      />
      <FormRow
        invoiceDetail={invoiceDetail}
        handleRowChange={handleRowChange}
        index={"6"}
      />
    </section>
  );
}

export default FormBody;
