import { createSelector } from 'reselect';

const selectCart = (state: any) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart: any) => cart.items
);
export const selectCartItemCount = createSelector([selectCartItems], (items) =>
  items.reduce((a: any, i: any) => a + i.quantity, 0)
);
export const selectCartIsShow = createSelector(
  [selectCart],
  (cart) => cart.isShow
);
export const selectCartToTalPrice = createSelector([selectCartItems], (items) =>
  items
    .map((i: any) => i.quantity * i.price)
    .reduce((a: any, i: any) => a + i, 0)
);
