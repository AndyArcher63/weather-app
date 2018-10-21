import React from 'react';
import { shallow } from 'enzyme';
import Error from '.';

describe('<Error />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Error error />);
  });

  it('should display an error message if props.error = "true"', () => {
    expect(wrapper.find('.error')).toHaveLength(1);
  });

  it('should display nothing if props.error = "false"', () => {
    wrapper.setProps({
      error: false,
    });
    expect(wrapper.find('.error')).toHaveLength(0);
  });
});
