import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotal: 0
};
const CartSlice = createSlice({
  name: "cartSlice",
  initialState: initialState,
  reducers: {
    addToCart (state, action) {
      const newTotalAmount = state.cartTotal + (action.payload.item.price);
      const existingCartItemIndex = state.cartItems.findIndex((item) => item.id === action.payload.item.id);
      const existingCartItem = state.cartItems[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {...existingCartItem, amount:existingCartItem.amount + action.payload.item.amount};
        updatedItems = [...state.cartItems];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.cartItems.concat(action.payload.item);
      }

      state.cartItems = updatedItems;
      state.cartTotal = newTotalAmount;
    }
  }
});

export const cartAction = CartSlice.actions;
export default CartSlice.reducer;