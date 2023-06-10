import FormRow from "../formRow/FormRow";
import styles from "./formBody.module.css";

function FormBody({
  product,
  itemPrice,
  quantity,
  totalItem,
  handleProductChange,
  handleItemPriceChange,
  handleQuantityChange,
  handleTotalItemChange,
}) {
  return (
    <section className={styles.formBodyContainer}>
      <FormRow
        product={product}
        itemPrice={itemPrice}
        quantity={quantity}
        totalItem={totalItem}
        handleProductChange={handleProductChange}
        handleItemPriceChange={handleItemPriceChange}
        handleQuantityChange={handleQuantityChange}
        handleTotalItemChange={handleTotalItemChange}
        index={"1"}
      />
      <FormRow
        product={product}
        itemPrice={itemPrice}
        quantity={quantity}
        totalItem={totalItem}
        handleProductChange={handleProductChange}
        handleItemPriceChange={handleItemPriceChange}
        handleQuantityChange={handleQuantityChange}
        handleTotalItemChange={handleTotalItemChange}
        index={"2"}
      />
      <FormRow
        product={product}
        itemPrice={itemPrice}
        quantity={quantity}
        totalItem={totalItem}
        handleProductChange={handleProductChange}
        handleItemPriceChange={handleItemPriceChange}
        handleQuantityChange={handleQuantityChange}
        handleTotalItemChange={handleTotalItemChange}
        index={"3"}
      />
      <FormRow
        product={product}
        itemPrice={itemPrice}
        quantity={quantity}
        totalItem={totalItem}
        handleProductChange={handleProductChange}
        handleItemPriceChange={handleItemPriceChange}
        handleQuantityChange={handleQuantityChange}
        handleTotalItemChange={handleTotalItemChange}
        index={"4"}
      />
      <FormRow
        product={product}
        itemPrice={itemPrice}
        quantity={quantity}
        totalItem={totalItem}
        handleProductChange={handleProductChange}
        handleItemPriceChange={handleItemPriceChange}
        handleQuantityChange={handleQuantityChange}
        handleTotalItemChange={handleTotalItemChange}
        index={"5"}
      />
      <FormRow
        product={product}
        itemPrice={itemPrice}
        quantity={quantity}
        totalItem={totalItem}
        handleProductChange={handleProductChange}
        handleItemPriceChange={handleItemPriceChange}
        handleQuantityChange={handleQuantityChange}
        handleTotalItemChange={handleTotalItemChange}
        index={"6"}
      />
    </section>
  );
}

export default FormBody;
