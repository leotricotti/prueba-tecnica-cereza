import FormRow from "../formRow/FormRow";
import styles from "./formBody.module.css";

function FormBody({
  matchingOptions,
  inputValue,
  showMenu,
  itemPrice,
  totalItem,
  product,
  quantity,
  handleQuantityChange,
  handleProductChange,
}) {
  const rowIndexes = ["1", "2", "3", "4", "5", "6"];

  return (
    <section className={styles.formBodyContainer}>
      {rowIndexes.map((index) => (
        <FormRow
          key={index}
          matchingOptions={matchingOptions}
          inputValue={inputValue}
          showMenu={showMenu}
          itemPrice={itemPrice}
          totalItem={totalItem}
          product={product}
          quantity={quantity}
          handleQuantityChange={handleQuantityChange}
          handleProductChange={handleProductChange}
          index={index}
        />
      ))}
    </section>
  );
}

export default FormBody;
