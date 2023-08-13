import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Ingredient.module.css";
import { ingredientPropType } from "../../utils/prop-types";
import { useDispatch, useSelector } from "react-redux";
import { ADD_ING_ACTION, SET_ITEM_ACTION } from "../../services/actions";
import { useDrag } from "react-dnd";

export function Bun({ ingredients, ingType, setIsModalOpen, changeModal }) {
  const dispatch = useDispatch();
  const handleClick = (evt) => {
    dispatch(SET_ITEM_ACTION(evt));
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
              <div draggable key={item._id}>
                <Dnd item={item} key={item._id}>
                  <ProtoIngredient
                    handlerClick={handleClick}
                    key={item._id}
                    item={item}
                  />
                </Dnd>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export function Sauce({ ingredients, ingType, setIsModalOpen, changeModal }) {
  const dispatch = useDispatch();
  const handleClick = (evt) => {
    dispatch(SET_ITEM_ACTION(evt));
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
              <div draggable key={item._id}>
                <Dnd item={item} key={item._id}>
                  <ProtoIngredient
                    handlerClick={handleClick}
                    key={item._id}
                    item={item}
                  />
                </Dnd>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export function Main({ ingredients, ingType, setIsModalOpen, changeModal }) {
  const dispatch = useDispatch();
  const handleClick = (evt) => {
    dispatch(SET_ITEM_ACTION(evt));
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
              <div key={item._id}>
                <Dnd item={item} key={item._id}>
                  <ProtoIngredient
                    handlerClick={handleClick}
                    key={item._id}
                    item={item}
                  />
                </Dnd>
              </div>
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

function ProtoIngredient({ item }) {
  return (
    <div className={styles.ingredient}>
      <Counter count={1} size="default" extraClass="m-1" />
      <img className="ml-4 mr-4" src={item.image} />
      <div className={styles.block + " mt-1 mb-1"}>
        <span className="text text_type_digits-default mr-1">{item.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <p className={styles.center + " text text_type_main-small"}>
        {item.name}
      </p>
    </div>
  );
}

function Dnd({ children, item }) {
  const [, dragRef] = useDrag(
    {
      type: "ingredient",
      item: {
        item,
        type: item.type,
      },
    },
    []
  );
  return <div ref={dragRef}>{children}</div>;
}
