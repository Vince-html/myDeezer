import { createSlice } from '@reduxjs/toolkit';

const musicList = createSlice({
  name: 'List',
  initialState: {
    list: [],
    loading: false,
    searchState: 'track',
    pages: 1,
    error: false,
    infinite: true,
    loadingList: false,
  },
  reducers: {
    fetchStarted(state) {
      state.loading = true;
    },
    fetchError(state, action) {
      state.error = action.payload;
    },
    fetchListLoading(state) {
      state.loadingList = true;
    },
    setListOnFavorite(state, action) {
      state.list = action.payload;
    },
    listMore(state, action) {
      state.list.push(...action.payload);
      state.loadingList = false;
    },
    listSearch(state, action) {
      state.list = action.payload;
    },
    setCheckBox(state, action) {
      state.searchState = action.payload;
    },
    addPage(state) {
      state.pages++;
    },
  },
});

export const {
  fetchStarted,
  listMore,
  addPage,
  fetchError,
  fetchListLoading,
  listSearch,
  setCheckBox,
  setListOnFavorite,
} = musicList.actions;

export default musicList.reducer;
