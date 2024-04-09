import { Grid, Card, CardActionArea, CardMedia } from '@mui/material';

const GridCard = () => {
    return (
      <Grid container spacing={0}>
        {/* Primera fila */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="236"
                image="https://motos.honda.com.ar/uploads/home/models/12img-wave-936x472.jpg"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="236"
                image="https://motos.honda.com.ar/uploads/home/models/13img-xr150-936x472.jpg"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="236"
                image="https://motos.honda.com.ar/uploads/home/models/8img-xr250foto-modelo.jpg"
                alt="XR250 Tornado"
              />
            </CardActionArea>
          </Card>
        </Grid>
        {/* Segunda fila */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="236"
                image="https://motos.honda.com.ar/uploads/home/models/14banner-home-glh150-sinmodelo.jpg"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="236"
                image="https://motos.honda.com.ar/uploads/home/models/7img-cb300ffoto-modelo.jpg"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="236"
                image="https://motos.honda.com.ar/uploads/home/models/10banner-home-africatwin-1.jpg"
                alt="XR250 Tornado"
              />
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    );
  };

export default GridCard;




