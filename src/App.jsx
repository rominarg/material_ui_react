
import { Container } from "@mui/material";
import Navbar from "./Components/navbar/Navbar";
import NavListDrawer from "./Components/navbar/NavListDrawer";


export default function App() {
  return(
    <Container maxWidth="xl">

      <Navbar />
      <NavListDrawer />
    </Container>
    
  )
}