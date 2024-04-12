import React from "react";
import { Grid } from "@mui/material";

function SecondCarousel() {
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
    {
      original: "https://example.com/image4.jpg",
      thumbnail: "https://example.com/thumbnail4.jpg",
    },
    {
      original: "https://example.com/image5.jpg",
      thumbnail: "https://example.com/thumbnail5.jpg",
    },
    {
      original: "https://example.com/image6.jpg",
      thumbnail: "https://example.com/thumbnail6.jpg",
    },
  ];

  return (
    <Grid container spacing={2}>
      {images.map((image, index) => (
        <Grid item xs={6} sm={4} md={2} key={index}>
          <img src={image.thumbnail} alt={`Image ${index + 1}`} style={{ width: "100%" }} />
        </Grid>
      ))}
    </Grid>
  );
}

export default SecondCarousel;
