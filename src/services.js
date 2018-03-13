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