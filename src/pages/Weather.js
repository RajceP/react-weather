import React, { useEffect, useState } from 'react';

import axios from '../api/axios-weather';
import Card from '../components/Card';
import Loader from '../components/UI/Loader';
import { usePosition } from '../utils/hooks/Position';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { latitude, longitude } = usePosition(true);

  useEffect(() => {
    loadData();
  });

  const loadData = () => {
    const lat = latitude;
    const lon = longitude;

    if (lat && lon && !weather) {
      axios
        .get(`location/search/?lattlong=${lat},${lon}`)
        .then((response) => {
          axios
            .get(`location/${response.data[0].woeid}`)
            .then((locResponse) => {
              setWeather(locResponse.data);
              setLoading(false);
            })
            .catch((_locEError) => {
              setError(true);
            });
        })
        .catch((_error) => {
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
    cards = weather.consolidated_weather.map((weatherItem) => {
      return <Card key={weatherItem.id} weather={weatherItem} />;
    });
  }

  return (
    <>
      <h1>{title}</h1>
      <div>{cards}</div>
    </>
  );
};

export default Weather;
