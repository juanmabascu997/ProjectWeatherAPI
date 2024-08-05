import React, { useEffect, useState } from 'react';
import './Cards.css';
import WeatherCard from '../card/WeatherCard.jsx';
import { Alert } from '@mui/material';

export default function Cards({cities, onClose, setAlert, alerts, alertType, deleteCity}) {
  const [expandedCardId, setExpandedCardId] = useState(null);

  const handleExpandClick = (cardId) => {
    setExpandedCardId(prevId => prevId === cardId ? null : cardId);
  };

  useEffect(() => {
    if (alerts) {
      const timer = setTimeout(() => {
        setAlert(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [alerts]);

  return (
    <>
      <div className='cards'>
        {
          cities?.map(c =>
          <WeatherCard
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
            wind={c.wind}
            temp={c.temp}
            weather={c.weather}
            humidity={c.humidity}
            clouds={c.clouds}
            key={c.id}
            deleteCity={deleteCity}
            threeDaysTemp={c.threeDaysTemp}
            isExpanded={expandedCardId === c.id}
            onExpand={handleExpandClick}
          /> )
        }
      </div>
      {
        alerts ? <>
          <Alert severity={alertType.type} style={{ position: 'fixed', bottom: '20px', right: '20px', width: '50%', zIndex: 1000 }}>
            { alertType.message }
          </Alert>
        </> : null
      }
    </>
  );
}
