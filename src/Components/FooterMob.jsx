import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Divider, Grid, Link, Typography } from '@mui/material';
import DATAWEB from "../assets/img/DATAWEB.jpg";

export default function FooterMob() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Products
        </AccordionSummary>
        <AccordionDetails>
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
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Useful links
        </AccordionSummary>
        <AccordionDetails>
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
        </AccordionDetails>
      </Accordion>
      <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>Contact</Typography>
              <Divider style={{ backgroundColor: '#fff', width: '60px', height: '2px', marginBottom: '1rem' }} />
              <Typography variant="body2" paragraph><i className="fas fa-home mr-3"></i> New York, NY 10012, US</Typography>
              <Typography variant="body2" paragraph><i className="fas fa-envelope mr-3"></i> info@example.com</Typography>
              <Typography variant="body2" paragraph><i className="fas fa-phone mr-3"></i> 08001333897</Typography>
              <img src={DATAWEB} alt="Foto de contacto" style={{ width: '90px', height: 'auto', marginTop: '1rem' }} />
            </Grid>
    </div>
  );
}
