import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import styles from "./AppMain.module.css";

export default function AppMain({
  data,
  setIsModalOpen,
  setItemIng,
  changeModal,
}) {
  return (
    <div className={styles.main}>
      <BurgerIngredients
        data={data}
        setIsModalOpen={setIsModalOpen}
        setItemIng={setItemIng}
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
