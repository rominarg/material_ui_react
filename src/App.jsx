
import { Container} from "@mui/material";
import Navbar from "./Components/navbar/Navbar";
import MarketCard from "./Components/MarketCard";
import Footer from "./Components/footer";



export default function App() {
    return (
      <>
        <Navbar />
        <Container sx={{ mt: 12 }}>
        <MarketCard />
        </Container>
        <Footer />
      </>
    );
  }