import React from 'react';
import { connect } from 'react-redux';
import './Search.css';
import { getCityRestaurants, setRefineText } from '../../actions';

export const Search = ({ getCityRestaurants, setRefineText, refineText }) => {
  const handleCityChange = (event) => {
    const {
      target: { value },
    } = event;

    getCityRestaurants(value);
  };

  const handleRefineChange = (event) => {
    const {
      target: { value },
    } = event;

    setRefineText(value);
  };

  return (
    <div className="search-container">
      <label htmlFor="city">
        <span className="label-text">City</span>
        <input
          type="text"
          id="city"
          className="search-input"
          onChange={handleCityChange}
        />
      </label>
      <label htmlFor="refine-text">
        <span className="label-text">Refine</span>
        <input
          type="text"
          id="refine-text"
          defaultValue={refineText}
          onChange={handleRefineChange}
          className="search-input"
        />
      </label>
    </div>
  );
};

const mapStateToProps = (state) => ({
  restaurants: state.restaurants.restaurants,
  refineText: state.restaurants.refineText,
});

export default connect(mapStateToProps, { getCityRestaurants, setRefineText })(
  Search,
);
