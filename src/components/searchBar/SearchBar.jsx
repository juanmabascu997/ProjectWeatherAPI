import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { IconButton } from "@mui/material";

export default function SearchBar({ onSearch, loading }) {
  const [city, setCity] = useState("");

  return (
      <AppBar
        position="static"
        sx={{ backgroundColor: "#1b1c1d", border: "none", boxShadow: "none" }}
      >
        <Container 
          maxWidth="xl"
          sx={{
            padding: { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Toolbar>
            <Typography
              variant="body1"
              component="p"
              sx={{
                flexGrow: 1,
                paddingRight: "5px",
                display: {
                  xs: "none",
                  sm: "block",
                  md: "block",
                },
              }}
            >
              City Search
            </Typography>
            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{
                backgroundColor: "dark",
                display: "flex",
                alignItems: "center",
              }}
            >
              <TextField
                id="city-input"
                variant="outlined"
                value={city}
                onChange={(event) => setCity(event.target.value)}
                size="small"
                margin="none"
                sx={{
                  backgroundColor: "dark",
                  borderRadius: 1,
                  mr: 1,
                  input: { color: "white" },
                }}
              />
              <IconButton
                type="submit"
                color="primary"
                id="search-button"
                disabled={loading}
                onClick={(event) => {
                  event.preventDefault();
                  onSearch(city);
                  setCity("");
                }}
              >
                <SearchIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
  );
}
