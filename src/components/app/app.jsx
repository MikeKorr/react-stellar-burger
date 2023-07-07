import styles from "./app.module.css";
import AppHeader from "../AppHeader/AppHeader";
import AppMain from "../AppMain/AppMain";
import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import Overlay from "../Overlay/Overlay";
import { IngredientsDetails, OrderDetails } from "../Modal/Modal";
import { func } from "prop-types";

function App() {
  const [ingridientList, setingridientList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConstructorOpen, setIsConstructorOpen] = useState(false);
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

  // useEffect(() => {
  //   if (itemModal === "Order") {
  //     childForModal = () => <OrderDetails />;
  //   } else {
  //     childForModal = <IngredientsDetails itemIng={itemIng} />;
  //   }
  // }, [itemModal]);

  useEffect(() => {
    fetch("https://norma.nomoreparties.space/api/ingredients").then((res) => {
      res.json().then((data) => {
        setingridientList(data.data);
      });
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
          <Overlay setIsModalOpen={setIsModalOpen} />
        </>
      )}
    </div>
  );
}

export default App;
