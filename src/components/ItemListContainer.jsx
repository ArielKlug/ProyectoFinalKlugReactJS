
import { Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import CardProduct from './cardProduct/CardProduct';


const ItemListContainer = ({products}) => {

  const { category } = useParams();

  let productsFiltered = products;
  if (category && category !== "todos") {
    productsFiltered = products.filter(
      (product) => product.category === category
    );
  }

  return (
    <Flex flex="1" px="3" gap="2" justifyContent="center" flexWrap="wrap">
{productsFiltered.map((product) => {
        return (
          <CardProduct
            key={product.id}
            id={product.id}
            image={product.img}
            title={product.title}
            price={product.price}
            desc={product.description}
            categ={product.category}
            amount={product.amount}
            product={product}
          />
        );
      })}

    </Flex>
  )
}

export default ItemListContainer