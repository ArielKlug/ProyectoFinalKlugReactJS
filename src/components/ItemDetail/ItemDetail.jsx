import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Context from "../../context/Context";


import styles from "./ItemDetail.module.css";

const ItemDetail = ({ products }) => {
  const { carrito, setCarrito, count, setCount, total, setTotal } =
    useContext(Context);
  const { category, id } = useParams();

  const item = products.find(
    (item) => item.id === id && item.category === category
  );

  const addCarrito = () => {
    setCount(count + item.amount);
    setTotal(total + item.price);

    const existeProduct = carrito.find((product) => product.id === item.id);
    if (existeProduct) {
      const newCarrito = carrito.map((product) =>
        product.id === item.id
          ? { ...product, amount: product.amount + 1 }
          : product
      );
      setCarrito(newCarrito);
    } else {
      setCarrito([...carrito, { ...item, amount: 1 }]);
    }
  };

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.productImg}>
          <img src={item.img} alt={item.title} height="420" width="327" />
        </div>
        <div className={styles.productInfo}>
          <div className={styles.productText}>
            <h2>{item.title}</h2>
            <h3>
              <p>{item.description}</p>
            </h3>
            <div className={styles.productPriceBtn}>
              <p>
                <span>${item.price}</span>
              </p>

              <button onClick={() => addCarrito}>Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
