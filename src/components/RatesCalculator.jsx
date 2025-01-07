import React from 'react';
import { Box, Typography, TextField, MenuItem, Button } from '@mui/material';

const RatesCalculator = () => (
  <Box sx={{ padding: '4rem 2rem', textAlign: 'center' }}>
    <Typography
      variant="h4"
      sx={{ marginBottom: '1rem' }}
    >
      Rates Calculator
    </Typography>
    <Typography variant="body1" sx={{ marginBottom: '2rem' }}>
      Calculate shipping rates easily and compare prices between shipping
      companies
    </Typography>
    <Box
      component="form"
      sx={{
        display: 'grid',
        gap: '1rem',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <TextField label="Shipping From" select fullWidth>
        <MenuItem value="Riyadh">Riyadh</MenuItem>
        <MenuItem value="Jeddah">Jeddah</MenuItem>
      </TextField>
      <TextField label="Shipping To" select fullWidth>
        <MenuItem value="Jeddah">Jeddah</MenuItem>
        <MenuItem value="Riyadh">Riyadh</MenuItem>
      </TextField>
      <Button
  variant="contained"
  color="customBlue"
  sx={{
    width: '169px',         
    height: '42px',         
    borderRadius: '99px', 
    padding: '8px 32px',
    display: 'block',     
    margin: '0 auto',     
    fontSize: '12px',     
  }}
>
  Calculate Now
</Button>
    </Box>
  </Box>
);

export default RatesCalculator;
