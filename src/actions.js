export const loadWeatherRequest = location => ({
  type: 'LOAD_WEATHER_REQUEST',
  location
});

export const loadWeatherSuccess = data => ({
  type: 'LOAD_WEATHER_SUCCESS',
  data
});

export const loadWeatherError = err => ({
  type: 'LOAD_WEATHER_ERROR',
  err
});

export const loadRecentRequest = () => ({
  type: 'LOAD_RECENT_REQUEST'
});

export const loadRecentSuccess = data => ({
  type: 'LOAD_RECENT_SUCCESS',
  data
});

export const loadRecentError = err => ({
  type: 'LOAD_RECENT_ERROR',
  err
});
