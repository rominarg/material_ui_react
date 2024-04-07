import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid } from "@mui/material";

export default function MarketCard() {
  return (
    <Grid container spacing={3}>
      {[...Array(12)].map((_, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            sx={{
              transition: "0.2s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://motos.honda.com.ar/uploads/modelos/61/images/sliders/333_0s-0img-navi-diseno.jpg"
                height="200"
                alt="Card Image"
              />
              <CardContent>
                <h2>Card Title</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  deserunt optio exercitationem, fugit enim saepe iusto magnam ipsam
                  est cumque hic deleniti sequi neque soluta quas! Accusamus voluptate
                  alias optio.
                </p>
              </CardContent>
            </CardActionArea>
    
            <CardActions>
              <Button variant="contained">Add</Button>
              <Button>Remove</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}