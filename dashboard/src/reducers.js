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

export function whosOnline(state = defaultState, action) {
  switch (action.type) {
    case 'LOAD_WHOSONLINE_SUCCESS':
      return { 
        data: action.data,
        otherDevices: action.otherDevices
        }
    default:
      return state;
  }
};

export function locations(state = {}, action) {
  switch (action.type) {
    case 'LOAD_LOCATIONS_SUCCESS':
      return { 
        data: action.data
        }
    default:
      return state;
  }
};

export function indexStatus(state = {active: false}, action) {
  switch (action.type) {
    case 'LOAD_INDEX_STATUS':
      return {
        active: action.active && action.active === "OK"
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  weather,
  recent,
  lights,
  whosOnline,
  locations,
  indexStatus
});

export default rootReducer;
