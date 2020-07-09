import React from 'react';
import { shallow } from 'enzyme';
import Container from '../index';

it('renders <Container /> properly', () => {
  const wrapper = shallow(<Container />);
  expect(wrapper).toMatchSnapshot();
});
