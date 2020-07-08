import { GET_RESTAURANTS } from './types';

const API_LINK = 'http://opentable.herokuapp.com/api/';

export const getCityRestaurants = (cityName) => async (dispatch) => {
  console.log('in get city');
  try {
    const res = await fetch(`${API_LINK}restaurants?city=${cityName}`);
    const data = await res.json();
    const formattedData = data.restaurants.map(
      ({ name, area, address, price }) => ({
        name,
        area,
        address,
        price,
      }),
    );
    dispatch({ type: GET_RESTAURANTS, payload: formattedData });
  } catch (err) {
    console.error(err);
  }
};
