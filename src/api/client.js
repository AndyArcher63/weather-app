// @flow
import axios from 'axios';

const baseURL = process.env.REACT_APP_WEATHER_API;

const instance = axios.create({
  baseURL,
  timeout: 10000,
});

export default instance;
