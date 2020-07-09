import React from 'react';
import { connect } from 'react-redux';
import { getCityRestaurants, setRefineText } from '../../actions';

const Search = ({
  getCityRestaurants,
  setRefineText,
  refineText,
}) => {
  const handleCityChange = (event) => {
    const {
      target: { value },
    } = event;

    getCityRestaurants(value);
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
        onChange={handleCityChange}
      />
      <input
        type="text"
        placeholder="Refine"
        defaultValue={refineText}
        onChange={handleRefineChange}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  restaurants: state.restaurants.restaurants,
  refineText: state.restaurants.refineText,
});

export default connect(mapStateToProps, { getCityRestaurants, setRefineText })(
  Search,
);
