import React from "react";
import {
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";

const US_STATES = [
  { code: "AL", name: "Alabama" },
  { code: "AK", name: "Alaska" },
  { code: "AZ", name: "Arizona" },
  { code: "AR", name: "Arkansas" },
  { code: "CA", name: "California" },
  { code: "CO", name: "Colorado" },
  { code: "CT", name: "Connecticut" },
  { code: "DE", name: "Delaware" },
  { code: "FL", name: "Florida" },
  { code: "GA", name: "Georgia" },
  { code: "HI", name: "Hawaii" },
  { code: "ID", name: "Idaho" },
  { code: "IL", name: "Illinois" },
  { code: "IN", name: "Indiana" },
  { code: "IA", name: "Iowa" },
  { code: "KS", name: "Kansas" },
  { code: "KY", name: "Kentucky" },
  { code: "LA", name: "Louisiana" },
  { code: "ME", name: "Maine" },
  { code: "MD", name: "Maryland" },
  { code: "MA", name: "Massachusetts" },
  { code: "MI", name: "Michigan" },
  { code: "MN", name: "Minnesota" },
  { code: "MS", name: "Mississippi" },
  { code: "MO", name: "Missouri" },
  { code: "MT", name: "Montana" },
  { code: "NE", name: "Nebraska" },
  { code: "NV", name: "Nevada" },
  { code: "NH", name: "New Hampshire" },
  { code: "NJ", name: "New Jersey" },
  { code: "NM", name: "New Mexico" },
  { code: "NY", name: "New York" },
  { code: "NC", name: "North Carolina" },
  { code: "ND", name: "North Dakota" },
  { code: "OH", name: "Ohio" },
  { code: "OK", name: "Oklahoma" },
  { code: "OR", name: "Oregon" },
  { code: "PA", name: "Pennsylvania" },
  { code: "RI", name: "Rhode Island" },
  { code: "SC", name: "South Carolina" },
  { code: "SD", name: "South Dakota" },
  { code: "TN", name: "Tennessee" },
  { code: "TX", name: "Texas" },
  { code: "UT", name: "Utah" },
  { code: "VT", name: "Vermont" },
  { code: "VA", name: "Virginia" },
  { code: "WA", name: "Washington" },
  { code: "WV", name: "West Virginia" },
  { code: "WI", name: "Wisconsin" },
  { code: "WY", name: "Wyoming" },
];

const AddressInput = ({ onSubmit }) => {
  const [address, setAddress] = React.useState({
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const [errors, setErrors] = React.useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
    // Clear error for the field once user starts typing
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!address.addressLine1.trim()) {
      tempErrors.addressLine1 = "Address Line 1 is required.";
    }
    if (!address.city.trim()) {
      tempErrors.city = "City is required.";
    }
    if (!address.state) {
      tempErrors.state = "State is required.";
    }
    if (!address.zipCode.trim()) {
      tempErrors.zipCode = "Zip Code is required.";
    } else if (!/^\d{5}(-\d{4})?$/.test(address.zipCode.trim())) {
      tempErrors.zipCode =
        "Invalid Zip Code format (e.g., 12345 or 12345-6789).";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

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
        "& .MuiTextField-root": { m: 1, width: "calc(100% - 16px)" }, // Full width with margin
        "& .MuiFormControl-root": { m: 1, width: "calc(100% - 16px)" },
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
      noValidate // Prevents browser's default HTML validation
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="address-line-1"
        label="Address Line 1"
        name="addressLine1"
        value={address.addressLine1}
        onChange={handleChange}
        required
        error={!!errors.addressLine1}
        helperText={errors.addressLine1}
        inputProps={{ "aria-required": true }}
      />
      <TextField
        id="address-line-2"
        label="Address Line 2 (Optional)"
        name="addressLine2"
        value={address.addressLine2}
        onChange={handleChange}
        inputProps={{ "aria-required": false }}
      />
      <TextField
        id="city"
        label="City"
        name="city"
        value={address.city}
        onChange={handleChange}
        required
        error={!!errors.city}
        helperText={errors.city}
        inputProps={{ "aria-required": true }}
      />
      <FormControl
        required
        error={!!errors.state}
        sx={{ m: 1, width: "calc(100% - 16px)" }}
      >
        <InputLabel id="state-select-label">State</InputLabel>
        <Select
          labelId="state-select-label"
          id="state-select"
          value={address.state}
          label="State *"
          name="state"
          onChange={handleChange}
          inputProps={{ "aria-required": true }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {US_STATES.map((state) => (
            <MenuItem key={state.code} value={state.code}>
              {state.name}
            </MenuItem>
          ))}
        </Select>
        {!!errors.state && <FormHelperText>{errors.state}</FormHelperText>}
      </FormControl>
      <TextField
        id="zip-code"
        label="Zip Code"
        name="zipCode"
        value={address.zipCode}
        onChange={handleChange}
        required
        error={!!errors.zipCode}
        helperText={errors.zipCode}
        inputProps={{ "aria-required": true }}
      />
      <Box sx={{ m: 1, width: "calc(100% - 16px)" }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
        >
          Submit Address
        </Button>
      </Box>
    </Box>
  );
};

export default AddressInput;
