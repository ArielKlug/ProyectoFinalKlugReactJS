import { useState, createContext } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [order, changeOrder] = useState(false);
  const [items, changeItems] = useState(false);
  const [filter, changeFilter] = useState(false);

  const [selectCategory, setSelectCategory] = useState(null);

  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);

  return (
    <Context.Provider
      value={{
        order,
        changeOrder,
        items,
        changeItems,
        filter,
        changeFilter,

        selectCategory,
        setSelectCategory,

        carrito,
        setCarrito,
        count,
        setCount,
        total,
        setTotal,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
