// @flow
import * as React from 'react';
import SearchBox from './components/SearchBox';
import WeatherWidget from './containers/WeatherWidget';
import Header from './components/Header';
import Error from './components/Error';
import NoResults from './components/NoResults';
import ForecastRequest from './api/requests';
import Classes from './App.module.css';

/* global SyntheticInputEvent */

type State = {
  searchTerm: string,
  forecast: {
    list: [],
  },
  error: boolean,
  noResults: boolean,
};

class App extends React.Component<null, State> {
  state = {
    searchTerm: '',
    forecast: { list: [] },
    error: false,
    noResults: false,
  };

  getForecast = async () => {
    this.setState({
      error: false,
      forecast: { list: [] },
    });
    try {
      const { searchTerm } = this.state;
      const appId = String(process.env.REACT_APP_APPID);
      const results = await ForecastRequest(searchTerm, appId);
      this.setState({
        forecast: results.data,
        noResults: false,
      });
    } catch (e) {
      this.processError(e);
    }
  }

  handleInputChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const { target } = e;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

  processError(e: { response: { data: { cod: string } } }) {
    if (e.response.data.cod === '404') {
      this.setState({
        forecast: { list: [] },
        noResults: true,
      });
    } else {
      this.setState({
        error: true,
      });
    }
  }

  render() {
    const {
      searchTerm, forecast, error, noResults,
    } = this.state;
    return (
      <div className={Classes.App}>
        <Header />
        <SearchBox
          searchTerm={searchTerm}
          doSearch={this.getForecast}
          onChange={this.handleInputChange}
        />
        <Error error={error} />
        {noResults
          && <NoResults />
        }
        {forecast.list.length > 0
          && (
            <WeatherWidget
              data={forecast}
            />
          )
        }
      </div>
    );
  }
}

export default App;
