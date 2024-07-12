import React, { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './WeatherApp.css';
import BrightnessMediumRoundedIcon from '@mui/icons-material/BrightnessMediumRounded';
const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Loading",
    temp: 0,
    tempMin: 0,
    tempMax: 0,
    humidity: 0,
    feelsLike: 0,
    weather_desc: "",
    timestamp: Date.now() / 1000, // Current timestamp in seconds
  });

  const [themeMode, setThemeMode] = useState('dark'); // 'light' or 'dark'

  const toggleTheme = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
      <div className="parentContainer">
        <AppBar position="static" className="appBar">
          <Toolbar>
            <Typography variant="h1" component="div" sx={{ flexGrow: 1, color: '#ffffff', fontWeight: 'Bold' }}>
              WEATHER FORECAST
            </Typography>
            <SearchBox updateInfo={setWeatherInfo} />
            <button onClick={toggleTheme} className="themeToggle">
              <BrightnessMediumRoundedIcon style={{ color: '#090009' }} />
            </button>
          </Toolbar>
        </AppBar>
        <div className="child">
          <InfoBox info={weatherInfo} />
        </div>
      </div>
    </ThemeProvider>
  );
}
