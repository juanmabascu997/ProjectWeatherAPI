import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Divider,
  Grid,
  Box,
  IconButton,
  Collapse,
  Button,
} from "@mui/material";
import { Opacity, Air, Close } from "@mui/icons-material";
import "./WeatherCard.css";

const WeatherCard = ({
  name,
  date,
  temp,
  humidity,
  wind,
  img,
  weather,
  id,
  deleteCity,
  threeDaysTemp,
  isExpanded,
  onExpand,
}) => {

  function convertDate(dateString){
    const date = new Date(dateString);
    date.setDate(date.getDate() - 1);
    return date.toISOString().split("T")[0];
  }

  return (
    <Card
      sx={{
        maxWidth: 345,
        m: 2,
        background: 'linear-gradient(135deg, rgb(255, 255, 255), rgb(240 235 235))',
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <IconButton
            type="submit"
            color="primary"
            onClick={(event) => {
              event.preventDefault();
              deleteCity(id);
            }}
          >
            <Close />
          </IconButton>
        </Box>
        <Typography color="textSecondary">{date}</Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <Typography variant="h3">{temp}°C</Typography>
          <CardMedia
            component="img"
            sx={{ width: 50, height: 50, ml: 2 }}
            image={`http://openweathermap.org/img/wn/${img}@2x.png`}
            alt={weather}
          />
        </Box>
        <Typography color="textSecondary" sx={{ mt: 2 }}>
          {weather}
        </Typography>
        <Grid container spacing={1} sx={{ mt: 2 }}>
          <Grid item xs={6}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Opacity sx={{ mr: 1 }} />
              <Typography variant="body2" sx={{ color: 'grey' }} >{humidity}% Humidity</Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Air sx={{ mr: 1 }} />
              <Typography variant="body2" sx={{ color: 'grey' }} >{wind} km/h Winds</Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <CardContent sx={{ textAlign: "center" }}>
        <Button
          expand={isExpanded}
          onClick={() => onExpand(id)}
          aria-expanded={isExpanded}
          aria-label="show more"
        >
          <Typography variant="body2" color="primary">
            {isExpanded ? "LESS INFO" : "MORE INFO"}
          </Typography>
        </Button>
      </CardContent>
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
      <CardContent>
          <Typography paragraph sx={{ color: 'black' }}>Next´s days temperature:</Typography>
          <Typography paragraph sx={{ color: 'grey' }}>
            {threeDaysTemp?.dayOne?.dt_txt?.split(" ")[0]}{" "}
            {Math.round(threeDaysTemp?.dayOne?.main?.temp)}°C
          </Typography>
          <Typography paragraph sx={{ color: 'grey' }}>
            {threeDaysTemp?.dayTwo?.dt_txt?.split(" ")[0]}{" "}
            {Math.round(threeDaysTemp?.dayTwo?.main?.temp)}°C
          </Typography>
          <Typography paragraph sx={{ color: 'grey' }}>
            {convertDate(threeDaysTemp?.dayThree?.dt_txt?.split(" ")[0])}{" "}
            {Math.round(threeDaysTemp?.dayThree?.main?.temp)}°C
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default WeatherCard;
