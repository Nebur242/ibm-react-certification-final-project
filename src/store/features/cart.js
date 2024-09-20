import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    emptyCart: (state) => {
      state.items = [];
    },
    addItem: (state, action) => {
      state.items = [
        ...state.items,
        { plant: action.payload, quantity: 1, total: action.payload.price },
      ];
    },
    removeItem: (state, action) => {
      state.items = [...state.items].filter(
        (item) => item.plant.id !== action.payload
      );
    },
    increaseQuantity: (state, action) => {
      state.items = [...state.items].map((item) => {
        if (item.plant.id === action.payload.id) {
          const quantity = item.quantity + 1;
          return {
            ...item,
            quantity,
            total: quantity * action.payload.price,
          };
        }
        return item;
      });
    },
    decreaseQuantity: (state, action) => {
      state.items = [...state.items].map((item) => {
        if (item.plant.id === action.payload.id) {
          const quantity = item.quantity > 1 ? item.quantity - 1 : 1;
          return {
            ...item,
            quantity,
            total: quantity * action.payload.price,
          };
        }
        return item;
      });
    },
  },
});

export const {
  addItem,
  increaseQuantity,
  removeItem,
  decreaseQuantity,
  emptyCart,
} = cartSlice.actions;

export default cartSlice.reducer;
