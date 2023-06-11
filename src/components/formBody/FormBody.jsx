import FormRow from "../formRow/FormRow";
import styles from "./formBody.module.css";

function FormBody({
  product,
  quantity,
  showMenu,
  totalItem,
  itemPrice,
  matchingOptions,
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
      {showMenu && (
        <div className={styles.menuContainer}>
          <ul className={styles.menu}>
            {matchingOptions.map((option, idx) => (
              <li key={idx} className={styles.item}>
                {option.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default FormBody;
