import axios from 'axios';

export const weatherData = axios.create({
  baseURL: 'process.env.REACT_APP_API_URL',
});

export const newsData = axios.create({
  baseURL: 'http://mock-api-call/news/get-news',
});
