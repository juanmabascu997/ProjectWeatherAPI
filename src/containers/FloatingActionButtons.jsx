import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { SortByAlpha, SortByAlphaSharp, WbCloudy, WbSunny } from '@mui/icons-material';


export default function FloatingActionButtons({ cities, setCities }) {
  const [isSorted, setIsSorted] = useState(false);
  const [order, setOrder] = useState(null);

  const handleSortToggle = () => {
    const sortedList = [...cities].sort((a, b) => {
      if (isSorted) {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setCities(sortedList);
    setIsSorted(!isSorted);
  };

  const handleSortToggleByTemperature = () => {
    const sortedList = [...cities].sort((a, b) => {
      const tempA = parseFloat(a.temp);
      const tempB = parseFloat(b.temp);
  
      if (isSorted) {
        setOrder('asc');
        return tempA - tempB;
      } else {
        setOrder('desc');
        return tempB - tempA;
      }
    });

    setCities(sortedList);
    setIsSorted(!isSorted);
  };

  return (
    <Box sx={{ position: 'fixed', bottom: 16, right: 16, '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="sort" onClick={handleSortToggle} disabled={cities.length === 0}>
        {
          isSorted? <SortByAlphaSharp /> : <SortByAlpha />
        }
      </Fab>
      <Fab color="primary" aria-label="sort" onClick={handleSortToggleByTemperature} disabled={cities.length === 0}>
        {
          order === 'desc' ? <WbSunny /> : <WbCloudy />
        }
      </Fab>
    </Box>
  );
}
