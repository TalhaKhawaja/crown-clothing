import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser], (user) => user.currentUser
);

// export const selectCartItemsCount = createSelector(
//   [selectCartItems],
//   cartItems => cartItems.reduce((accumQuantity, cartItem) => accumQuantity + cartItem.quantity, 0)  
// );