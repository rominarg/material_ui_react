import React from "react";
import { Grid, Typography } from "@mui/material";

function SecondCarousel() {
  const images = [
    {
      original: "https://motos.honda.com.ar/uploads/news/7867img-noticias-0124-4.jpg/",
      thumbnail: "https://motos.honda.com.ar/uploads/news/7867img-noticias-0124-4.jpg",
      title: "LLEGA HONDA NEW CR-V ",
    },
    {
      original: "https://motos.honda.com.ar/uploads/news/7766img-noticias-0124.jpg",
      thumbnail: "https://motos.honda.com.ar/uploads/news/7766img-noticias-0124.jpg",
      title: "HONDA ESTÁ PRESENTE EN CARILÓ",
    },
    {
      original: "https://motos.honda.com.ar/uploads/news/7665img-noticias-0124-3.jpg",
      thumbnail: "https://motos.honda.com.ar/uploads/news/7665img-noticias-0124-3.jpg",
      title: "FINALIZARON LAS EDICIONES 2023",
    },
    {
      original: "https://motos.honda.com.ar/uploads/news/7572img-noticias-1123.jpg",
      thumbnail: "https://motos.honda.com.ar/uploads/news/7572img-noticias-1123.jpg",
      title: "HONDA ESTÁ PRESENTE EN CARILÓ ",
    },
    {
      original: "https://motos.honda.com.ar/uploads/news/7473img-noticias-1123-3.jpg",
      thumbnail: "https://motos.honda.com.ar/uploads/news/7473img-noticias-1123-3.jpg",
      title: "HONDA ARGENTINA LANZA LA NUEVA PCX 160",
    },
    {
      original: "https://motos.honda.com.ar/uploads/news/7374img-noticias-1123-2.jpg",
      thumbnail: "https://motos.honda.com.ar/uploads/news/7374img-noticias-1123-2.jpg",
      title: "HONDA FINALIZA EL 2023 CELEBRANDO",
    },
  ];

  return (
    <Grid container spacing={2}>
      {images.map((image, index) => (
        <Grid item xs={6} sm={4} md={2} key={index}>
          <img src={image.thumbnail} alt={`Image ${index + 1}`} style={{ width: "100%" }} />
          {image.title && <Typography variant="h6" style={{ fontSize: "0.8rem" }}>{image.title}</Typography>}
        </Grid>
      ))}
    </Grid>
  );
}

export default SecondCarousel;
