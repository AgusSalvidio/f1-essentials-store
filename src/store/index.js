import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import counterReducer from "../features/Counter/counterSlice";
import shopReducer from "../features/Shop/shopSlice";
import { shopApi } from "../services/shopServices";
import cartReducer from "../features/Cart/cartSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    shop: shopReducer,
    cart: cartReducer,
    [shopApi.reducerPath]: shopApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware),
});

setupListeners(store.dispatch);

export default store;
