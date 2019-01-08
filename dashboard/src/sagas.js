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
  loadWhosOnlineError
} from './actions';
import { 
  weatherAPI,
  recentAPI,
  lightsAPI,
  lightsDataAPI,
  whosOnlineAPI
} from './services';

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

export default [loadRecentFlow, loadWhosOnlineFlow, loadWeatherFlow, loadLightsFlow, changeLightsFlow];