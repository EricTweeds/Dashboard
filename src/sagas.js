import { take, call, put, fork } from 'redux-saga/effects';
import { loadWeatherSuccess, loadWeatherError, loadRecentSuccess, loadRecentError } from './actions';
import { weatherAPI, recentAPI } from './services';

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
