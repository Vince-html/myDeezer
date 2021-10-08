import { ActionTypes } from '../constants/actions-types';

const INITIAL_STATE = {
  data: [{}],
  loading: true,
  searchState: 'track',
  favoriteList: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_LIST_MUSIC: {
      return { ...state, loading: true };
    }
    case ActionTypes.SET_LIST_MUSIC: {
      const newData = action.payload;
      return {
        ...state,
        data: [...state.data, ...newData],
        loading: false,
      };
    }
    case ActionTypes.SET_FAVORITE_MUSIC: {
      const changeBoo = state.data.map((item) => {
        if (item.id === action.payload && item.favorite === true) {
          return { ...item, favorite: false };
        }
        if (item.id === action.payload && item.favorite === false) {
          return { ...item, favorite: true };
        }
        if (item.id === action.payload) {
          return { ...item, favorite: true };
        }
        return item;
      });

      const items = changeBoo.filter((item) => item.favorite === true);
      console.log(typeof state.favoriteList.items);

      return {
        ...state,
        data: changeBoo,
        favoriteList: { ...state.favoriteList.items, items },
      };
    }

    case ActionTypes.SET_SEARCH_LIST_MUSIC: {
      const dataSet = action.payload.map((item) => ({
        ...item,
      }));

      return {
        ...state,
        data: dataSet,
        loading: false,
      };
    }

    case ActionTypes.SET_IS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case ActionTypes.SET_SEARCH_STATE: {
      return {
        ...state,
        searchState: action.payload,
        favoriteList: { ...state.favoriteList.items },
      };
    }
    default:
      return state;
  }
};

export default reducer;
