import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";

export default function CitySelect({ citiesList, onSearch }) {
    const [city, setCity] = useState(null);

    function handleCityChange (e, ct) {
        setCity(null);
        if(ct) {
            onSearch(ct.name)
        }
    }

  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 300 }}
      options={citiesList || []}
      value={city}
      autoHighlight
      getOptionLabel={(option) => option.name}
      onChange={handleCityChange}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;
        return (
          <Box
            key={key}
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...optionProps}
          >
            {option.name}
          </Box>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Suggested cities"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password",
          }}
        />
      )}
    />
  );
}
