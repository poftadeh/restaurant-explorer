import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { getCityRestaurants, setRefineText } from '../index';
import { SET_REFINE_TEXT, GET_RESTAURANTS } from '../types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should properly create a GET_RESTAURANTS action', () => {
    const mockedRestaurants = [
      { name: 'foo', address: 'bar', area: 'baz', price: 3 },
    ];

    fetchMock.getOnce(
      'http://opentable.herokuapp.com/api/restaurants?city=Toronto',
      {
        body: { restaurants: mockedRestaurants },
        headers: { 'content-type': 'application/json' },
      },
    );

    const expectedActions = [
      { type: GET_RESTAURANTS, payload: mockedRestaurants },
    ];

    const store = mockStore({ restaurants: null });

    return store.dispatch(getCityRestaurants('Toronto')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should create an action to set the refine text string', () => {
    const text = 'dinner';
    const expectedAction = {
      type: SET_REFINE_TEXT,
      text,
    };
    expect(setRefineText(text)).toEqual(expectedAction);
  });
});
