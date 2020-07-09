import React from 'react';
import 'fontsource-roboto';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Container from './components/Container';
import Search from './components/Search';
import Heading from './components/Heading';
import RestaurantTable from './components/RestaurantTable';

const App = () => (
  <Provider store={store}>
    <Container>
      <Heading />
      <Search />
      <RestaurantTable />
    </Container>
  </Provider>
);

export default App;
