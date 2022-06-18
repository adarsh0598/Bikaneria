import { createStore, combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
  },
  preloadedState: {
    cart: {
      cartItems: cartItemsFromStorage,
    },
  },
  middleware: [thunk],
});
/*
const reducer = combineReducers({
    productList: productListReducer,
})


const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
*/

export default store;
