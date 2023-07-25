import {
  ConstructorElement,
  DragIcon,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerConstructor.module.css";
import { useDrop } from "react-dnd";
import { useState } from "react";

export default function BurgerConstructor({ data, changeModal }) {
  const [draggedElements, setDraggedElements] = useState([]);
  const [, dropRef] = useDrop({
    accept: "Ing",
    drop(data) {
      setDraggedElements([...draggedElements, data]);
    },
  });
  return (
    <div>
      <div className={styles.const + " mb-4 mt-4"}>
        <div className={styles.ing}>
          <div className={styles.hidden}>
            <DragIcon type="primary" />
          </div>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
          />
        </div>
      </div>
      <div className={styles.main + " custom-scroll"}>
        {draggedElements.map((item) => {
          if (item.type == "main") {
            return (
              <div key={item._id} className={styles.ing} ref={dropRef}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image}
                  extraClass="mb-4"
                />
              </div>
            );
          }
        })}
      </div>
      <div className={styles.ing}>
        <div className={styles.hidden}>
          <DragIcon type="primary" />
        </div>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
        />
      </div>
      <div className={styles.left + " mt-10"}>
        <div className={styles.box + " mr-10"}>
          <p className="text text_type_digits-medium">610</p>
          <CurrencyIcon type="primary" />
        </div>

        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={() => changeModal("Order")}
        >
          Оформить заказ
        </Button>
      </div>
    </div>
  );
}
