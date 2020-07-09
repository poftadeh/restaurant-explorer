import React from 'react';
import { connect } from 'react-redux';

const RestaurantTable = ({ restaurants, refineText }) => {
  const refineRegExp = new RegExp(refineText, 'i');
  console.log({ refineRegExp });

  if (restaurants?.length > 0) {
    return restaurants
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
            <td>{refineText}</td>
          </tr>
        );
      });
  }

  return <p>No results found.</p>;
};

const mapStateToProps = (state) => ({
  restaurants: state.restaurants.restaurants,
  refineText: state.restaurants.refineText,
});

export default connect(mapStateToProps)(RestaurantTable);
