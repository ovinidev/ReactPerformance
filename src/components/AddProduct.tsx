import { Box, Heading, Button } from "@chakra-ui/react";

interface AddProductProps {
  onAddToWishList: () => void;
  onRequestClose: () => void;
}

export const AddProduct = ({
  onAddToWishList,
  onRequestClose,
}: AddProductProps) => {
  return (
    <Box ml="2rem">
      <Heading>Deseja adicionar aos favoritos?</Heading>
      <Button colorScheme="whatsapp" onClick={onAddToWishList}>
        Sim
      </Button>
      <Button colorScheme="red" onClick={onRequestClose}>
        Não
      </Button>
    </Box>
  );
};
