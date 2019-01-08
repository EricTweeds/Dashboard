import request from 'request';
import config from './config.json';

export const weatherAPI = location => {
  return fetch(`${config.api.url}/weather`, {}).then((response) => response.json())
}

export const recentAPI = () => {
  return [
    {
      name: 'Lights',
      icon: 'lightbulb_outline',
      lastAccessed: 1520272350
    },
    {
      name: 'tunes',
      icon: 'music_note',
      lastAccessed: 1520272350
    },
    {
      name: 'network',
      icon: 'network_check',
      lastAccessed: 1520272350
    }
  ];
}

export const lightsDataAPI = () => {
  return fetch(`${config.api.url}/lightTypes`, {}).then((response) => response.json())
}

export const lightsAPI = lightType => {
  request({
    method: 'GET',
    uri: `${config.api.url}/lights`,
    headers: {
      type: lightType
    }
  },
  (error, response, body) => {
    if (error) {
      console.log(error);
    }
  })
}

export const whosOnlineAPI = () => {
  return fetch(`${config.api.url}/whosOnline`, {}).then((response) => response.json())
}