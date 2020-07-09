import React from 'react';
import { shallow } from 'enzyme';
import Heading from '../index';

it('renders Heading title message properly', () => {
  const wrapper = shallow(<Heading />);
  const h1 = <h1 className="main-heading">Restaurant Explorer</h1>;
  expect(wrapper.contains(h1)).toEqual(true);
});
