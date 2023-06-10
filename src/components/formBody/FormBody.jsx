import FormRow from "../formRow/FormRow";
import styles from "./formBody.module.css";

function FormBody({
  itemPrice,
  totalItem,
  product,
  quantity,
  handleRowChange,
  handleItemPriceChange,
  handleTotalItemChange,
}) {
  return (
    <section className={styles.formBodyContainer}>
      <FormRow
        itemPrice={itemPrice}
        totalItem={totalItem}
        product={product}
        quantity={quantity}
        handleRowChange={handleRowChange}
        handleItemPriceChange={handleItemPriceChange}
        handleTotalItemChange={handleTotalItemChange}
        index={"1"}
      />
      <FormRow
        itemPrice={itemPrice}
        totalItem={totalItem}
        product={product}
        quantity={quantity}
        handleRowChange={handleRowChange}
        handleItemPriceChange={handleItemPriceChange}
        handleTotalItemChange={handleTotalItemChange}
        index={"2"}
      />
      <FormRow
        itemPrice={itemPrice}
        totalItem={totalItem}
        product={product}
        quantity={quantity}
        handleRowChange={handleRowChange}
        handleItemPriceChange={handleItemPriceChange}
        handleTotalItemChange={handleTotalItemChange}
        index={"3"}
      />
      <FormRow
        itemPrice={itemPrice}
        totalItem={totalItem}
        product={product}
        quantity={quantity}
        handleRowChange={handleRowChange}
        handleItemPriceChange={handleItemPriceChange}
        handleTotalItemChange={handleTotalItemChange}
        index={"4"}
      />
      <FormRow
        itemPrice={itemPrice}
        totalItem={totalItem}
        product={product}
        quantity={quantity}
        handleRowChange={handleRowChange}
        handleItemPriceChange={handleItemPriceChange}
        handleTotalItemChange={handleTotalItemChange}
        index={"5"}
      />
      <FormRow
        itemPrice={itemPrice}
        totalItem={totalItem}
        product={product}
        quantity={quantity}
        handleRowChange={handleRowChange}
        handleItemPriceChange={handleItemPriceChange}
        handleTotalItemChange={handleTotalItemChange}
        index={"6"}
      />
    </section>
  );
}

export default FormBody;
