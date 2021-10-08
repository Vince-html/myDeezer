import { createSlice } from '@reduxjs/toolkit';

const favoriteList = createSlice({
  name: 'List',
  initialState: {
    listFavorites: [],
  },
  reducers: {
    addToFavorite(state, action) {
      state.listFavorites = action.payload;
    },
  },
});

export const { addToFavorite } = favoriteList.actions;

export default favoriteList.reducer;
