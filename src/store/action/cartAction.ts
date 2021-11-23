import { CartActionTypes } from '../actionTypes/cartActionTypes';

export const toogleCartShow = () => ({
  type: CartActionTypes.TOGGLE_CART_SHOW,
});
export const addItem = (item: any) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});
export const deleteItem = (item: any) => ({
  type: CartActionTypes.DELETE_ITEM,
  payload: item,
});
