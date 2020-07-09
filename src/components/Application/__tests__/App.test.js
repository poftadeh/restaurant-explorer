import React from 'react';
import { shallow } from 'enzyme';
import App from '..';

it('renders <App /> properly', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
