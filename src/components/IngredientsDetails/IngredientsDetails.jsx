import styles from "./IngredientsDetails.module.css";

export function IngredientsDetails({ itemIng }) {
  return (
    <div className={styles.box + " mt-30 mb-30"}>
      <div className={styles.title}>
        <p className=" text text_type_main-large">Детали ингредиента</p>
      </div>
      <img src={itemIng.image_large} className="pb-4" alt={itemIng.name} />
      <p className="text text_type_main-medium pb-8">{itemIng.name}</p>
      <div
        className={
          styles.row + " text text_type_main-default text_color_inactive"
        }
      >
        <div className={styles.str + " mr-5"}>
          <span>Калории,калл</span>
          <span>{itemIng.calories}</span>
        </div>
        <div className={styles.str + " mr-5"}>
          <span>Белки, г</span>
          <span>{itemIng.proteins}</span>
        </div>
        <div className={styles.str + " mr-5"}>
          <span>Жиры, г</span>
          <span>{itemIng.fat}</span>
        </div>
        <div className={styles.str}>
          <span>Углеводы, г</span>
          <span>{itemIng.carbohydrates}</span>
        </div>
      </div>
    </div>
  );
}
