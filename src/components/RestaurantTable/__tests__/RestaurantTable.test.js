import React from 'react';
import { shallow } from 'enzyme';
import { RestaurantTable } from '../index';

it('renders <RestaurantTable /> properly', () => {
  const wrapper = shallow(<RestaurantTable />);
  expect(wrapper).toMatchSnapshot();
});
