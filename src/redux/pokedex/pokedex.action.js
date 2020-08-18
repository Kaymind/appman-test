import httpClient from '../../service/httpClient';

export const GET_POKEDEX_LIST_START = 'GET_POKEDEX_LIST_START';
export const GET_POKEDEX_LIST_SUCCESS = 'GET_POKEDEX_LIST_SUCCESS';
export const GET_POKEDEX_LIST_FAIL = 'GET_POKEDEX_LIST_FAIL';
export const GET_SEARCH_POKEDEX_START = 'GET_SEARCH_POKEDEX_START';
export const GET_SEARCH_POKEDEX_SUCCESS = 'GET_SEARCH_POKEDEX_SUCCESS';
export const GET_SEARCH_POKEDEX_FAIL = 'GET_SEARCH_POKEDEX_FAIL';
export const CLEAR_SEARCH_POKEDEX_LIST = 'CLEAR_SEARCH_POKEDEX_LIST';
export const ADD_ITEM_TO_MY_POKEDEX_LIST = 'ADD_ITEM_TO_MY_POKEDEX_LIST';
export const REMOVE_ITEM_FROM_MY_POKEDEX_LIST =
  'REMOVE_ITEM_FROM_MY_POKEDEX_LIST';

const getPokedexStart = () => ({
  type: GET_POKEDEX_LIST_START,
});

const getPokedexSucess = (payload) => ({
  type: GET_POKEDEX_LIST_SUCCESS,
  payload,
});

const getPokedexFail = (payload) => ({
  type: GET_POKEDEX_LIST_FAIL,
  payload,
});

export const getPokedexList = () => async (dispatch) => {
  try {
    dispatch(getPokedexStart());
    const res = await httpClient.get('api/cards');
    dispatch(getPokedexSucess(res.data.cards));
  } catch (error) {
    dispatch(getPokedexFail(error.message));
  }
};

const getSearchedPokedexStart = () => ({
  type: GET_SEARCH_POKEDEX_START,
});

const getSearchedPokedexSuccess = (payload) => ({
  type: GET_SEARCH_POKEDEX_SUCCESS,
  payload,
});

const getSearchedPokedexFail = (payload) => ({
  type: GET_SEARCH_POKEDEX_FAIL,
  payload,
});

export const clearSearchedPokedexList = () => ({
  type: CLEAR_SEARCH_POKEDEX_LIST,
});

export const getSearchedPokedex = (search) => async (dispatch) => {
  try {
    dispatch(getSearchedPokedexStart());
    const res = await httpClient.get('api/cards', {
      params: {
        name: search,
        type: search,
      },
    });
    dispatch(getSearchedPokedexSuccess(res.data.cards));
  } catch (error) {
    dispatch(getSearchedPokedexFail());
  }
};

export const addItemToMyPokedexList = (payload) => ({
  type: ADD_ITEM_TO_MY_POKEDEX_LIST,
  payload,
});

export const removeItemFromMyPokedexList = (payload) => async (dispatch) => {
  try {
    dispatch(removeItemFromMyPokedexListLocal(payload));
    dispatch(getPokedexStart());
    const res = await httpClient.get('api/cards');
    dispatch(getPokedexSucess(res.data.cards));
  } catch (error) {
    dispatch(getPokedexFail(error.message));
  }
};

const removeItemFromMyPokedexListLocal = (itemToRemove) => ({
  type: REMOVE_ITEM_FROM_MY_POKEDEX_LIST,
  payload: itemToRemove,
});
