import React, { useEffect } from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const modalRoot = document.getElementById("react-modal");

export default function Modal({ children, setIsModalOpen }) {
  useEffect(() => {
    function onEsc(evt) {
      if (evt.code === "Escape") {
        setIsModalOpen(false);
      }
    }
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, []);

  const closer = () => {
    setIsModalOpen(false);
  };

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div className={styles.button}>
        <CloseIcon type="primary" onClick={closer} extraClass={styles.button} />
      </div>
      {children}
    </div>,
    modalRoot
  );
}

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

export function OrderDetails() {
  console.log("Ghbdt");
  return (
    <div className={styles.box + " mt-30 mb-30"}>
      <p className="text text_type_digits-large">034536</p>
      <p className="text text_type_main-medium pt-8 pb-15">
        Идентификатор заказа
      </p>
      <img src="../../graphics.png" alt="Done" className="pb-15" />
      <p className="text text_type_main-small pb-2">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}
