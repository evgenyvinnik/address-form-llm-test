import React, { useState } from 'react';
import { Button, TextField, MenuItem } from '@mui/material';

const states = [
  { value: 'AL', label: 'Alabama' },
  { value: 'AK', label: 'Alaska' },
  // Add all the states here
];

const AddressForm = ({ onSubmit }) => {
  const [address, setAddress] = useState({
    line1: '',
    line2: '',
    city: '',
    state: '',
    zipcode: '',
  });

  const handleChange = (event) => {
    setAddress({ ...address, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(address);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="line1"
        label="Address line 1"
        required
        value={address.line1}
        onChange={handleChange}
        InputProps={{
          'aria-label': 'Address line 1',
        }}
      />
      <TextField
        name="line2"
        label="Address line 2 (optional)"
        value={address.line2}
        onChange={handleChange}
        InputProps={{
          'aria-label': 'Address line 2',
        }}
      />
      <TextField
        name="city"
        label="City"
        required
        value={address.city}
        onChange={handleChange}
        InputProps={{
          'aria-label': 'City',
        }}
      />
      <TextField
        name="state"
        label="State"
        required
        select
        value={address.state}
        onChange={handleChange}
        InputProps={{
          'aria-label': 'State',
        }}
      >
        {states.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        name="zipcode"
        label="Zipcode"
        required
        value={address.zipcode}
        onChange={handleChange}
        InputProps={{
          'aria-label': 'Zipcode',
        }}
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default AddressForm;