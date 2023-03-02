import { useEffect, useState } from "react";
import { db } from "../db/firebase-config";
import { collection, getDocs } from "firebase/firestore";

import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

import Carrito from "./components/Carrito/Carrito";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetail from "./components/ItemDetail/ItemDetail";


function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const productsRef = collection(db, "Products");

  const getProducts = async () => {
    const querySnapshot = await getDocs(productsRef);
    setProducts(
      querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
    setLoading(false);
  };
  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return <h2>Cargando...</h2>;
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route
          path="/:category"
          element={<ItemListContainer products={products} />}
        />
        <Route
          path="/productos"
          element={<ItemListContainer products={products} />}
        />
        <Route
          path="/:category/:id"
          element={<ItemDetail products={products} />}
        />
        <Route path="carrito" element={<Carrito />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
