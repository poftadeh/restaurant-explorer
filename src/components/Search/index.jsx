import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getCityRestaurants } from '../../actions';

const Search = ({ getCityRestaurants, dispatch }) => {
  const [city, setCity] = useState('');
  const [refineText, setRefineText] = useState('');

  const handleCityChange = (event) => {
    const {
      target: { value },
    } = event;

    getCityRestaurants(value);
    setCity(value);
    console.log({ value });
  };

  const handleRefineChange = (event) => {
    const {
      target: { value },
    } = event;

    setRefineText(value);
    console.log({ value });
  };

  return (
    <>
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={handleCityChange}
      />
      <input
        type="text"
        placeholder="Refine"
        value={refineText}
        onChange={handleRefineChange}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  restaurants: state.restaurants.restaurants,
});

export default connect(mapStateToProps, { getCityRestaurants })(Search);
