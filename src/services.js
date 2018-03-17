export const weatherAPI = location => {
  return [
    {
      name: 'Inside',
      temp: 20,
      state: 'Loud' //Based on time of day?
    },
    {
      name: 'Current',
      temp: 2,
      state: 'Snowing'
    },
    {
      name: 'Tomorrow',
      temp: 5,
      state: 'Sunny'
    }
  ];
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
  return [
    {
      type: 'Type 1'
    },
    {
      type: 'Type 2'
    },
    {
      type: 'Type 3'
    },
    {
      type: 'Type 4'
    },
    {
      type: 'Type 5'
    },
    {
      type: 'Type 6'
    }
  ]
}

export const lightsAPI = lightType => {
  //Will be a PUT
}

export const whosOnlineAPI = () => {
  return [
    {
      icon: 'phone_android',
      name: 'Eric`s Phone',
      ip: '192.168.1.4',
      online: true
    },
    {
      icon: 'phone_android',
      name: 'Nick`s Phone',
      ip: '192.168.1.5',
      online: false
    },
    {
      icon: 'computer',
      name: 'Eric`s Computer',
      ip: '192.168.1.3',
      online: true
    },
    {
      icon: 'videogame_asset',
      name: 'Xbox One',
      ip: '192.168.1.7',
      online: false
    }
  ]

}