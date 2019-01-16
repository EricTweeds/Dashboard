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

export const loadLightsRequest = () => ({
  type: 'LOAD_LIGHTS_REQUEST'
});

export const loadLightsSuccess = data => ({
  type: 'LOAD_LIGHTS_SUCCESS',
  data
});

export const loadLightsError = err => ({
  type: 'LOAD_LIGHTS_ERROR',
  err
});

export const changeLightsRequest = lightType => ({
  type: 'CHANGE_LIGHTS_REQUEST',
  lightType
});

export const changeLightsSuccess = data => ({
  type: 'CHANGE_LIGHTS_SUCCESS',
  data
});

export const changeLightsError = err => ({
  type: 'CHANGE_LIGHTS_ERROR',
  err
});

export const loadWhosOnlineRequest = () => ({
  type: 'LOAD_WHOSONLINE_REQUEST'
});

export const loadWhosOnlineSuccess = (data, otherDevices) => ({
  type: 'LOAD_WHOSONLINE_SUCCESS',
  data,
  otherDevices
});

export const loadWhosOnlineError = err => ({
  type: 'LOAD_WHOSONLINE_ERROR',
  err
});

export const loadIndexStatus = () => ({
  type: 'LOAD_INDEX'
});

export const loadIndexStatusReceived = (active) => ({
  type: 'LOAD_INDEX_STATUS',
  active
});
