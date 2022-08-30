import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { useMemo, useState, lazy } from "react";
import { AddProduct } from "./AddProduct";

const ProductItem = lazy(() => import("./ProductItem"));

interface Products {
  id: number;
  price: number;
  title: string;
}

interface SearchResultsProps {
  results: Products[];
  addToWishList: (id: number) => void;
}

export const SearchResults = ({
  results,
  addToWishList,
}: SearchResultsProps) => {
  const totalPrice = useMemo(() => {
    let totalValue = 0;
    results.reduce((total, product) => {
      return (totalValue = total + product.price);
    }, 0);

    return totalValue;
  }, [results]);

  const [isAddingToWishList, setIsAddingToWishList] = useState(false);

  return (
    <Box alignSelf="center" mt="2rem">
      <Heading>{totalPrice}</Heading>
      {results.map((product) => {
        return (
          <Flex key={product.id}>
            <ProductItem product={product} />

            {isAddingToWishList ? (
              <AddProduct
                onAddToWishList={() => addToWishList(product.id)}
                onRequestClose={() => setIsAddingToWishList(false)}
              />
            ) : (
              <Button
                onClick={() => setIsAddingToWishList(true)}
                colorScheme="purple"
                ml="2rem"
              >
                Adicionar
              </Button>
            )}
          </Flex>
        );
      })}
    </Box>
  );
};
