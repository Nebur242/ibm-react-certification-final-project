import { configureStore } from "@reduxjs/toolkit";
import { plantsApi } from "./features/plants";
import { setupListeners } from "@reduxjs/toolkit/query";
import cartReducer from "./features/cart";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [plantsApi.reducerPath]: plantsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(plantsApi.middleware),
});

setupListeners(store.dispatch);
