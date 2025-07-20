// AddressInput.js
import React, { useState } from 'react';
import {
    TextField,
    Button,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    Box
} from '@mui/material';

const states = [
    { code: 'AL', name: 'Alabama' },
    { code: 'AK', name: 'Alaska' },
    // ... other states
    { code: 'WY', name: 'Wyoming' },
];

const AddressInput = ({ onSubmit }) => {
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const addressData = {
            addressLine1,
            addressLine2,
            city,
            state,
            zipcode,
        };
        onSubmit(addressData);
    };

    return (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <Box margin={2}>
                <TextField
                    label="Address Line 1"
                    variant="outlined"
                    fullWidth
                    required
                    value={addressLine1}
                    onChange={(e) => setAddressLine1(e.target.value)}
                    autoFocus
                    aria-label="Address Line 1"
                />
            </Box>
            <Box margin={2}>
                <TextField
                    label="Address Line 2 (Optional)"
                    variant="outlined"
                    fullWidth
                    value={addressLine2}
                    onChange={(e) => setAddressLine2(e.target.value)}
                    aria-label="Address Line 2"
                />
            </Box>
            <Box margin={2}>
                <TextField
                    label="City"
                    variant="outlined"
                    fullWidth
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    aria-label="City"
                />
            </Box>
            <Box margin={2}>
                <FormControl fullWidth required>
                    <InputLabel id="state-label">State</InputLabel>
                    <Select
                        labelId="state-label"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        displayEmpty
                        aria-label="State"
                    >
                        <MenuItem value="">
                            <em>Choose State</em>
                        </MenuItem>
                        {states.map((s) => (
                            <MenuItem key={s.code} value={s.code}>
                                {s.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
            <Box margin={2}>
                <TextField
                    label="Zipcode"
                    variant="outlined"
                    fullWidth
                    required
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                    aria-label="Zipcode"
                />
            </Box>
            <Box margin={2}>
                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </Box>
        </form>
    );
};

export default AddressInput;