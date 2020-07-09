import React from 'react';
import { connect } from 'react-redux';
import './Search.css';
import { getCityRestaurants, setRefineText } from '../../actions';

const Search = ({ getCityRestaurants, setRefineText, refineText }) => {
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
      <input type="text" placeholder="City" onChange={handleCityChange} />
      <input
        type="text"
        placeholder="Refine"
        defaultValue={refineText}
        onChange={handleRefineChange}
      />
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
