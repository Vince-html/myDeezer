import { put, call } from 'redux-saga/effects';
import api from '../../../global/services/api';
import { ActionTypes } from '../constants/actions-types';

export function* loadMusicList(action) {
  let response = yield call(api.get, 'chart/2/tracks&limit=9');

  yield put({
    type: ActionTypes.SET_LIST_MUSIC,
    payload: response.data.data,
  });
}

export function* setSearchMusic(action) {
  let response = yield call(
    api.get,
    `search/${action.payload.searchFilter}?q=${action.payload.textSearch}&limit=9`
  );
  yield put({
    type: ActionTypes.SET_SEARCH_LIST_MUSIC,
    payload: response.data.data,
  });
}
