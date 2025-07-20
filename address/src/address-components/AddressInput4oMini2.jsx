// AddressInput.js
import React, { useState } from 'react';
import {
  TextField,
  MenuItem,
  Button,
  Grid,
  Typography,
} from '@mui/material';

const statesList = [
  { code: 'AL', name: 'Alabama' },
  { code: 'AK', name: 'Alaska' },
  { code: 'AZ', name: 'Arizona' },
  { code: 'AR', name: 'Arkansas' },
  { code: 'CA', name: 'California' },
  // Add other states as needed
];

const AddressInput = ({ onSubmit }) => {
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const addressData = {
      addressLine1,
      addressLine2,
      city,
      state,
      zipcode,
    };
    onSubmit(addressData); // Sends the data back to the parent component
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6">Address Information</Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Address Line 1"
            variant="outlined"
            fullWidth
            required
            value={addressLine1}
            onChange={(e) => setAddressLine1(e.target.value)}
            inputProps={{ 'aria-label': 'Address Line 1' }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Address Line 2 (optional)"
            variant="outlined"
            fullWidth
            value={addressLine2}
            onChange={(e) => setAddressLine2(e.target.value)}
            inputProps={{ 'aria-label': 'Address Line 2' }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="City"
            variant="outlined"
            fullWidth
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
            inputProps={{ 'aria-label': 'City' }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            select
            label="State"
            variant="outlined"
            fullWidth
            required
            value={state}
            onChange={(e) => setState(e.target.value)}
            inputProps={{ 'aria-label': 'State' }}
          >
            {statesList.map((option) => (
              <MenuItem key={option.code} value={option.code}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Zipcode"
            variant="outlined"
            fullWidth
            required
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            inputProps={{ 'aria-label': 'Zipcode' }}
          />
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddressInput;