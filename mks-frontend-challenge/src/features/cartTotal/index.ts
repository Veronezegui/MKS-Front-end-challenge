import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsProps } from "@/components/CartButton";

const initialState = {
    total: 0,
};

export const cartTotalSlice = createSlice({
    name: "cartTotal",
    initialState,
    reducers: {
        calculateTotal: (state, action: PayloadAction<ProductsProps[]>) => {
            Array.isArray(action.payload)
                ? (state.total = action.payload.reduce(
                      (accum, current) =>
                          accum + parseInt(current.price) * current.qtd,
                      0
                  ))
                : null;
            return state;
        },
    },
});

export const { calculateTotal } = cartTotalSlice.actions;
export const cartTotalReducer = cartTotalSlice.reducer;
