import { Bun, Main, Sauce } from "../Ingredient/Ingredient";
import styles from "./BurgerIngredients.module.css";
import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

export default function BurgerIngredients({
  data,
  setIsModalOpen,
  changeModal,
}) {
  return (
    <div className={styles.box + " mt-10"}>
      <span className=" text text_type_main-large">Соберите бургер</span>
      <div className="mt-5">
        <BurgerComponents />
        <div className={styles.ingBox + " custom-scroll"}>
          <div className="mt-10" key={data._id}>
            <Bun
              ingredients={data}
              ingType={"Булки"}
              setIsModalOpen={setIsModalOpen}
              changeModal={changeModal}
            />
          </div>
          <div className="mt-10" key={data._id}>
            <Sauce
              ingredients={data}
              ingType={"Соусы"}
              setIsModalOpen={setIsModalOpen}
              changeModal={changeModal}
            />
          </div>
          <div className="mt-10" key={data._id}>
            <Main
              ingredients={data}
              ingType={"Начинка"}
              setIsModalOpen={setIsModalOpen}
              changeModal={changeModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function BurgerComponents() {
  const [current, setCurrent] = React.useState("Булки");
  return (
    <div style={{ display: "flex" }}>
      <Tab value="Булки" active={current === "Булки"} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="Соусы" active={current === "Соусы"} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="Начинки" active={current === "Начинки"} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  );
}
