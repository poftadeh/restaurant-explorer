import React from 'react';
import 'fontsource-roboto';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Container from './components/Container';
import Search from './components/Search';
import Heading from './components/Heading';
import RestaurantTable from './components/RestaurantTable';
import Status from './components/Status';

const App = () => (
  <Provider store={store}>
    <Container>
      <Heading />
      <Search />
      <section className="results">
        <RestaurantTable />
        <Status />
      </section>
    </Container>
  </Provider>
);

export default App;
