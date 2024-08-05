import React, { useEffect, useState } from "react";

import "./App.css";
import Cards from "../components/cards/Cards.jsx";
import weather from "../api/weather.api.js";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import Nav from "../components/navbar/Nav.jsx";
import FloatingActionButtons from "./FloatingActionButtons.jsx";

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "grey",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "lightgray",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "lightgray",
          }
        },
        input: {
          color: "white",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&:focus': {
            outline: 'none',
            boxShadow: 'none',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
  },
});


function App() {
  const [cities, setCities] = useState([]);
  const [alerts, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const [alertType, setAlertType] = useState({
    type: null,
    message: null,
  });

  useEffect(() => {
    const storedCities = localStorage.getItem('cities');
    if (storedCities) {
      setCities(JSON.parse(storedCities));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cities', JSON.stringify(cities));
  }, [cities]);

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  function functionSetAlertType(type, message) {
    setAlertType({
      type: type,
      message: message,
    });
  }

  async function onSearch(city) {
    try {
      setLoading(true);
      let cityExists = false;
      let recurso = await weather.GetCiudad(city)
      if (recurso.data.main !== undefined) {
        
        cities.forEach((element) => {
          if (element.id === recurso.data.id) {
            cityExists = true;
          }
        });

        if(cityExists) {
          functionSetAlertType("warning", "This city is repeted.");
          setAlert(cityExists);
          setLoading(false);
          return;
        }

        let threeDaysTemp = await weather.GetTemperatureInThreeDays(recurso.data.name);
        
        const ciudad = {
          img: recurso.data.weather[0].icon,
          id: recurso.data.id,
          wind: recurso.data.wind.speed,
          temp: Math.round(recurso.data.main.temp),
          name: recurso.data.name,
          weather: recurso.data.weather[0].main,
          humidity: recurso.data.main.humidity,
          clouds: recurso.data.clouds.all,
          latitud: recurso.data.coord.lat,
          longitud: recurso.data.coord.lon,
          threeDaysTemp: threeDaysTemp
        };

        setCities((oldCities) => [...oldCities, ciudad]);
        functionSetAlertType("success", "City added.");
        setAlert(true);

      } else {
        functionSetAlertType("warning", "City not found, try another one.");
        setAlert(true);
      }
      setLoading(false);
    } catch (error) {
      functionSetAlertType("error", "As been a error.");
      setAlert(true);
      setLoading(false);
    }
  }

  function deleteCity(ciudadId) {
    let citiesFiltered = cities.filter((c) => c.id !== parseInt(ciudadId));
    setCities(citiesFiltered)
  }
  
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div>
          <Nav onSearch={onSearch} loading={loading} cities={cities} />
        </div>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Cards
                onClose={onClose}
                cities={cities}
                setAlert={setAlert}
                alerts={alerts}
                alertType={alertType}
                deleteCity={deleteCity}
              />
            }
          />
        </Routes>
        <FloatingActionButtons cities={cities} setCities={setCities} />
      </div>
    </ThemeProvider>
  );
}

export default App;
