import { createSlice } from "@reduxjs/toolkit";

const calculateTotal = (items) => {
  return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
};

const getTimestamp = () => new Date().toLocaleString();

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: {
      user: "userIdLoggedIn",
      updatedAt: getTimestamp(),
      total: 0,
      items: [],
    },
  },
  reducers: {
    addCartItem: (state, { payload }) => {
      const { id, quantity } = payload;

      const existingItemIndex = state.value.items.findIndex(
        (item) => item.id === id
      );

      let updatedItems;

      if (existingItemIndex !== -1) {
        updatedItems = state.value.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        updatedItems = [...state.value.items, payload];
      }

      state.value = {
        ...state.value,
        items: updatedItems,
        total: calculateTotal(updatedItems),
        updatedAt: getTimestamp(),
      };
    },

    removeCartItem: (state, { payload }) => {
      const updatedItems = state.value.items.filter(
        (item) => item.id !== payload.id
      );

      state.value = {
        ...state.value,
        items: updatedItems,
        total: calculateTotal(updatedItems),
        updatedAt: getTimestamp(),
      };
    },

    clearCart: (state) => {
      state.value.items = [];
      state.value.total = 0;
      state.value.updatedAt = getTimestamp();
    },
  },
});

export const { addCartItem, removeCartItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
