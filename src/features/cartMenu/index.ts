import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsProps } from "@/components/CartButton";

const initialState: ProductsProps[] = [];

export const cartSlice = createSlice({
    name: "cartMenu",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<ProductsProps>) => {
            if (state.find((item) => item.id === action.payload.id)) {
                const selected = state.find(
                    (item) => item.id === action.payload.id
                );
                selected ? (selected.qtd = selected.qtd + 1) : null;
            } else {
                state.push(action.payload);
                const added = state.find((item) => item.qtd === undefined);
                added ? (added.qtd = 1) : null;
            }
        },
        removeProduct: (state, action: PayloadAction<ProductsProps>) => {
            state = state.filter((item) => item.id !== action.payload.id);
            return state;
        },
        incrementQtd: (state, action: PayloadAction<ProductsProps>) => {
            const selected = state.find(
                (item) => item.id === action.payload.id
            );
            selected ? (selected.qtd = selected.qtd + 1) : null;
        },
        decreaseQtd: (state, action: PayloadAction<ProductsProps>) => {
            const selected = state.find(
                (item) => item.id === action.payload.id
            );
            if (selected !== undefined && selected.qtd > 1) {
                selected.qtd = selected.qtd - 1;
            }
        },
    },
});

export const { addProduct, removeProduct, incrementQtd, decreaseQtd } =
    cartSlice.actions;
export const cartReducer = cartSlice.reducer;
