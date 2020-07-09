import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { getCityRestaurants } from '../index';
import { setRefineText } from '../index';
import { SET_REFINE_TEXT } from '../types';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  it('should get restaurants from API', async () => {
    const dummyData = {
      restaurants: [{ name: 'foo', area: 'bar', address: 'baz', price: 3 }],
    };

    const data = await getCityRestaurants('Toronto');
    const json = await data.json();
    expect(json).toBe(dummyData);
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

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
    fetchMock.getOnce('/todos', {
      body: { todos: ['do something'] },
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
      { type: types.FETCH_TODOS_REQUEST },
      { type: types.FETCH_TODOS_SUCCESS, body: { todos: ['do something'] } }
    ]
    const store = mockStore({ todos: [] })

    return store.dispatch(actions.fetchTodos()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})