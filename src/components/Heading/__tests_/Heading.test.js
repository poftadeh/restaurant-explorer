import React from 'react';
import { shallow } from 'enzyme';
import Heading from '../index';

it('renders <Heading /> properly', () => {
  const wrapper = shallow(<Heading />);
  expect(wrapper).toMatchSnapshot();
});
