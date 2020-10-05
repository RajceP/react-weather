/* eslint-disable camelcase */
import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const WeatherCard = styled.div`
  width: 60%;
  margin: 16px auto;
  padding: 0px 16px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5);
  text-align: left;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.5);

  @media (min-width: 1440px) {
    display: inline-block;
    width: 12%;
    margin: 8px;
  }
`;

const CardContent = styled.div`
  display: inline;

  @media (min-width: 1440px) {
    display: inline-block;
  }
`;

const Icon = styled.img`
  @media (max-width: 1439px) {
    position: absolute;
    margin-right: 25%;
    right: 0;
    height: 200px;
  }

  @media (min-width: 1440px) {
    height: 50px;
  }

  @media (max-width: 699px) {
    margin: -40px 20%;
    height: 100px;
  }

  @media (max-width: 499px) {
    margin: -40px 20%;
    height: 50px;
  }

  @media (max-width: 299px) {
    display: none;
  }
`;

const Card = ({
  weather: {
    applicable_date,
    weather_state_abbr,
    min_temp,
    max_temp,
    wind_speed,
    wind_direction,
    air_pressure,
    humidity,
    visibility,
    predictability,
  },
}) => {
  const getDay = (date) => {
    const days = ['Neděle', 'Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota'];
    const d = new Date(date);
    const split = date.split('-');
    const transformedDate = `${split[2]}.${split[1]}`;
    return `${days[d.getDay()]} - ${transformedDate}`;
  };

  return (
    <WeatherCard>
      <CardContent>
        <h3>{getDay(applicable_date)}.</h3>
        <Icon
          src={`https://www.metaweather.com/static/img/weather/${weather_state_abbr}.svg`}
          alt={weather_state_abbr}
        />
        <p>Min: {min_temp.toFixed(2)} °C</p>
        <p>Max: {max_temp.toFixed(2)} °C</p>
        <p>Rychlost větru: {(wind_speed * 0.44704).toFixed(2)} m/s</p>
        <p>Směr větru: {wind_direction.toFixed(2)}°</p>
        <p>Tlak vzduchu: {air_pressure} hPa</p>
        <p>Vlhkost: {humidity} %</p>
        <p>Viditelnost: {(visibility * 1.609344).toFixed(2)} km</p>
        <p>Pravděpodobnost: {predictability} %</p>
      </CardContent>
    </WeatherCard>
  );
};

Card.propTypes = {
  weather: PropTypes.shape({
    air_pressure: PropTypes.number,
    applicable_date: PropTypes.string,
    humidity: PropTypes.number,
    max_temp: PropTypes.number,
    min_temp: PropTypes.number,
    predictability: PropTypes.number,
    visibility: PropTypes.number,
    weather_state_abbr: PropTypes.string,
    wind_direction: PropTypes.number,
    wind_speed: PropTypes.number,
  }).isRequired,
};

export default Card;
