

import ItemListContainer from "./ItemListContainer.jsx";
import Navbar from "./Navbar/Navbar.jsx";

const Home = ({ products }) => {
  return (
    <div>
      
      <Navbar />
      <ItemListContainer products={products} />
    </div>
  );
};

export default Home;
