import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import musicList from './data';
import favoriteList from './favoriteList';

const persistConfig = {
  key: '@myDeezer',
  storage: storage,
  whitelist: ['favoriteList'],
  blacklist: ['musicList'],
};

const rootReducer = combineReducers({ musicList, favoriteList });
const persistedReducer = persistReducer(persistConfig, rootReducer);

let sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: persistedReducer,
  middleware: middleware,
});

sagaMiddleware.run(rootSaga);

export default store;
