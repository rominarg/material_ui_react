
import { Container} from "@mui/material";
import Navbar from "./Components/navbar/Navbar";
import Banner from "./Components/Banner";
import MarketCard from "./Components/MarketCard";
import Footer from "./Components/footer";




export default function App() {
    return (
      <>
        <Navbar />
        <Banner />
        <Container sx={{ mt: 12, marginBottom: '40px'  }}>
        <MarketCard />
        </Container>
        <Footer />
      </>
    );
  }