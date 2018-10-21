import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from '.';

describe('<SearchBox />', () => {
  let wrapper;
  const doSearchMock = jest.fn();
  const onChangeMock = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<SearchBox
      doSearch={doSearchMock}
      onChange={onChangeMock}
      searchTerm=""
    />);
  });

  it('should on button press run "doSearchMock"', () => {
    wrapper.find('button').simulate('click');
    expect(doSearchMock).toHaveBeenCalled();
  });

  it('should on input change run "onChangeMock"', () => {
    wrapper.find('input').simulate('change');
    expect(onChangeMock).toHaveBeenCalled();
  });
});
