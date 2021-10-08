import { all, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from './constants/actions-types';
import { loadMusicList, setSearchMusic } from './List/saga';

export default function* rootSaga() {
  return yield all([
    yield takeLatest(ActionTypes.GET_LIST_MUSIC, loadMusicList),
    yield takeLatest(ActionTypes.SET_SEARCH_MUSIC, setSearchMusic),
  ]);
}
