import { Container, Link, Typography } from "@mui/material";

const Footer = () => {
    return (
      <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px 0', textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="body1">
            © {new Date().getFullYear()} Tu Compañía
          </Typography>
          <Typography variant="body2">
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