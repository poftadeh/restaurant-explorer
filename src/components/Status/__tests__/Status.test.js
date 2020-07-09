import React from 'react';
import { shallow } from 'enzyme';
import { Status } from '../index';

it('renders <Status /> properly', () => {
  const wrapper = shallow(<Status />);
  expect(wrapper).toMatchSnapshot();
});
