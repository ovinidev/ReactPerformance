import { Heading, HStack } from "@chakra-ui/react";
import { memo } from "react";

interface Products {
  id: number;
  price: number;
  title: string;
}

interface ProductItemProps {
  product: Products;
}

const ProductItem = memo(
  ({ product }: ProductItemProps) => {
    return (
      <HStack spacing="8">
        <Heading>{product.title}</Heading> <Heading>R${product.price}</Heading>
      </HStack>
    );
  },
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);

export default ProductItem;
