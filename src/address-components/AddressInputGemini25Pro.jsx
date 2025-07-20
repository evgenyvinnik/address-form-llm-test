import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
  Button,
  Box,
  MenuItem,
  Typography
} from '@mui/material';

// A constant for US states, making the component self-contained
const usStates = [
    { value: 'AL', label: 'Alabama' }, { value: 'AK', label: 'Alaska' },
    { value: 'AZ', label: 'Arizona' }, { value: 'AR', label: 'Arkansas' },
    { value: 'CA', label: 'California' }, { value: 'CO', label: 'Colorado' },
    { value: 'CT', label: 'Connecticut' }, { value: 'DE', label: 'Delaware' },
    { value: 'FL', label: 'Florida' }, { value: 'GA', label: 'Georgia' },
    { value: 'HI', label: 'Hawaii' }, { value: 'ID', label: 'Idaho' },
    { value: 'IL', label: 'Illinois' }, { value: 'IN', label: 'Indiana' },
    { value: 'IA', label: 'Iowa' }, { value: 'KS', label: 'Kansas' },
    { value: 'KY', label: 'Kentucky' }, { value: 'LA', label: 'Louisiana' },
    { value: 'ME', label: 'Maine' }, { value: 'MD', label: 'Maryland' },
    { value: 'MA', label: 'Massachusetts' }, { value: 'MI', label: 'Michigan' },
    { value: 'MN', label: 'Minnesota' }, { value: 'MS', label: 'Mississippi' },
    { value: 'MO', label: 'Missouri' }, { value: 'MT', label: 'Montana' },
    { value: 'NE', 'label': 'Nebraska' }, { value: 'NV', label: 'Nevada' },
    { value: 'NH', label: 'New Hampshire' }, { value: 'NJ', label: 'New Jersey' },
    { value: 'NM', label: 'New Mexico' }, { value: 'NY', label: 'New York' },
    { value: 'NC', label: 'North Carolina' }, { value: 'ND', label: 'North Dakota' },
    { value: 'OH', label: 'Ohio' }, { value: 'OK', label: 'Oklahoma' },
    { value: 'OR', label: 'Oregon' }, { value: 'PA', label: 'Pennsylvania' },
    { value: 'RI', label: 'Rhode Island' }, { value: 'SC', label: 'South Carolina' },
    { value: 'SD', label: 'South Dakota' }, { value: 'TN', label: 'Tennessee' },
    { value: 'TX', label: 'Texas' }, { value: 'UT', label: 'Utah' },
    { value: 'VT', label: 'Vermont' }, { value: 'VA', label: 'Virginia' },
    { value: 'WA', label: 'Washington' }, { value: 'WV', label: 'West Virginia' },
    { value: 'WI', label: 'Wisconsin' }, { value: 'WY', label: 'Wyoming' }
];

const AddressForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    // Prevents the default form submission behavior (page refresh)
    event.preventDefault();
    // Calls the parent-provided callback function with the form data
    onSubmit(formData);
  };
  
  return (
    <Box 
        component="form" 
        onSubmit={handleSubmit}
        sx={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: 2, // space between form elements
            padding: 3,
            borderRadius: 2,
            boxShadow: 3,
            maxWidth: '500px',
            margin: 'auto'
        }}
        noValidate 
        autoComplete="off"
    >
        <Typography variant="h5" component="h2" gutterBottom>
            Shipping Address
        </Typography>

        <TextField
            required
            id="address-line1"
            name="address1"
            label="Address line 1"
            fullWidth
            value={formData.address1}
            onChange={handleChange}
        />
        <TextField
            id="address-line2"
            name="address2"
            label="Address line 2"
            helperText="Optional"
            fullWidth
            value={formData.address2}
            onChange={handleChange}
        />
        <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            value={formData.city}
            onChange={handleChange}
        />
        <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
                required
                id="state"
                name="state"
                select
                label="State"
                value={formData.state}
                onChange={handleChange}
                sx={{ flex: 1 }}
            >
                {usStates.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                required
                id="zipcode"
                name="zipcode"
                label="Zip / Postal code"
                fullWidth
                value={formData.zipcode}
                onChange={handleChange}
                sx={{ flex: 1 }}
                inputProps={{
                    pattern: "^[0-9]{5}(?:-[0-9]{4})?$",
                    title: "Enter a 5-digit or 9-digit zip code."
                }}
            />
        </Box>
        <Button 
            type="submit" 
            variant="contained" 
            color="primary"
            sx={{ mt: 2, py: 1.5 }}
        >
            Submit
        </Button>
    </Box>
  );
};

// PropTypes for type-checking the props passed to the component
AddressForm.propTypes = {
  /**
   * Callback function that is invoked when the form is submitted.
   * It receives a single argument: a JSON object with the address data.
   * e.g., { address1: '...', address2: '...', city: '...', state: '...', zipcode: '...' }
   */
  onSubmit: PropTypes.func.isRequired,
};

export default AddressForm;