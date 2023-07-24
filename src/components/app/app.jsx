import styles from "./app.module.css";
import AppHeader from "../AppHeader/AppHeader";
import AppMain from "../AppMain/AppMain";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import { IngredientsDetails } from "../IngredientsDetails/IngredientsDetails";
import { OrderDetails } from "../OrderDetails/OrderDetails";

// import { compose, createStore, applyMiddleware } from "redux";
// import { compose, createStore } from "redux";
// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose;

// const enhancer = composeEnhancers();

// const store = createStore(rootReducer, enhancer);

function App() {
  const [ingridientList, setingridientList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemIng, setItemIng] = useState();

  const [itemModal, setItemModal] = useState("");

  function changeModal(mod) {
    setItemModal(mod);
    if (isModalOpen) {
      setIsModalOpen(false);
    } else {
      setIsModalOpen(true);
    }
  }

  useEffect(() => {
    fetch("https://norma.nomoreparties.space/api/ingredients")
      .then((res) => {
        if (res.ok) {
          return res.json().then((data) => {
            setingridientList(data.data);
          });
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      <AppMain
        data={ingridientList}
        setItemIng={setItemIng}
        setIsModalOpen={setIsModalOpen}
        changeModal={changeModal}
      />
      {isModalOpen && (
        <>
          <Modal setIsModalOpen={setIsModalOpen}>
            {itemModal == "Order" ? (
              <OrderDetails />
            ) : (
              <IngredientsDetails itemIng={itemIng} />
            )}
          </Modal>
        </>
      )}
    </div>
  );
}

export default App;
