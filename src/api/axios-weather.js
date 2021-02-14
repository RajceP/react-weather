import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://thingproxy.freeboard.io/fetch/https://www.metaweather.com/api/',
});

export default instance;
