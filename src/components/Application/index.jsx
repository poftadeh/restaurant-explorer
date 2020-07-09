import React from 'react';
import 'fontsource-roboto';
import { Provider } from 'react-redux';
import store from '../../store';
import './App.css';
import Container from '../Container';
import ConnectedSearch from '../Search';
import Heading from '../Heading';
import ConnectedRestaurantTable from '../RestaurantTable';
import ConnectedStatus from '../Status';

const App = () => (
  <Provider store={store}>
    <Container>
      <Heading />
      <ConnectedSearch />
      <section className="results">
        <ConnectedRestaurantTable />
        <ConnectedStatus />
      </section>
    </Container>
  </Provider>
);

export default App;
