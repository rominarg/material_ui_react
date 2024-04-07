// import React from 'react';
// import { Grid as MaterialGrid } from '@mui/material'; // Cambia el nombre de la importación para evitar conflictos
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles(() => ({
//   image: {
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover',
//   },
// }));

// // Define un array de objetos que contengan las URL de las imágenes
// const images = [
//   { id: 1, url: 'https://via.placeholder.com/400x300' },
//   { id: 2, url: 'https://via.placeholder.com/400x300' },
//   { id: 3, url: 'https://via.placeholder.com/400x300' },
//   // Agrega más objetos con las URLs de las imágenes según sea necesario
// ];

// function Grid() {
//   const classes = useStyles();

//   return (
//     <MaterialGrid container spacing={2}>
//       {images.map((image) => (
//         <MaterialGrid item xs={12} sm={6} md={4} key={image.id}>
//           <img src={image.url} alt={`Image ${image.id}`} className={classes.image} />
//         </MaterialGrid>
//       ))}
//     </MaterialGrid>
//   );
// }

// export default Grid;
