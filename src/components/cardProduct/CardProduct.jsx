import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Card.module.css";

const CardProduct = ({ image, title, price, categ, desc, id }) => {
  const { category } = useParams();

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.productImg}>
          <img src={image} alt={title}  />
        </div>
        <div className={styles.productInfo}>
          <div className={styles.productText}>
            <h2>{title}</h2>
            <h3><p>{desc}</p></h3>
            <div className={styles.productPriceBtn}>
              <p>
                <span>${price}</span>
              </p>
              {category !== undefined ? (
                <Link key={id} to={`${id}`}>
                  <button >
                    Ver detalle
                  </button>
                </Link>
              ) : (
                <Link key={id} to={`${categ}/${id}`}>
                  <button >
                    Ver detalle
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
