import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Ingredient.module.css";
import { ingredientPropType } from "../../utils/prop-types";

export function Bun({
  ingredients,
  ingType,
  setIsModalOpen,
  setItemIng,
  changeModal,
}) {
  const cliker = (evt) => {
    setItemIng(evt);
    setIsModalOpen(true);
    changeModal("Ing");
  };

  return (
    <div>
      <p className="text text_type_main-medium">{ingType}</p>
      <div className={styles.grid + " pt-6"}>
        {ingredients.map((item) => {
          if (item.type == "bun") {
            return (
              <ProtoIngredient
                handlerClick={cliker}
                key={item._id}
                ingredient={item}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export function Sauce({
  ingredients,
  ingType,
  setIsModalOpen,
  setItemIng,
  changeModal,
}) {
  const cliker = (evt) => {
    setItemIng(evt);
    setIsModalOpen(true);
    changeModal("Ing");
  };

  return (
    <div>
      <p className="text text_type_main-medium">{ingType}</p>
      <div className={styles.grid + " pt-6"}>
        {ingredients.map((item) => {
          if (item.type == "sauce") {
            return (
              <ProtoIngredient
                handlerClick={cliker}
                key={item._id}
                ingredient={item}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export function Main({
  ingredients,
  ingType,
  setIsModalOpen,
  setItemIng,
  changeModal,
}) {
  const cliker = (evt) => {
    setItemIng(evt);
    setIsModalOpen(true);
    changeModal("Ing");
  };

  return (
    <div>
      <p className="text text_type_main-medium">{ingType}</p>
      <div className={styles.grid + " pt-6"}>
        {ingredients.map((item) => {
          if (item.type == "main") {
            return (
              <ProtoIngredient
                handlerClick={cliker}
                key={item._id}
                ingredient={item}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

Main.propTypes = { ...ingredientPropType };
Sauce.propTypes = { ...ingredientPropType };
Bun.propTypes = { ...ingredientPropType };

// function Image(event) {
//   cardImage.src = event.target.src;
//   cardImage.alt = event.target.alt;
//   cardCaption.textContent = event.target.alt;
// }

function ProtoIngredient({ ingredient, handlerClick }) {
  return (
    <div className={styles.ingredient} onClick={() => handlerClick(ingredient)}>
      <Counter count={1} size="default" extraClass="m-1" />
      <img className="ml-4 mr-4" src={ingredient.image} />
      <div className={styles.block + " mt-1 mb-1"}>
        <span className="text text_type_digits-default mr-1">
          {ingredient.price}
        </span>
        <CurrencyIcon type="primary" />
      </div>
      <p className={styles.center + " text text_type_main-small"}>
        {ingredient.name}
      </p>
    </div>
  );
}
