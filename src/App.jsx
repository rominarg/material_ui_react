
import { Container} from "@mui/material";
import Navbar from "./Components/navbar/Navbar";
import Banner from "./Components/Banner";
import MarketCard from "./Components/MarketCard";
import Footer from "./Components/footer";
import Typography from '@mui/material/Typography';

export default function App() {
    return (
          <>
            <Navbar />
            <Banner />
            <Typography variant="h4" align="center" gutterBottom>
            Últimas novedades
            </Typography>
            <Container sx={{ mt: 12, marginBottom: '40px'  }}>
            <MarketCard />
            </Container>
            <Typography variant="h4" align="center" gutterBottom>
            DESCUBRE TU HONDA
            </Typography>
            <Footer />
            </>
    );
  }
