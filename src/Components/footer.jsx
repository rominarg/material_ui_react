import React from 'react';
import { Container, Grid, Typography, Link, IconButton, Divider } from '@mui/material';
import { Facebook, Twitter, Google, Instagram, LinkedIn, GitHub } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff' }}>
      <Container>
        {/* Section: Social media */}
        <section style={{ backgroundColor: '#333567', textAlign: 'center', width: '100%', padding: '1rem 0' }}> {/* Centra los elementos */}
          <Grid container justifyContent="center" alignItems="center"> 
            <Grid item>
              <Typography variant="body1" gutterBottom>Get connected with us on social networks:</Typography>
            </Grid>
            <Grid item>
              <IconButton href="#" target="_blank" rel="noopener" color="inherit">
                <Facebook />
              </IconButton>
              <IconButton href="#" target="_blank" rel="noopener" color="inherit">
                <Twitter />
              </IconButton>
              <IconButton href="#" target="_blank" rel="noopener" color="inherit">
                <Google />
              </IconButton>
              <IconButton href="#" target="_blank" rel="noopener" color="inherit">
                <Instagram />
              </IconButton>
              <IconButton href="#" target="_blank" rel="noopener" color="inherit">
                <LinkedIn />
              </IconButton>
              <IconButton href="#" target="_blank" rel="noopener" color="inherit">
                <GitHub />
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
              <Typography variant="h6" gutterBottom>Company name</Typography>
              <Divider style={{ backgroundColor: '#7c4dff', width: '60px', height: '2px', marginBottom: '1rem' }} />
              <Typography variant="body2" paragraph>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </Typography>
            </Grid>
            {/* Grid column */}

            {/* Grid column */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>Products</Typography>
              <Divider style={{ backgroundColor: '#7c4dff', width: '60px', height: '2px', marginBottom: '1rem' }} />
              <Typography variant="body2" paragraph>
                <Link href="#" color="inherit">MDBootstrap</Link>
              </Typography>
              <Typography variant="body2" paragraph>
                <Link href="#" color="inherit">MDWordPress</Link>
              </Typography>
              <Typography variant="body2" paragraph>
                <Link href="#" color="inherit">BrandFlow</Link>
              </Typography>
              <Typography variant="body2" paragraph>
                <Link href="#" color="inherit">Bootstrap Angular</Link>
              </Typography>
            </Grid>
            {/* Grid column */}

            {/* Grid column */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>Useful links</Typography>
              <Divider style={{ backgroundColor: '#7c4dff', width: '60px', height: '2px', marginBottom: '1rem' }} />
              <Typography variant="body2" paragraph>
                <Link href="#" color="inherit">Your Account</Link>
              </Typography>
              <Typography variant="body2" paragraph>
                <Link href="#" color="inherit">Become an Affiliate</Link>
              </Typography>
              <Typography variant="body2" paragraph>
                <Link href="#" color="inherit">Shipping Rates</Link>
              </Typography>
              <Typography variant="body2" paragraph>
                <Link href="#" color="inherit">Help</Link>
              </Typography>
            </Grid>
            {/* Grid column */}

            {/* Grid column */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>Contact</Typography>
              <Divider style={{ backgroundColor: '#7c4dff', width: '60px', height: '2px', marginBottom: '1rem' }} />
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
