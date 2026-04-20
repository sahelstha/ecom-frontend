import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./reducers/ProductReducer";

export const store = configureStore({
  reducer: { product: productReducer },
  preloadedState: {},
});

export default store;
