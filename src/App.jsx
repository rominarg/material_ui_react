
import { Container } from "@mui/material";
import Product from "./Components/product";
import MarketCard from "./Components/MarketCard";

export default function App() {
  return(
    <Container maxWidth="xl">
      <Product />
      <MarketCard />
    </Container>
    
  )
}