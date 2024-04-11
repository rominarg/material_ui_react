
import { Container} from "@mui/material";
import Navbar from "./Components/navbar/Navbar";
// import Banner from "./Components/Banner";
import MarketCard from "./Components/MarketCard";
import Footer from "./Components/footer";
import Typography from '@mui/material/Typography';
import GridCard from "./Components/GridCard";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function App() {

  const images = [
    {
      original: "https://motos.honda.com.ar/uploads/home/slides/70familia-xr.jpg/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://motos.honda.com.ar/uploads/home/slides/73slide-motos-tornado-3-anos-garantia.jpg",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://motos.honda.com.ar/uploads/home/slides/56slides-motos-2023-wave.jpg",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];


    return (
          <>
            <Navbar />
            <div style={{width: '100%', height: '80vh', marginTop: '55px'}}>
              <ImageGallery items={images} 
              showPlayButton={false}
              showFullscreenButton={false}
              showThumbnails={false}
              showBullets={true}
              />
            </div>
            {/* <Banner /> */}
            <Typography variant="h4" align="center" gutterBottom>
            Últimas novedades
            </Typography>
            <Container sx={{ mt: 12, marginBottom: '40px'  }}>
            <MarketCard />
            </Container>
            <Typography variant="h4" align="center" gutterBottom>
            DESCUBRE TU HONDA
            </Typography>
            <GridCard />
            <Typography variant="h4" align="center" gutterBottom sx={{ marginTop: '30px' }}>
        NOVEDADES
      </Typography>
            <Footer />
            </>
  );
}
export default App