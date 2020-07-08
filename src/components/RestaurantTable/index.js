import React from 'react';
import { connect } from 'react-redux';

const RestaurantTable = ({ restaurants }) => {
  if (restaurants) {
    return restaurants.map(({ name, area, address, price }) => {
      return (
        <tr>
          <td>{name}</td>
          <td>{area}</td>
          <td>{address}</td>
          <td>{price}</td>
        </tr>
      );
    });
  }

  return <p>No Data</p>;
};

const mapStateToProps = (state) => ({
  restaurants: state.restaurants.restaurants,
});

export default connect(mapStateToProps)(RestaurantTable);
