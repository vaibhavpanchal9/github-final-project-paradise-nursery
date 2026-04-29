import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existing = state.items.find(i => i.id === action.payload.id);

      if (existing) {
        existing.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.totalQuantity++;
    },

    removeItem: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      state.totalQuantity -= item.quantity;
      state.items = state.items.filter(i => i.id !== action.payload);
    },

    increaseQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      item.quantity++;
      state.totalQuantity++;
    },

    decreaseQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item.quantity > 1) {
        item.quantity--;
        state.totalQuantity--;
      }
    }
  }
});

export const { addItem, removeItem, increaseQty, decreaseQty } = cartSlice.actions;
export default cartSlice.reducer;
