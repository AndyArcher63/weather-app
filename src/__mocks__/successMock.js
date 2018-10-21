const success = {
  cod: '200',
  message: 0.0105,
  cnt: 40,
  list: [
    {
      dt: 1540112400,
      main: {
        temp: 288.3,
        temp_min: 284.606,
        temp_max: 288.3,
        pressure: 1034.44,
        sea_level: 1042.06,
        grnd_level: 1034.44,
        humidity: 96,
        temp_kf: 3.7,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.11,
        deg: 244.5,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2018-10-21 09:00:00',
    },
    {
      dt: 1540123200,
      main: {
        temp: 292.82,
        temp_min: 290.047,
        temp_max: 292.82,
        pressure: 1033.63,
        sea_level: 1041.2,
        grnd_level: 1033.63,
        humidity: 70,
        temp_kf: 2.77,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.56,
        deg: 265.001,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2018-10-21 12:00:00',
    },
    {
      dt: 1540134000,
      main: {
        temp: 292.34,
        temp_min: 290.496,
        temp_max: 292.34,
        pressure: 1032.69,
        sea_level: 1040.25,
        grnd_level: 1032.69,
        humidity: 60,
        temp_kf: 1.85,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      clouds: {
        all: 12,
      },
      wind: {
        speed: 2.96,
        deg: 277.004,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2018-10-21 15:00:00',
    },
  ],
  city: {
    id: 2643743,
    name: 'London',
    coord: {
      lat: 51.5073,
      lon: -0.1277,
    },
    country: 'GB',
    population: 1000000,
  },
};

/* eslint-disable-next-line */
export const formattedData = {"2018-10-21": [{"clouds": {"all": 0}, "dt": 1540112400, "dt_txt": "2018-10-21 09:00:00", "main": {"grnd_level": 1034.44, "humidity": 96, "pressure": 1034.44, "sea_level": 1042.06, "temp": 288.3, "temp_kf":3.7, "temp_max": 288.3, "temp_min": 284.606}, "sys": {"pod": "d"}, "weather": [{"description": "clear sky", "icon": "01d", "id": 800, "main":"Clear"}], "wind": {"deg": 244.5, "speed": 2.11}}, {"clouds": {"all": 0}, "dt": 1540123200, "dt_txt": "2018-10-21 12:00:00", "main": {"grnd_level": 1033.63, "humidity": 70, "pressure": 1033.63, "sea_level": 1041.2, "temp": 292.82, "temp_kf": 2.77, "temp_max": 292.82, "temp_min": 290.047}, "sys": {"pod": "d"}, "weather": [{"description": "clear sky", "icon": "01d", "id": 800, "main": "Clear"}], "wind": {"deg": 265.001, "speed": 2.56}}, {"clouds": {"all": 12}, "dt": 1540134000, "dt_txt": "2018-10-21 15:00:00", "main": {"grnd_level": 1032.69, "humidity": 60, "pressure": 1032.69, "sea_level": 1040.25, "temp": 292.34, "temp_kf": 1.85, "temp_max": 292.34, "temp_min": 290.496}, "sys": {"pod": "n"}, "weather": [{"description": "few clouds", "icon": "02d", "id": 801, "main": "Clouds"}], "wind": {"deg": 277.004, "speed": 2.96}}]};

export default success;
