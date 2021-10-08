import { ActionTypes } from '../constants/actions-types';

export const requestList = () => {
  return {
    type: ActionTypes.REQUEST_LIST_MUSIC,
  };
};

export const setListMusic = () => {
  return {
    type: ActionTypes.GET_LIST_MUSIC,
  };
};

export const setSearchList = (searchFilter, textSearch) => {
  return {
    type: ActionTypes.SET_SEARCH_MUSIC,
    payload: { searchFilter, textSearch },
  };
};

export const setSearchState = (searchFilter) => {
  return {
    type: ActionTypes.SET_SEARCH_STATE,
    payload: searchFilter,
  };
};

export const setIsLoading = () => {
  return {
    type: ActionTypes.SET_IS_LOADING,
  };
};

export const setFavoriteMusic = (id) => {
  return {
    type: ActionTypes.SET_FAVORITE_MUSIC,
    payload: id,
  };
};
