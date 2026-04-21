import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./reducers/ProductReducer";
import { errorReducer } from "./reducers/ErrorReducer";

export const store = configureStore({
  reducer: {
    product: productReducer,
    errors: errorReducer,
  },
  preloadedState: {},
});

export default store;
