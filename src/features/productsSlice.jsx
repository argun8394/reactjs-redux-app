import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  loading: false,
  error: false,
};

export const getProducts = createAsyncThunk(
  "getProductsFunc",

  async () => {
    const url = `https://honey-badgers-ecommerce.glitch.me/products`;

    const { data } = await axios(url);
    console.log(data);
    return data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearProducts: (state) => {
      state.products = [];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(getProducts.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export const { clearProducts } = productsSlice.actions;

export default productsSlice.reducer;
