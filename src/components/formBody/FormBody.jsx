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
  handleRowChange,
  handleProductChange,
}) {
  return (
    <section className={styles.formBodyContainer}>
      <FormRow
        matchingOptions={matchingOptions}
        inputValue={inputValue}
        showMenu={showMenu}
        itemPrice={itemPrice}
        totalItem={totalItem}
        product={product}
        quantity={quantity}
        handleProductChange={handleProductChange}
        handleRowChange={handleRowChange}
        index={"1"}
      />
      <FormRow
        matchingOptions={matchingOptions}
        inputValue={inputValue}
        showMenu={showMenu}
        itemPrice={itemPrice}
        totalItem={totalItem}
        product={product}
        quantity={quantity}
        handleProductChange={handleProductChange}
        handleRowChange={handleRowChange}
        index={"2"}
      />
      <FormRow
        matchingOptions={matchingOptions}
        inputValue={inputValue}
        showMenu={showMenu}
        itemPrice={itemPrice}
        totalItem={totalItem}
        product={product}
        quantity={quantity}
        handleProductChange={handleProductChange}
        handleRowChange={handleRowChange}
        index={"3"}
      />
      <FormRow
        matchingOptions={matchingOptions}
        inputValue={inputValue}
        showMenu={showMenu}
        itemPrice={itemPrice}
        totalItem={totalItem}
        product={product}
        quantity={quantity}
        handleProductChange={handleProductChange}
        handleRowChange={handleRowChange}
        index={"4"}
      />
      <FormRow
        matchingOptions={matchingOptions}
        inputValue={inputValue}
        showMenu={showMenu}
        itemPrice={itemPrice}
        totalItem={totalItem}
        product={product}
        quantity={quantity}
        handleProductChange={handleProductChange}
        handleRowChange={handleRowChange}
        index={"5"}
      />
      <FormRow
        matchingOptions={matchingOptions}
        inputValue={inputValue}
        showMenu={showMenu}
        itemPrice={itemPrice}
        totalItem={totalItem}
        product={product}
        quantity={quantity}
        handleProductChange={handleProductChange}
        handleRowChange={handleRowChange}
        index={"6"}
      />
    </section>
  );
}

export default FormBody;
