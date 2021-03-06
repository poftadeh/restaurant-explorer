import React from 'react';
import { connect } from 'react-redux';
import './RestaurantTable.css';

export const RestaurantTable = ({ restaurants, refineText }) => {
  if (restaurants?.length > 0) {
    const refineRegExp = new RegExp(refineText, 'i');
    return (
      <table className="restaurant-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Area</th>
            <th>Address</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {restaurants
            .filter(({ name, address, area }) => {
              return (
                refineRegExp.test(name) ||
                refineRegExp.test(address) ||
                refineRegExp.test(area)
              );
            })
            .map(({ name, area, address, price }) => {
              return (
                <tr key={name}>
                  <td>{name}</td>
                  <td>{area}</td>
                  <td>{address}</td>
                  <td>{price}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    );
  }

  return null;
};

const mapStateToProps = (state) => ({
  restaurants: state.restaurants.restaurants,
  refineText: state.restaurants.refineText,
});

export default connect(mapStateToProps)(RestaurantTable);
