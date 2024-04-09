import { Container, Grid, Typography, Link, IconButton, Divider } from '@mui/material';
import { Facebook, Twitter, Google, Instagram, LinkedIn, GitHub } from '@mui/icons-material';
import Logo from "../assets/img/logo.png";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff' }}>
      <Container>
        {/* Section: Social media */}
        <section style={{ backgroundColor: '#CC0001', textAlign: 'center', width: '100%', padding: '1rem 0' }}> {/* Centra los elementos */}
          <Grid container justifyContent="center" alignItems="center"> 
          <Grid item>
          <Typography variant="body1" gutterBottom>Get connected with us on social networks:</Typography>
          </Grid>
          <Grid item>
          <IconButton href="https://www.facebook.com" target="_blank" rel="noopener" color="inherit">
          <Facebook />
          </IconButton>
          <IconButton href="https://twitter.com" target="_blank" rel="noopener" color="inherit">
          <Twitter />
          </IconButton>
          <IconButton href="https://www.google.com" target="_blank" rel="noopener" color="inherit">
          <Google />
          </IconButton>
          <IconButton href="https://www.instagram.com" target="_blank" rel="noopener" color="inherit">
          <Instagram />
          </IconButton>
          <IconButton href="https://www.linkedin.com" target="_blank" rel="noopener" color="inherit">
          <LinkedIn />
          </IconButton>
          </Grid>
  </Grid>
</section>
        {/* Section: Social media */}

        {/* Section: Links */}
        <section style={{ marginTop: '2rem' }}>
          <Grid container spacing={4}>
            {/* Grid column */}
            <Grid item xs={12} sm={6} md={3}>
            <img src={Logo} alt="Logo" style={{ height: "20px", marginRight: "10px" }} /> 
              <Typography variant="h6" gutterBottom>Soichiro Honda</Typography>
              <Divider style={{ backgroundColor: '#fff', width: '60px', height: '2px', marginBottom: '1rem' }} />
              <Typography variant="body2" paragraph>
              “En la escuela obtenía malas notas. Eso no me causaba ninguna pena. Mi universo estaba en otra parte, entre las máquinas, los motores y las bicicletas”
              </Typography>
            </Grid>
            {/* Grid column */}

            {/* Grid column */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>Products</Typography>
              <Divider style={{ backgroundColor: '#fff', width: '60px', height: '2px', marginBottom: '1rem' }} />
              <Typography variant="body2" paragraph>
                <Link href="#" color="inherit">Honda</Link>
              </Typography>
              <Typography variant="body2" paragraph>
                <Link href="#" color="inherit">Honda Autos</Link>
              </Typography>
              <Typography variant="body2" paragraph>
                <Link href="#" color="inherit">Honda Motos</Link>
              </Typography>
              <Typography variant="body2" paragraph>
                <Link href="#" color="inherit">Honda Productos de Fuerza</Link>
              </Typography>
              <Typography variant="body2" paragraph>
                <Link href="#" color="inherit">Honda Marine</Link>
              </Typography>
              <Typography variant="body2" paragraph>
                <Link href="#" color="inherit">Honda Racing</Link>
              </Typography>
            </Grid>
            {/* Grid column */}

            {/* Grid column */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>Useful links</Typography>
              <Divider style={{ backgroundColor: '#fff', width: '60px', height: '2px', marginBottom: '1rem' }} />
              <Typography variant="body2" paragraph>
                <Link href="#" color="inherit">Off Road</Link>
              </Typography>
              <Typography variant="body2" paragraph>
                <Link href="#" color="inherit">ATV</Link>
              </Typography>
              <Typography variant="body2" paragraph>
                <Link href="#" color="inherit">Concesionarios</Link>
              </Typography>
              <Typography variant="body2" paragraph>
                <Link href="#" color="inherit">Novedades</Link>
              </Typography>
              <Typography variant="body2" paragraph>
                <Link href="#" color="inherit">Post Venta</Link>
              </Typography>
              <Typography variant="body2" paragraph>
                <Link href="#" color="inherit">Contacto</Link>
              </Typography>
              <Typography variant="body2" paragraph>
                <Link href="#" color="inherit">Recursos Humanos</Link>
              </Typography>
            </Grid>
            {/* Grid column */}

            {/* Grid column */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>Contact</Typography>
              <Divider style={{ backgroundColor: '#fff', width: '60px', height: '2px', marginBottom: '1rem' }} />
              <Typography variant="body2" paragraph><i className="fas fa-home mr-3"></i> New York, NY 10012, US</Typography>
              <Typography variant="body2" paragraph><i className="fas fa-envelope mr-3"></i> info@example.com</Typography>
              <Typography variant="body2" paragraph><i className="fas fa-phone mr-3"></i> + 01 234 567 88</Typography>
              <Typography variant="body2" paragraph><i className="fas fa-print mr-3"></i> + 01 234 567 89</Typography>
            </Grid>
            {/* Grid column */}
          </Grid>
        </section>
        {/* Section: Links  */}

        {/* Copyright */}
        <div style={{ backgroundColor: '#333', padding: '1rem', textAlign: 'center' }}>
          © 2020 Copyright:
          Desarrollado con <span role="img" aria-label="love">❤️</span> por{' '}
        <Link href="https://example.com" color="inherit" target="_blank" rel="noopener">
              Ro-Web
            </Link>
        </div>
        {/* Copyright */}
      </Container>
    </footer>
  );
};

export default Footer;
