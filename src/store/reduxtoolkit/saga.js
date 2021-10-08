import { put, call } from 'redux-saga/effects';
import api from '../../global/services/api';
import { listMore, fetchError, fetchStarted, listSearch } from './data';

export function* loadMusicList(action) {
  fetchStarted();
  try {
    let response = yield call(api.get, 'chart/2/tracks&limit=8');
    yield put(listMore(response.data.data));
  } catch (e) {
    yield put(fetchError(e));
  }
}

export function* loadMoreMusic(action) {
  fetchStarted();
  try {
    let response = yield call(
      api.get,
      `chart/0/tracks?index=${action.pages}&limit=8`
    );
    yield put(listMore(response.data.data));
  } catch (e) {
    yield put(fetchError(e));
  }
}

export function* setSearchMusic(action) {
  fetchStarted();
  try {
    let response = yield call(
      api.get,
      `search/${action.selectCheckbox}?q=${action.textSearch}&limit=9`
    );

    yield put(listSearch(response.data.data));
  } catch (e) {
    yield put(fetchError(e));
  }
}
