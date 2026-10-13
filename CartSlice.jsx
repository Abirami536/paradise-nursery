
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',

  initialState: {
    items: []
  },

  reducers: {
    additem: (state, action) => {
      const plant = action.payload;
      const existingItem = state.items.find(
        item => item.id === plant.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...plant,
          quantity: 1
        });
      }
    },

    removeltern: (state, action) => {
      state.items = state.items.filter(
        item => item.id !== action.payload
      );
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(
        plant => plant.id === id
      );

      if (item && quantity > 0) {
        item.quantity = quantity;
      }
    }
  }
});

export const {
  additem,
  removeltern,
  updateQuantity
} = cartSlice.actions;

export default cartSlice.reducer;
