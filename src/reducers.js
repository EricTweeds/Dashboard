import { combineReducers } from 'redux';

const defaultState = {
  data: []
}

export function weather(state = defaultState, action) {
  switch (action.type) {
    case 'LOAD_WEATHER_SUCCESS':
      return { data: action.data }
    default:
      return state;
  }
};

export function recent(state = defaultState, action) {
  switch (action.type) {
    case 'LOAD_RECENT_SUCCESS':
      return { data: action.data }
    default:
      return state;
  }
};

export function lights(state = defaultState, action) {
  switch (action.type) {
    case 'LOAD_LIGHTS_SUCCESS':
      return { data: action.data }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  weather,
  recent,
  lights
});

export default rootReducer;
