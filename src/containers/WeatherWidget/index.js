// @flow
import * as React from 'react';
import moment from 'moment';
import Day from '../../components/Day';
import Classes from './WeatherWidget.module.css';

type State = {
  groupedDays: {},
}
type Props = {
  data: {
    list: [],
  },
}

class WeatherWidget extends React.Component<Props, State> {
  state = {
    groupedDays: {},
  }

  componentDidMount() {
    this.groupDays();
  }

  groupDays() {
    const { data } = this.props;
    const groupedDay = {};
    data.list.forEach((item) => {
      const itemDateVar = item.dt_txt;
      const itemDate = itemDateVar.substr(0, 10);
      if (Object.prototype.hasOwnProperty.call(groupedDay, itemDate)) {
        groupedDay[itemDate].push(item);
      } else {
        groupedDay[itemDate] = [];
        groupedDay[itemDate].push(item);
      }
    });
    this.setState({
      groupedDays: groupedDay,
    });
  }

  render() {
    const { data } = this.props;
    const { groupedDays } = this.state;
    if (data.list.length === 0) {
      return null;
    }

    const Days = Object.keys(groupedDays).map(key => (
      <div className={Classes.dayWrapper} key={key}>
        <h2 className={Classes.dayTitle}>{moment(key).format('ddd')}</h2>
        <Day data={groupedDays[key]} />
      </div>
    ));

    return (
      <div className={Classes.weatherWrapper}>
        {Days}
      </div>
    );
  }
}

export default WeatherWidget;
