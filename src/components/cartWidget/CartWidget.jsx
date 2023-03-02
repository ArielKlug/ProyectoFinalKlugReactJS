import { useContext } from "react";
import { HiShoppingCart } from "react-icons/hi";
import Context from "../../context/Context";


import styles from "./CartWidget.module.css"

const CartWidget = () => {
  const { count } = useContext(Context);

  return (
    <button className={styles.carrito}>
      <HiShoppingCart />
      <span className={styles.contador}>{count}</span>
    </button>
  );
};

export default CartWidget;
