import { take, call, put, fork } from 'redux-saga/effects';
import { 
  loadWeatherSuccess,
  loadWeatherError,
  loadRecentSuccess,
  loadRecentError,
  changeLightsSuccess,
  changeLightsError,
  loadLightsSuccess,
  loadLightsError,
  loadWhosOnlineSuccess,
  loadWhosOnlineError,
  loadIndexStatusReceived,
  loadLocationsSuccess,
  loadLocationsError
} from './actions';
import { 
  weatherAPI,
  recentAPI,
  lightsAPI,
  lightsDataAPI,
  whosOnlineAPI,
  statusAPI,
  locationsAPI
} from './services';

export function* loadStatus() {
  try {
    const response = yield call(statusAPI);
    yield put(loadIndexStatusReceived(response));
  } catch (error) {
    yield put(loadIndexStatusReceived(error));
  }
}

export function* loadStatusFlow() {
  while (true) {
    yield take('LOAD_INDEX');
    yield fork(loadStatus);
  }
}

export function* loadWeather() {
  try {
    const response = yield call(weatherAPI);
    yield put(loadWeatherSuccess(response));
  } catch (error) {
    yield put(loadWeatherError(error));
  }
}

export function* loadWeatherFlow() {
  while (true) {
    const { location } = yield take(
      'LOAD_WEATHER_REQUEST'
    );
    yield fork(loadWeather, location);
  }
}

export function* loadRecent() {
  try {
    const response = yield call(recentAPI);
    yield put(loadRecentSuccess(response));
  } catch (error) {
    yield put (loadRecentError(error));
  }
}

export function* loadRecentFlow() {
  while (true) {
    yield take('LOAD_RECENT_REQUEST');
    yield fork(loadRecent);
  }
}

export function* loadLights() {
  try {
    const response = yield call(lightsDataAPI);
    yield put(loadLightsSuccess(response));
  } catch (error) {
    yield put (loadLightsError(error));
  }
}

export function* loadLightsFlow() {
  while (true) {
    yield take('LOAD_LIGHTS_REQUEST');
    yield fork(loadLights);
  }
}

export function* changeLights(lightType) {
  try {
    const response = yield call(lightsAPI, lightType);
    yield put(changeLightsSuccess(response));
  } catch (error) {
    yield put(changeLightsError(error));
  }
}

export function* changeLightsFlow() {
  while (true) {
    const { lightType } = yield take('CHANGE_LIGHTS_REQUEST');
    yield fork(changeLights, lightType); 
  }
}

export function* loadWhosOnline() {
  try {
    const response = yield call(whosOnlineAPI);
    yield put(loadWhosOnlineSuccess(response.data, response.otherDevices));
  } catch (error) {
    yield put (loadWhosOnlineError(error));
  }
}

export function* loadWhosOnlineFlow() {
  while (true) {
    yield take('LOAD_WHOSONLINE_REQUEST');
    yield fork(loadWhosOnline);
  }
}

export function* loadLocations() {
  try {
    const response = yield call(locationsAPI);
    yield put(loadLocationsSuccess(response));
  } catch (error) {
    yield put (loadLocationsError(error));
  }
}

export function* loadLocationsFlow() {
  while (true) {
    yield take('LOAD_LOCATIONS_REQUEST');
    yield fork(loadLocations);
  }
}

export default [loadRecentFlow, loadWhosOnlineFlow, loadWeatherFlow, loadLightsFlow, changeLightsFlow, loadStatusFlow, loadLocationsFlow];