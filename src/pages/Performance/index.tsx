import { Button, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { FormEvent, useState, useCallback } from "react";
import { SearchResults } from "../../components/SearchResults";

interface Products {
  id: number;
  price: number;
  title: string;
}

// O useCallBack não é usado por conta de tamanho das funções ou processamento
// Usar o useCallBack quando a função for ser repassada para componentes filhos
// Também é valido utilizar em context

export const Performance = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Products[]>([]);

  async function handleSearch(e: FormEvent) {
    e.preventDefault();

    const data = await fetch(`http://localhost:3333/products?q=${search}`);
    const response = await data.json();
    setResults(response);
  }

  const addToWishList = useCallback((id: number) => {
    console.log(id);
  }, []);

  return (
    <Flex direction="column" align="center" justify="center" mt="4rem">
      <Heading>Search</Heading>

      <Flex
        as="form"
        w="100%"
        maxW={600}
        mt="2rem"
        direction="column"
        justify="center"
        onSubmit={handleSearch}
      >
        <Stack spacing="8">
          <Input
            placeholder="Search"
            variant="outline"
            onChange={(e) => setSearch(e.target.value)}
            focusBorderColor="pink.500"
          />

          <Button type="submit" colorScheme="pink">
            Buscar
          </Button>
        </Stack>
        <SearchResults results={results} addToWishList={addToWishList} />
      </Flex>
    </Flex>
  );
};
