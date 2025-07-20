import React, { useState } from "react";
import {
    TextField,
    MenuItem,
    Button,
    Box,
    FormControl,
    InputLabel,
    Select,
} from "@mui/material";

const statesList = [
    { code: "AL", name: "Alabama" },
    { code: "AK", name: "Alaska" },
    // Add other states here
    { code: "WY", name: "Wyoming" },
];

const AddressInput = ({ onSubmit }) => {
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const addressData = {
            address1,
            address2,
            city,
            state,
            zipcode,
        };
        onSubmit(addressData);
    };

    return (
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Box mb={2}>
                <TextField
                    fullWidth
                    label="Address Line 1"
                    variant="outlined"
                    value={address1}
                    onChange={(e) => setAddress1(e.target.value)}
                    required
                    aria-required="true"
                />
            </Box>
            <Box mb={2}>
                <TextField
                    fullWidth
                    label="Address Line 2 (Optional)"
                    variant="outlined"
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                />
            </Box>
            <Box mb={2}>
                <TextField
                    fullWidth
                    label="City"
                    variant="outlined"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    aria-required="true"
                />
            </Box>
            <Box mb={2}>
                <FormControl fullWidth variant="outlined">
                    <InputLabel id="state-label">State</InputLabel>
                    <Select
                        labelId="state-label"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        label="State"
                        required
                        aria-required="true"
                    >
                        {statesList.map((state) => (
                            <MenuItem key={state.code} value={state.code}>
                                {state.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
            <Box mb={2}>
                <TextField
                    fullWidth
                    label="Zip Code"
                    variant="outlined"
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                    required
                    aria-required="true"
                />
            </Box>
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </form>
    );
};

export default AddressInput;