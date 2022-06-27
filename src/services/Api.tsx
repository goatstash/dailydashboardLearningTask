import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { IWeather } from '../interfaces/IWeather';

export const weatherData = axios.create({
  baseURL: 'http://mock-api-call/weather/get-weather',
});

export const newsData = axios.create({
  baseURL: 'http://mock-api-call/news/get-news',
});
