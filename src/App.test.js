import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import ForecastRequest from './api/requests';
import Mock from './__mocks__/successMock';

jest.mock('./api/requests');

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  describe('getForecast()', () => {
    it('should on a 200 response set results to state.forecast', async () => {
      ForecastRequest.mockImplementation(() => Promise.resolve({ data: Mock }));
      await wrapper.instance().getForecast();

      wrapper.update();

      expect(wrapper.state('error')).toEqual(false);
      expect(wrapper.state('forecast')).toEqual(Mock);
      expect(wrapper.state().noResults).toEqual(false);
      expect(wrapper.find('WeatherWidget').props().data).toEqual(Mock);
    });

    it('should on a 500 response set state.error to true', async () => {
      const processErrorSpy = jest.spyOn(wrapper.instance(), 'processError');
      const error = {
        response: {
          data: 'failed',
        },
      };
      ForecastRequest.mockImplementation(() => Promise.reject(error));
      await wrapper.instance().getForecast();

      wrapper.update();

      expect(wrapper.state('error')).toEqual(true);
      expect(processErrorSpy).toHaveBeenCalledWith(error);
    });

    it('should on 404 response set noResults to true', async () => {
      const processErrorSpy = jest.spyOn(wrapper.instance(), 'processError');
      const error = {
        response: {
          data: {
            cod: '404',
          },
        },
      };
      ForecastRequest.mockImplementation(() => Promise.reject(error));
      await wrapper.instance().getForecast();

      wrapper.update();

      expect(wrapper.state('noResults')).toEqual(true);
      expect(processErrorSpy).toHaveBeenCalledWith(error);
    });
  });

  it('handleInputChange() should update the target name in state', () => {
    wrapper.instance().handleInputChange({
      target: {
        value: 'test',
        name: 'testInput',
      },
    });
    expect(wrapper.state().testInput).toEqual('test');
  });

  describe('processError()', () => {
    it('should set noResults to true when e.response.data.cod is defined and equal to 404', () => {
      const error = {
        response: {
          data: {
            cod: '404',
          },
        },
      };
      wrapper.instance().processError(error);

      expect(wrapper.state().noResults).toEqual(true);
      expect(wrapper.find('NoResults')).toHaveLength(1);
    });

    it('should set error to true when any other error returned', () => {
      const error = {
        response: {
          data: 'failed',
        },
      };
      wrapper.instance().processError(error);

      expect(wrapper.state().error).toEqual(true);
      expect(wrapper.find('Error').props().error).toEqual(true);
    });
  });
});
