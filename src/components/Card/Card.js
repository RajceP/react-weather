import React from 'react';

import styled from 'styled-components';

const WeatherCard = styled.div`
  width: 60%;
  margin: 16px auto;
  padding: 0px 16px;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.57);
  text-align: left;
  border-radius: 15px;
  background-color: #363636;

  @media (min-width: 1440px) {
    display: inline-block;
    width: 12%;
    margin: 8px;
  }
`;

const Content = styled.div`
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
    height: 100px;
  }

  @media (max-width: 499px) {
    display: none;
  }
`;

const Card = props => {
  const getDate = date => {
    const days = ['Neděle', 'Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota'];
    const d = new Date(date);
    return days[d.getDay()];
  };

  return (
    <WeatherCard>
      <Content>
        <h3>{getDate(props.weather.applicable_date)}</h3>
        <Icon
          src={
            'https://www.metaweather.com/static/img/weather/' +
            props.weather.weather_state_abbr +
            '.svg'
          }
          alt={props.weather.weather_state_abbr}
        />
        <p>Min: {props.weather.min_temp.toFixed(2)} °C</p>
        <p>Max: {props.weather.max_temp.toFixed(2)} °C</p>
        <p>Rychlost větru: {(props.weather.wind_speed * 0.44704).toFixed(2)} m/s</p>
        <p>Směr větru: {props.weather.wind_direction.toFixed(2)}°</p>
        <p>Tlak vzduchu: {props.weather.air_pressure} hPa</p>
        <p>Vlhkost: {props.weather.humidity} %</p>
        <p>Viditelnost: {(props.weather.visibility * 1.609344).toFixed(2)} km</p>
        <p>Předvídatelnost: {props.weather.predictability} %</p>
      </Content>
    </WeatherCard>
  );
};

export default Card;
