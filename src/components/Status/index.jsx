import React from 'react';
import { connect } from 'react-redux';
import './Status.css';
import Food from './images/food.svg';
import NoData from './images/no-data.svg';

const Status = ({ restaurants }) => {
  if (!Array.isArray(restaurants)) {
    return <img className="status-image" src={Food} alt="Plate of Food" />;
  }

  if (restaurants.length === 0) {
    return (
      <>
        <h2 className="no-data-text">
          No restaurants found with these parameters.
        </h2>
        <img className="status-image" src={NoData} alt="No Data Found" />
      </>
    );
  }

  return null;
};

const mapStateToProps = (state) => ({
  restaurants: state.restaurants.restaurants,
});

export default connect(mapStateToProps)(Status);
