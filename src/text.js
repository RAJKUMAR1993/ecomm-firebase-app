// const theItem = state.cartItems.find(
//   (item) => item._id === action.payload._id
// );
// if (theItem) {
//   return {
//     ...state,
//     cartItems: [...state.cartItems, action.payload],
//     // totalPrice: state.totalPrice + action.payload.price,
//     quantity: theItem.quantity + 1,
//   };
// }
// return {
//   ...state,
//   cartItems: [...state.cartItems, action.payload],
//   // totalPrice: state.totalPrice + action.payload.price,
// };
// ---------------------other methods -----------------------
// const cartItemIndex = state.productData.find(
//   (item) => item._id === action.payload._id
// );
// if (cartItemIndex) {
//   state.cartItems[cartItemIndex].cartQuantity += 1;
// } else {
//   state.productData.push({ ...action.payload, ...{ cartQuantity: 1 } });
//   // state.productData = action.payload;
// }

// const theItem = state.cartItems.findIndex(
//   (item) => item._id === action.payload._id
// );
// if (theItem >= 0) {
//   state.cartItems[theItem].quantity += 1;
// } else {
//   const temp = { ...action.payload, quantity: 1 };
//   state.cartItems.push(temp);
// }
