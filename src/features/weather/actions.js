
export const loadWeather = () => ({
  type: 'LOAD_WEATHER_REQUEST'
});

export const loadWeatherSuccess = data => ({
  type: 'LOAD_WEATHER_SUCCESS',
  data
});

export const loadWeatherError = err => ({
  type: 'LOAD_WEATHER_ERROR',
  err
})