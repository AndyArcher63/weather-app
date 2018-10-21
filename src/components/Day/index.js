// @flow
import * as React from 'react';
import moment from 'moment';
import Classes from './Day.module.css';

type Props = {
  data: {},
}

const Days = (props: Props) => {
  const { data } = props;
  if (Object.keys(data).length === 0) {
    return null;
  }
  const times = Object.keys(data).map(key => (
    <div key={data[key].dt} className={`time ${data[key].sys.pod === 'd' ? Classes.day : Classes.night}`}>
      <ul className={Classes.widget}>
        <li>{moment.unix(data[key].dt).format('HH:mm')}</li>
        <li>
          {`${data[key].main.temp_min} / ${data[key].main.temp_max}`}
        </li>
        <li>{data[key].main.humidity}</li>
        <li className={Classes.weather}>
          <span className={Classes.weatherDescription}>{data[key].weather[0].description}</span>
          <img src={`http://openweathermap.org/img/w/${data[key].weather[0].icon}.png`} alt={data[key].weather[0].description} />
        </li>
      </ul>
    </div>
  ));

  return (
    <div>
      <ul className={Classes.key}>
        <li>Time</li>
        <li>Temp Min/Max (&#8451;)</li>
        <li>Humidity</li>
        <li>Weather</li>
      </ul>
      {times}
    </div>
  );
};

export default Days;
