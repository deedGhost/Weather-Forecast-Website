import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined'; // Air icon for wind speed
import BeachAccessOutlinedIcon from '@mui/icons-material/BeachAccessOutlined'; // Wave icon for humidity
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from'@mui/icons-material/Thunderstorm';
import './InfoBox.css';

export default function InfoBox({ info }) {
    // Function to format date and time
    const formatDateTime = (timestamp) => {
        if (!timestamp) return "No date and time available";
        
        const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
        const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const optionsTime = { hour: 'numeric', minute: 'numeric' };

        const formattedDate = date.toLocaleDateString('en-US', optionsDate);
        const formattedTime = date.toLocaleTimeString('en-US', optionsTime);

        return `${formattedDate} ${formattedTime}`;
    };

    return (
        <div className='InfoBox'>
            <Grid container spacing={3}>
                {/* Weather Icon and Temperature */}
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item>
                                    <Typography variant="h3" gutterBottom>
                                        <b>{info.temp}&deg;C</b>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    {info.humidity > 50 ? <ThunderstormIcon fontSize='large'/> : (info.temp > 15) ? <WbSunnyIcon fontSize='large'/>: <AcUnitIcon fontSize='large' />}
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                {/* City Name, Date, and Time */}
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h4" gutterBottom>
                                <b>{info.city}</b>
                            </Typography>
                            <Typography variant="h5" color="text.secondary">
                                <i>{formatDateTime(info.timestamp)}</i>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item>
                                    <AirOutlinedIcon fontSize="large" />
                                </Grid>
                                <Grid item>
                                    <Typography variant="body3" color="text.secondary">
                                        <b>Wind Speed: {info.windSpeed} m/s</b>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <BeachAccessOutlinedIcon fontSize="large" />
                                </Grid>
                                <Grid item>
                                    <Typography variant="body3" color="text.secondary">
                                        <b>Humidity: {info.humidity}%</b>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Other Weather Details */}
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="body3" color="text.secondary">
                                <b>Min Temperature: {info.tempMin}&deg;C
                                <br></br>
                                Max Temperature: {info.tempMax}&deg;C
                                <br></br>
                                Weather: {info.weather_desc}
                                <br></br>
                                Feels Like: {info.feelsLike}&deg;C</b>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}
