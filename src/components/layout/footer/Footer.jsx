import React from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const Footer = () => {

  return (
    <Box component="footer">
      <Typography variant="body1">
        © {new Date().getFullYear()} Balboa's store. Todos los derechos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
