import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./reducers/ProductReducer";
import { errorReducer } from "./reducers/ErrorReducer";
import { cartReducer } from "./reducers/cartReducer";
import { authReducer } from "./reducers/authReducer";
import { paymentMethodReducer } from "./reducers/paymentMethodReducer";
import { adminReducer } from "./reducers/adminReducer";
import { orderReducer } from "./reducers/orderReducer";

const user = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth"))
  : null;

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const selectedUserAddress = localStorage.getItem("CHECKOUT_ADDRESS")
  ? JSON.parse(localStorage.getItem("CHECKOUT_ADDRESS"))
  : [];

const initialState = {
  auth: { user: user, selectedUserAddress },
  carts: { cart: cartItems },
};

export const store = configureStore({
  reducer: {
    product: productReducer,
    errors: errorReducer,
    carts: cartReducer,
    auth: authReducer,
    payment: paymentMethodReducer,
    admin: adminReducer,
    order: orderReducer,
  },
  preloadedState: initialState,
});

export default store;
