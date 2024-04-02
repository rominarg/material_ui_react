import { Button, Container, Grid, Typography } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AndroidIcon from "@mui/icons-material/Android";

export default function App() {
  return(
    <Container maxWidth="xl">
    <h1>App</h1>
    <Typography variant="h1">Soy un h1</Typography>
<Typography variant="h2">DISEÑO</Typography>
<Typography variant="h3">TECNOLOGÍA</Typography>
<Button
        variant="contained"
        color="info"
        startIcon={<MailOutlineIcon />}
      >
        Enviar e-mail
      </Button>
    <Button variant="contained">Here</Button>
    <Grid
        container
        spacing={2}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
        >
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
            aspernatur perferendis ipsum veniam, nostrum eos quaerat sequi sed,
            quisquam minima provident, ad magnam saepe impedit voluptatem
            ratione quas molestias! Nisi.
          </p>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
        >
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
            aspernatur perferendis ipsum veniam, nostrum eos quaerat sequi sed,
            quisquam minima provident, ad magnam saepe impedit voluptatem
            ratione quas molestias! Nisi.
          </p>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
        >
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
            aspernatur perferendis ipsum veniam, nostrum eos quaerat sequi sed,
            quisquam minima provident, ad magnam saepe impedit voluptatem
            ratione quas molestias! Nisi.
          </p>
        </Grid>
      </Grid>
    </Container>
    
  )
}