import ProductSimple from "./components/Card";
import { arrayProducts } from "./products/product";
import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
export default function App() {
  const [products] = useState(arrayProducts);
  return (
    <ChakraProvider>
      {products.map((product) => {
        return <ProductSimple produto={product} />;
      })}
    </ChakraProvider>
  );
}
