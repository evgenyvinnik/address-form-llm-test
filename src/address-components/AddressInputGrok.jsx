import React, { useState } from 'react';
import { 
  Box, 
  TextField, 
  MenuItem, 
  Select, 
  Button, 
  FormControl, 
  InputLabel, 
  Grid 
} from '@mui/material';

const usStates = [
  { value: 'AL', label: 'Alabama' },
  { value: 'AK', label: 'Alaska' },
  { value: 'AZ', label: 'Arizona' },
  { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' },
  { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' },
  { value: 'DE', label: 'Delaware' },
  { value: 'FL', label: 'Florida' },
  { value: 'GA', label: 'Georgia' },
  { value: 'HI', label: 'Hawaii' },
  { value: 'ID', label: 'Idaho' },
  { value: 'IL', label: 'Illinois' },
  { value: 'IN', label: 'Indiana' },
  { value: 'IA', label: 'Iowa' },
  { value: 'KS', label: 'Kansas' },
  { value: 'KY', label: 'Kentucky' },
  { value: 'LA', label: 'Louisiana' },
  { value: 'ME', label: 'Maine' },
  { value: 'MD', label: 'Maryland' },
  { value: 'MA', label: 'Massachusetts' },
  { value: 'MI', label: 'Michigan' },
  { value: 'MN', label: 'Minnesota' },
  { value: 'MS', label: 'Mississippi' },
  { value: 'MO', label: 'Missouri' },
  { value: 'MT', label: 'Montana' },
  { value: 'NE', label: 'Nebraska' },
  { value: 'NV', label: 'Nevada' },
  { value: 'NH', label: 'New Hampshire' },
  { value: 'NJ', label: 'New Jersey' },
  { value: 'NM', label: 'New Mexico' },
  { value: 'NY', label: 'New York' },
  { value: 'NC', label: 'North Carolina' },
  { value: 'ND', label: 'North Dakota' },
  { value: 'OH', label: 'Ohio' },
  { value: 'OK', label: 'Oklahoma' },
  { value: 'OR', label: 'Oregon' },
  { value: 'PA', label: 'Pennsylvania' },
  { value: 'RI', label: 'Rhode Island' },
  { value: 'SC', label: 'South Carolina' },
  { value: 'SD', label: 'South Dakota' },
  { value: 'TN', label: 'Tennessee' },
  { value: 'TX', label: 'Texas' },
  { value: 'UT', label: 'Utah' },
  { value: 'VT', label: 'Vermont' },
  { value: 'VA', label: 'Virginia' },
  { value: 'WA', label: 'Washington' },
  { value: 'WV', label: 'West Virginia' },
  { value: 'WI', label: 'Wisconsin' },
  { value: 'WY', label: 'Wyoming' }
];

const USAddressForm = ({ onSubmitAddress, initialData = {} }) => {
  const [address, setAddress] = useState({
    addressLine1: initialData.addressLine1 || '',
    addressLine2: initialData.addressLine2 || '',
    city: initialData.city || '',
    state: initialData.state || '',
    zipcode: initialData.zipcode || ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!address.addressLine1) newErrors.addressLine1 = 'Address Line 1 is required';
    if (!address.city) newErrors.city = 'City is required';
    if (!address.state) newErrors.state = 'State is required';
    if (!address.zipcode) newErrors.zipcode = 'Zipcode is required';
    else if (!/^\d{5}(-\d{4})?$/.test(address.zipcode)) newErrors.zipcode = 'Invalid Zipcode format';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmitAddress(address);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            label="Address Line 1"
            name="addressLine1"
            value={address.addressLine1}
            onChange={handleChange}
            error={!!errors.addressLine1}
            helperText={errors.addressLine1}
            aria-required="true"
            inputProps={{ 'aria-label': 'Address Line 1' }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Address Line 2 (Optional)"
            name="addressLine2"
            value={address.addressLine2}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'Address Line 2, optional' }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            label="City"
            name="city"
            value={address.city}
            onChange={handleChange}
            error={!!errors.city}
            helperText={errors.city}
            aria-required="true"
            inputProps={{ 'aria-label': 'City' }}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl fullWidth required error={!!errors.state}>
            <InputLabel id="state-label">State</InputLabel>
            <Select
              labelId="state-label"
              id="state"
              name="state"
              value={address.state}
              onChange={handleChange}
              label="State"
              aria-required="true"
              inputProps={{ 'aria-label': 'State selection' }}
            >
              <MenuItem value="" disabled>
                Select a state
              </MenuItem>
              {usStates.map((state) => (
                <MenuItem key={state.value} value={state.value}>
                  {state.label}
                </MenuItem>
              ))}
            </Select>
            {errors.state && <Box sx={{ color: 'error.main', fontSize: '0.75rem', mt: 0.5 }}>{errors.state}</Box>}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            required
            label="Zipcode"
            name="zipcode"
            value={address.zipcode}
            onChange={handleChange}
            error={!!errors.zipcode}
            helperText={errors.zipcode}
            aria-required="true"
            inputProps={{ 'aria-label': 'Zipcode' }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            aria-label="Submit address"
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default USAddressForm;