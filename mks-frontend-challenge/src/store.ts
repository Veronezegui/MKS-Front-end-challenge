import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./features/cartMenu";
import { cartTotalReducer } from "./features/cartTotal";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        cartTotal: cartTotalReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
