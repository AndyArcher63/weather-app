import React from 'react';
import { shallow } from 'enzyme';
import Day from '.';
import Mock from '../../__mocks__/successMock';

describe('<Day />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Day data={Mock.list} />);
  });

  it('should have three times based on mock response', () => {
    expect(wrapper.find('.time')).toHaveLength(3);
  });

  it('should render the first time with "day" class and the second with "night"', () => {
    expect(wrapper.find('.time').first().hasClass('day')).toEqual(true);
    expect(wrapper.find('.time').last().hasClass('night')).toEqual(true);
  });

  it('the first day should contain the following information in each "time" (time: 10:00, temp: 284.606 / 288.3, humidity: 96, clear sky', () => {
    expect(wrapper.find('.time').first().text()).toContain(['10:00', '284.606 / 288.3', '96', 'clear sky'].join(''));
  });

  it('the first day should contain an image with a url of: "http://openweathermap.org/img/w/01d.png"', () => {
    expect(wrapper.find('.time img').first().props().src).toEqual('http://openweathermap.org/img/w/01d.png');
  });

  it('should return null if no data is supplied', () => {
    wrapper.setProps({
      data: {},
    });
    expect(wrapper.text()).toEqual('');
  });
});
