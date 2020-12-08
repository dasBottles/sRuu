import {React, useEffect, useState} from 'react'
import axios from 'axios';

const Weather = () => {
    const [currentWeather, setCurrentWeather] = useState('');

    useEffect(()=> {
        axios
        .get('/api')
        .then(response => {
            console.log(response);
            let currentTempt = response.data.current.temperature;
            setCurrentWeather(currentTempt);
        })
    });
    return (
        <div>
            Current Weather in Fairfield, CA is: {currentWeather}
        </div>
    )
}

export default Weather
