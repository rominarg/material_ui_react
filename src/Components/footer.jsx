import { Container, Typography, Grid, IconButton, Link, Divider } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px 0' }}>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={2}>
            {/* Columna para el logo */}
            <img src="/logo.png" alt="Logo" style={{ maxWidth: '100%' }} />
          </Grid>
          <Grid item xs={12} sm={4}>
            {/* Columna para el texto */}
            <Typography variant="h6" gutterBottom>
              Información
            </Typography>
            <Divider style={{ backgroundColor: '#fff', marginBottom: '10px' }} />
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Typography variant="body1">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            {/* Otra columna para el texto */}
            <Typography variant="h6" gutterBottom>
              Información
            </Typography>
            <Divider style={{ backgroundColor: '#fff', marginBottom: '10px' }} />
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Typography variant="body1">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            {/* Columna para los iconos de la web */}
            <Typography variant="h6" gutterBottom>
              Follow 
            </Typography>
            <Divider style={{ backgroundColor: '#fff', marginBottom: '10px' }} />
            <IconButton href="#" target="_blank" rel="noopener"style={{ color: '#fff' }}>
              <Facebook />
            </IconButton>
            <IconButton href="#" target="_blank" rel="noopener"style={{ color: '#fff' }}>
              <Twitter />
            </IconButton>
            <IconButton href="#" target="_blank" rel="noopener"style={{ color: '#fff' }}>
              <Instagram />
            </IconButton>
          </Grid>
        </Grid>
        <Divider style={{ backgroundColor: '#fff', marginBottom: '10px' }} />
        <Typography variant="body2" align="center" style={{ marginTop: '20px' }}>
        Desarrollado con <span role="img" aria-label="love">❤️</span> por{' '}
        <Link href="https://example.com" color="inherit" target="_blank" rel="noopener">
              Ro-Web
            </Link>
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
