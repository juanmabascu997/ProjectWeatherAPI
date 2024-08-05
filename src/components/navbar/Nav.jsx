import React, { useEffect, useState } from "react";
import SearchBar from "../searchBar/SearchBar.jsx";
import { Link } from "react-router-dom";
import "./Nav.css";
import {
  AppBar,
  Drawer,
  IconButton,
  ListItem,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CitySelect from "../select/SelectCity.jsx";
import { useTheme } from "@emotion/react";
import MenuIcon from "@mui/icons-material/Menu";
import { importedCities } from "../../config/mockData.js";
import { grey } from "@mui/material/colors";

function Nav({ onSearch, loading, cities }) {
  const [top10Cities, setCities] = useState(importedCities);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    let response = [];
    importedCities.map((storedCity) => {
      if (!cities.some((city) => city.id === storedCity.id)) {
        response.push(storedCity);
      }
    });
    setCities(response);
  }, [cities]);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const drawer = (
    <div style={{background: grey[400], height: '100%'}}>
      <Toolbar>
        <Typography variant="h6">Weather app</Typography>
      </Toolbar>
      <div>
        <ListItem button component="div">
          <CitySelect onSearch={onSearch} citiesList={top10Cities} />
        </ListItem>
      </div>
    </div>
  );

  return (
    <nav className="nav">
      {isMobile ? (
        <>
          <IconButton
            edge="start"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, color: 'white'}}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={open} onClose={handleDrawerToggle}>
            {drawer}
          </Drawer>
          <div>
            <SearchBar onSearch={onSearch} loading={loading} />
          </div>
        </>
      ) : (
        <>
          <div>
            <AppBar
              position="sticky"
              sx={{
                backgroundColor: "#1b1c1d",
                border: "none",
                boxShadow: "none",
              }}
            >
              <div>
                <Toolbar>
                  <Link to="/">
                    <span>Weather app</span>
                  </Link>
                </Toolbar>
              </div>
            </AppBar>
          </div>
          <div id="search">
            <SearchBar onSearch={onSearch} loading={loading} />
          </div>
          <div>
            <AppBar
              position="static"
              sx={{
                backgroundColor: "#1b1c1d",
                border: "none",
                boxShadow: "none",
              }}
            >
              <Toolbar>
                <CitySelect onSearch={onSearch} citiesList={top10Cities} />
              </Toolbar>
            </AppBar>
          </div>
        </>
      )}
    </nav>
  );
}

export default Nav;
