import React, { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
  MenuItem,
  useTheme, // Added for accessibility styling
} from '@mui/material';

// List of US states for the dropdown
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
  { value: 'WY', 'label': 'Wyoming' },
];

/**
 * A React component for collecting US address information using Material-UI.
 *
 * @param {object} props - The component props.
 * @param {function(object): void} props.onSubmit - Callback function triggered on form submission,
 *   returning an object with address data.
 * @example
 * <UsAddressInput onSubmit={(addressData) => console.log(addressData)} />
 */
const UsAddressInput = ({ onSubmit }) => {
  const theme = useTheme(); // Provides access to theme for consistent spacing and colors

  // State to hold form values
  const [address, setAddress] = useState({
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
  });

  // State to handle validation errors
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
    // Clear error for the current field as user types
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
  };

  // Validate form fields
  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!address.addressLine1.trim()) {
      tempErrors.addressLine1 = 'Address Line 1 is required.';
      isValid = false;
    }

    if (!address.city.trim()) {
      tempErrors.city = 'City is required.';
      isValid = false;
    }

    if (!address.state) {
      tempErrors.state = 'State is required.';
      isValid = false;
    }

    // Zip code validation for 5 or 5-4 digits (basic regex)
    // Allows for optional hyphen for 5-4 format
    if (!address.zipCode.trim()) {
      tempErrors.zipCode = 'Zip Code is required.';
      isValid = false;
    } else if (!/^\d{5}(?:[-\s]\d{4})?$/.test(address.zipCode.trim())) {
      tempErrors.zipCode = 'Invalid Zip Code format (e.g., 12345 or 12345-6789).';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(address);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2), // Consistent spacing between elements
        padding: theme.spacing(3),
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: theme.shape.borderRadius,
        maxWidth: 500,
        margin: '0 auto', // Center the form
        boxShadow: theme.shadows[1], // Subtle shadow for better visual separation
      }}
      onSubmit={handleSubmit}
      aria-labelledby="address-form-title"
    >
      <Typography variant="h5" component="h2" id="address-form-title" gutterBottom>
        US Address Information
      </Typography>

      <TextField
        label="Address Line 1"
        name="addressLine1"
        value={address.addressLine1}
        onChange={handleChange}
        fullWidth
        required
        error={!!errors.addressLine1}
        helperText={errors.addressLine1}
        margin="normal"
        inputProps={{ 'aria-required': true }} // Explicitly mark as required for screen readers
      />

      <TextField
        label="Address Line 2 (Optional)"
        name="addressLine2"
        value={address.addressLine2}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        label="City"
        name="city"
        value={address.city}
        onChange={handleChange}
        fullWidth
        required
        error={!!errors.city}
        helperText={errors.city}
        margin="normal"
        inputProps={{ 'aria-required': true }}
      />

      <TextField
        select
        label="State"
        name="state"
        value={address.state}
        onChange={handleChange}
        fullWidth
        required
        error={!!errors.state}
        helperText={errors.state}
        margin="normal"
        inputProps={{ 'aria-required': true }}
      >
        <MenuItem value="">
          <em>Select a State</em>
        </MenuItem>
        {usStates.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        label="Zip Code"
        name="zipCode"
        value={address.zipCode}
        onChange={handleChange}
        fullWidth
        required
        error={!!errors.zipCode}
        helperText={errors.zipCode}
        margin="normal"
        inputProps={{ 'aria-required': true }}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: theme.spacing(3) }} // Margin top for spacing
      >
        Submit Address
      </Button>
    </Box>
  );
};

export default UsAddressInput;