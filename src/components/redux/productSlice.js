import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  // userInfo: null,
  // totalPrice: 0,
  quantity: 0,
};

const productSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const cartItemIndex = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (cartItemIndex) {
        cartItemIndex.quantity += action.payload.quantity;
      } else {
        state.cartItems.push({ ...action.payload, ...{ quantity: 1 } });
        // state.productData = action.payload;
      }
    },
    deleteCart: (state, action) => {
      const { _id } = action.payload;
      state.cartItems = state.cartItems.filter((item) => item._id !== _id);
    },
    resetCart: (state) => {
      state.cartItems = [];
    },
    incrementQuantity: (state, action) => {
      const incrementQty = state.cartItems.find(
        (inc) => inc._id === action.payload._id
      );
      if (incrementQty) {
        incrementQty.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const decrementQty = state.cartItems.find(
        (dec) => dec._id === action.payload._id
      );
      if (decrementQty.quantity === 1) {
        decrementQty.quantity = 1;
      } else {
        decrementQty.quantity--;
      }
    },

    //add user google account
    addUser: (state, action) => {
      state.useInfo = action.payload;
    },
    removeUser: (state) => {
      state.useInfo = null;
    },
  },
});

export const {
  addToCart,
  deleteCart,
  resetCart,
  incrementQuantity,
  decrementQuantity,
  addUser,
  removeUser,
} = productSlice.actions;
export default productSlice.reducer;
