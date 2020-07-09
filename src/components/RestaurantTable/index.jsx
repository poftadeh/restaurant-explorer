import React from 'react';
import { connect } from 'react-redux';
import './RestaurantTable.css';

const RestaurantTable = ({ restaurants, refineText }) => {
  if (restaurants?.length > 0) {
    const refineRegExp = new RegExp(refineText, 'i');
    console.log({ refineRegExp });
    return (
      <div className="table-container">
        <table className="restaurant-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Area</th>
              <th>Address</th>
              <th>Price</th>
            </tr>
          </thead>
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
        </table>
      </div>
    );
  }

  return null;
};

const mapStateToProps = (state) => ({
  restaurants: state.restaurants.restaurants,
  refineText: state.restaurants.refineText,
});

export default connect(mapStateToProps)(RestaurantTable);
