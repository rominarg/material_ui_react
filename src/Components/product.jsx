import styled from "@emotion/styled";
import { Box, Button, Paper } from "@mui/material";

const Img = styled("img")({
    width: 200,
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  });
  
  export default function Product() {
    return (
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          overflow: "hidden",
          mt: 5,
        }}
      >
        <Img
          src="https://via.placeholder.com/200"
          alt="random"
        />
        <Box sx={{ flexGrow: 1, display:"grid"}}>
          <h2>Product Name</h2>
          <p>Product Description</p>
          <Button variant="contained">Comprar</Button>
        </Box>
        <Box
          component="p"
          sx={{ mr: 5 }}>$19.99</Box>
      </Paper>
    );
  }