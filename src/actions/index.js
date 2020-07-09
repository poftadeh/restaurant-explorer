import { GET_RESTAURANTS, SET_REFINE_TEXT } from './types';

const API_LINK = 'http://opentable.herokuapp.com/api/';

export const getCityRestaurants = (cityName) => async (dispatch) => {
  console.log('in get city: ', cityName);
  if (!cityName) {
    dispatch({ type: GET_RESTAURANTS, payload: [] });
    return;
  }

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

export const setRefineText = (text) => ({
  type: SET_REFINE_TEXT,
  text,
});
