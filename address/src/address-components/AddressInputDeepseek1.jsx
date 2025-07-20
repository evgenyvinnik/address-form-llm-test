import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  MenuItem,
  FormControl,
  Grid,
  Typography
} from '@mui/material';

const USAddressForm = ({ onSubmit }) => {
  const [address, setAddress] = useState({
    line1: '',
    line2: '',
    city: '',
    state: '',
    zip: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(address);
  };

  const usStates = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 
    'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 
    'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 
    'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 
    'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 
    'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 
    'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 
    'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="line1"
            label="Address Line 1"
            name="line1"
            autoComplete="address-line1"
            value={address.line1}
            onChange={handleChange}
            variant="outlined"
            InputProps={{
              'aria-required': 'true',
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="line2"
            label="Address Line 2 (Optional)"
            name="line2"
            autoComplete="address-line2"
            value={address.line2}
            onChange={handleChange}
            variant="outlined"
            helperText="Apartment, unit, suite, etc."
            InputProps={{
              'aria-required': 'false',
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="city"
            label="City"
            name="city"
            autoComplete="address-level2"
            value={address.city}
            onChange={handleChange}
            variant="outlined"
            InputProps={{
              'aria-required': 'true',
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <TextField
              select
              required
              id="state"
              label="State"
              name="state"
              autoComplete="address-level1"
              value={address.state}
              onChange={handleChange}
              variant="outlined"
              InputProps={{
                'aria-required': 'true',
              }}
            >
              <MenuItem value="">
                <em>Select a state</em>
              </MenuItem>
              {usStates.map((state) => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="zip"
            label="Zip Code"
            name="zip"
            autoComplete="postal-code"
            value={address.zip}
            onChange={handleChange}
            variant="outlined"
            inputProps={{
              pattern: '^[0-9]{5}(-[0-9]{4})?$',
              title: '5-digit or 9-digit zip code (e.g., 12345 or 12345-6789)',
              'aria-required': 'true',
            }}
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={!address.line1 || !address.city || !address.state || !address.zip}
      >
        Submit Address
      </Button>
    </Box>
  );
};

export default USAddressForm;