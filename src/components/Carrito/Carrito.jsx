import { useContext } from "react";
import { Button, Text } from "@chakra-ui/react";
import Context from "../../context/Context";
import styles from "./Carrito.module.css";
import { MdDeleteSweep } from "react-icons/md";
import CarritoListContainer from "./CarritoListContainer";

const Carrito = () => {
  const {
    total,
    setCarrito,
    setCount,
    setTotal,

    msj,
  } = useContext(Context);

  

  

  const deleteCarrito = () => {
    setCarrito([]);
    setCount(0);
    setTotal(0);
  };

  return (
    <div>
      <h2>Carrito de compras</h2>

      <div className={styles.container}>
        <button className={styles.btn} onClick={() => deleteCarrito()}>
          <MdDeleteSweep /> <p>Vaciar carrito</p>
        </button>
      </div>

      <CarritoListContainer />
      
      <div className={styles.containerPago}>
        <div className={`flexStart ${styles.img}`}>
          <img src="../../../public/img/Logo-infinity.png" alt="Logo" />
        </div>

        <Text className={styles.precio} style={{ width: "100%" }}>
          Total: $ {total}
        </Text>
      </div>

      <Text color="red">{msj}</Text>

      
    </div>
  );
};

export default Carrito;
