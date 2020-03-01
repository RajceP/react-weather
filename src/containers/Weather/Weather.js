import React, { useState, useEffect } from 'react';
import { usePosition } from '../../Position';
import axios from '../../axios-weather';

import Card from '../../components/Card/Card';
import Aux from '../../hoc/Auxiliary';

import Loader from '../../UI/Loader/Loader'

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { latitude, longitude } = usePosition(true);

  useEffect(() => {
    loadData();
  });

  const loadData = () => {
    let lat = latitude;
    let lon = longitude;

    if (lat && lon && !weather) {
      axios
        .get('location/search/?lattlong=' + lat + ',' + lon)
        .then(response => {
          axios
            .get('location/' + response.data[0].woeid)
            .then(response => {
              setWeather(response.data);
              setLoading(false);
            })
            .catch(error => {
              setError(true);
            });
        })
        .catch(error => {
          setError(true);
        });
    }
  };

  let cards = loading ? <Loader /> : null;
  let title = null;

  if (error) {
    cards = <p>Jejda, něco se pokazilo!</p>;
  }

  if (weather && !loading) {
    title = weather.title;
    cards = weather.consolidated_weather.map(weather => {
      return <Card key={weather.id} weather={weather}></Card>;
    });
  }

  return (
    <Aux>
      <h1>{title}</h1>
      <div>{cards}</div>
    </Aux>
  );
};

export default Weather;
