import { Bun, Main, Sauce } from "../Ingredient/Ingredient";
import styles from "./BurgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { SET_TAB_ACTION, SCROLL_ING_ACTION } from "../../services/actions";

export default function BurgerIngredients({
  data,
  setIsModalOpen,
  changeModal,
}) {
  const dispatch = useDispatch();
  const scroll = useSelector((state) => state.scrollReducer.scroll);

  const refBun = useRef();
  const refSauce = useRef();
  const refMain = useRef();
  const refScroll = useRef();
  console.log(scroll);

  useEffect(() => {
    if (scroll === "bun") {
      refBun.current.scrollIntoView({ behavior: "smooth" });
    }
    if (scroll === "sauce") {
      refSauce.current.scrollIntoView({ behavior: "smooth" });
    }
    if (scroll === "main") {
      refMain.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [scroll]);

  useEffect(() => {
    const currents = [refBun.current, refSauce.current, refMain.current];
    const watcher = new IntersectionObserver(
      (currents) => {
        currents.forEach((heading) => {
          console.log(heading.target, refBun.current, refSauce.current);
          if (heading.target === refBun.current) {
            dispatch(SET_TAB_ACTION("bun"));
          }
          if (heading.target === refSauce.current) {
            dispatch(SET_TAB_ACTION("sauce"));
          }
          if (heading.target === refMain.current) {
            dispatch(SET_TAB_ACTION("main"));
          }
        });
      },
      {
        root: refScroll.current,
        rootMargin: "0px 0px -70% 0px",
      }
    );
    currents.forEach((heading) => {
      return watcher.observe(heading);
    });
  }, [dispatch]);

  return (
    <div className={styles.box + " mt-10"} ref={refScroll}>
      <span className=" text text_type_main-large">Соберите бургер</span>
      <div className="mt-5">
        <BurgerComponents
          refBun={refBun}
          refSauce={refSauce}
          refMain={refMain}
        />
        <div className={styles.ingBox + " custom-scroll"}>
          <div className="mt-10">
            <span className={styles.name} ref={refBun}>
              Булки
            </span>
            <Bun
              ingredients={data}
              ingType={"Булки"}
              setIsModalOpen={setIsModalOpen}
              changeModal={changeModal}
            />
          </div>
          <div className="mt-10">
            <span className={styles.name} ref={refSauce}>
              Соусы
            </span>
            <Sauce
              ingredients={data}
              ingType={"Соусы"}
              setIsModalOpen={setIsModalOpen}
              changeModal={changeModal}
            />
          </div>
          <div className="mt-10">
            <span className={styles.name} ref={refMain}>
              Начинка
            </span>
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
  const dispatch = useDispatch();
  const current = useSelector((state) => state.scrollReducer.current);
  const setCurrent = (value) => {
    dispatch(SET_TAB_ACTION(value));
    dispatch(SCROLL_ING_ACTION(value));
  };

  return (
    <div style={{ display: "flex" }}>
      <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
        Булки
      </Tab>

      <Tab value="sauce" active={current === "sauce"} onClick={setCurrent}>
        Соусы
      </Tab>

      <Tab value="main" active={current === "main"} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  );
}
