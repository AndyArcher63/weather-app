import React from 'react';
import { shallow } from 'enzyme';
import WeatherWidget from '.';
import Day from '../../components/Day';
import Mock, { formattedData } from '../../__mocks__/successMock';

describe('<WeatherWidget />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<WeatherWidget data={{ list: [] }} />);
  });

  it('should on empty list array return nothing', () => {
    expect(wrapper.text()).toEqual('');
  });

  it('groupDays() should return an array list of times into an object of arrays for days and render the same number of <Day />', () => {
    wrapper.setProps({
      data: Mock,
    });
    wrapper.instance().groupDays();
    wrapper.update();
    expect(wrapper.state().groupedDays).toEqual(formattedData);
    expect(wrapper.find(Day)).toHaveLength(1);
  });
});
