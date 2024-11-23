import { createSlice } from "@reduxjs/toolkit";

// Initial state for the cart
const initialState = {
  products: [],
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Set the list of products
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    // Update the cart items (add, update, or remove items)
    updateCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
    // Clear all items from the cart
    clearCartItems: (state) => {
      state.cartItems = [];
    },
  },
});

// Export the reducer
export default cartSlice.reducer;

// Export actions
export const { setProducts, updateCartItems, clearCartItems } =
  cartSlice.actions;
