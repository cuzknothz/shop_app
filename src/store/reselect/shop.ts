import { createSelector } from 'reselect';

const selectShop = (state: any) => state.shop;

export const selectDirectorySections = createSelector(
  [selectShop],
  (shop) => shop.collections
);
