import { configureStore } from "@reduxjs/toolkit";

import productsSlice from "../features/productsSlice";
import favoriteSlice from "../features/favoriteSlice";

export const store = configureStore({
  reducer: {
    api: productsSlice,
    favorites: favoriteSlice,
  },
  devTools: true,
});
