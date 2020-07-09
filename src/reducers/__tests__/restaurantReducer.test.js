import restaurantReducer from '../restaurantReducer';
import { SET_REFINE_TEXT, GET_RESTAURANTS } from '../../actions/types';

describe('Restaurant Reducer', () => {
  it('should setup the default values', () => {
    const state = restaurantReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
      restaurants: null,
      refineText: '',
    });
  });

  it('should set the restaurants property', () => {
    const restaurants = { name: 'foo', address: 'bar', area: 'baz', price: 2 };
    const state = restaurantReducer(undefined, {
      type: GET_RESTAURANTS,
      payload: restaurants,
    });
    expect(state.restaurants).toEqual(restaurants);
  });

  it('should set the refine filter text', () => {
    const state = restaurantReducer(undefined, {
      type: SET_REFINE_TEXT,
      text: 'foo',
    });
    expect(state.refineText).toBe('foo');
  });
});
