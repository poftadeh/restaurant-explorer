import React from 'react';
import { shallow } from 'enzyme';
import { Search } from '../index';

it('renders <Search /> properly', () => {
  const wrapper = shallow(<Search />);
  expect(wrapper).toMatchSnapshot();
});
