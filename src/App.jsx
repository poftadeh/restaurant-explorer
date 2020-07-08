import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Search from './components/Search';
import Heading from './components/Heading';
import RestaurantTable from './components/RestaurantTable';

const App = () => (
  <Provider store={store}>
    <Heading />
    <Search />
    <RestaurantTable />
  </Provider>
);

export default App;
