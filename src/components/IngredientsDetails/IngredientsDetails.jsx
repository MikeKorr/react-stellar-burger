import styles from "./IngredientsDetails.module.css";
import { useSelector } from "react-redux";

export function IngredientsDetails() {
  const {
    item: { item },
  } = useSelector((store) => ({
    item: store.ingredientReducer,
  }));

  return (
    <div className={styles.box + " mt-30 mb-30"}>
      <div className={styles.title}>
        <p className=" text text_type_main-large">Детали ингредиента</p>
      </div>
      <img src={item.image_large} className="pb-4" alt={item.name} />
      <p className="text text_type_main-medium pb-8">{item.name}</p>
      <div
        className={
          styles.row + " text text_type_main-default text_color_inactive"
        }
      >
        <div className={styles.str + " mr-5"}>
          <span>Калории,калл</span>
          <span>{item.calories}</span>
        </div>
        <div className={styles.str + " mr-5"}>
          <span>Белки, г</span>
          <span>{item.proteins}</span>
        </div>
        <div className={styles.str + " mr-5"}>
          <span>Жиры, г</span>
          <span>{item.fat}</span>
        </div>
        <div className={styles.str}>
          <span>Углеводы, г</span>
          <span>{item.carbohydrates}</span>
        </div>
      </div>
    </div>
  );
}
