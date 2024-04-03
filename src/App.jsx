
import { Container } from "@mui/material";
import Navbar from "./Components/navbar/Navbar";
import MarketCard from "./Components/MarketCard";

export default function App() {
    return (
      <>
        <Navbar />
        <Container sx={{ mt: 5 }}>
        <MarketCard />
        </Container>
      </>
    );
  }