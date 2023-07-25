import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import styles from "./AppMain.module.css";
import { useState } from "react";

export default function AppMain({
  data,
  setIsModalOpen,

  changeModal,
  draggedElements,
}) {
  return (
    <div className={styles.main}>
      <BurgerIngredients
        data={data}
        setIsModalOpen={setIsModalOpen}
        changeModal={changeModal}
      />
      <BurgerConstructor
        data={data}
        setIsModalOpen={setIsModalOpen}
        changeModal={changeModal}
      />
    </div>
  );
}
