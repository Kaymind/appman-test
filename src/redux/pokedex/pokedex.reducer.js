import * as pokedexActions from './pokedex.action';

const INITIAL_STATE = {
  fetching: false,
  pokedexList: [],
  searchedPokedexList: [],
  myPokedexList: [],
};

const transFormData = (itemToAdd) => {
  const data = itemToAdd.map((item) => {
    const hp = typeof item.hp === 'number' ? (+item.hp > 100 ? 100 : 0) : 0;
    const strength = item.attacks
      ? item.attacks.length * 50 >= 100
        ? 100
        : item.attacks.length * 50
      : 0;
    const weakness = item.weaknesses
      ? item.weaknesses.length * 50 >= 100
        ? 100
        : 0
      : 0;
    const damage = item.attacks
      ? item.attacks.reduce((acc, cur) => {
          return acc + +cur.damage.match(/\d+/g);
        }, 0)
      : 0;
    const happiness = Math.round((hp / 10 + damage / 10 + 10 - weakness) / 5);

    return {
      ...JSON.parse(JSON.stringify(item)),
      hp,
      strength,
      weakness,
      damage,
      happiness,
    };
  });
  return data;
};

const pokedexReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case pokedexActions.GET_SEARCH_POKEDEX_START:
    case pokedexActions.GET_POKEDEX_LIST_START: {
      return {
        ...state,
        fetching: !state.fetching,
      };
    }
    case pokedexActions.GET_SEARCH_POKEDEX_SUCCESS: {
      return {
        ...state,
        searchedPokedexList: transFormData(
          action.payload.filter(
            (item) => !state.myPokedexList.find((mPk) => mPk.id === item.id)
          )
        ),
        fetching: false,
      };
    }
    case pokedexActions.CLEAR_SEARCH_POKEDEX_LIST: {
      return {
        ...state,
        searchedPokedexList: [],
      };
    }
    case pokedexActions.GET_POKEDEX_LIST_SUCCESS: {
      return {
        ...state,
        pokedexList: transFormData(
          action.payload.filter(
            (item) => !state.myPokedexList.find((mPk) => mPk.id === item.id)
          )
        ),
        fetching: false,
      };
    }
    case pokedexActions.GET_SEARCH_POKEDEX_FAIL:
    case pokedexActions.GET_POKEDEX_LIST_FAIL: {
      return {
        ...state,
        pokedexList: [],
        fetching: false,
      };
    }
    case pokedexActions.ADD_ITEM_TO_MY_POKEDEX_LIST: {
      return {
        ...state,
        pokedexList: state.pokedexList.filter(
          (pk) => pk.id !== action.payload.id
        ),
        searchedPokedexList: state.pokedexList.filter(
          (pk) => pk.id !== action.payload.id
        ),
        myPokedexList: [...state.myPokedexList, action.payload],
      };
    }
    case pokedexActions.REMOVE_ITEM_FROM_MY_POKEDEX_LIST: {
      return {
        ...state,
        myPokedexList: state.myPokedexList.filter(
          (pk) => pk.id !== action.payload.id
        ),
        pokedexList: [action.payload, ...state.pokedexList],
      };
    }
    default:
      return state;
  }
};

export default pokedexReducer;
