import FormRow from "../formRow/FormRow";
import styles from "./formBody.module.css";

function FormBody({ product, quantity, showMenu, totalItem, itemPrice }) {
  const rowIndexes = ["1", "2", "3", "4", "5", "6"];
  return (
    <section className={styles.formBodyContainer}>
      {rowIndexes.map((index) => (
        <FormRow
          key={index}
          showMenu={showMenu}
          itemPrice={itemPrice}
          totalItem={totalItem}
          product={product}
          quantity={quantity}
          index={index}
        />
      ))}
    </section>
  );
}

export default FormBody;
