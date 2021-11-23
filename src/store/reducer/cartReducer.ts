import { CartActionTypes } from '../actionTypes/cartActionTypes';
import { addItemToCart, deleteItem } from '@/helpers/cart/cart.utils';

const initialState = {
  isShow: false,
  items: [],
};

export const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_SHOW:
      return { ...state, isShow: !state.isShow };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        items: addItemToCart(state.items, action.payload),
      };
    case CartActionTypes.DELETE_ITEM:
      return {
        ...state,
        items: deleteItem(state.items, action.payload),
      };
    default:
      return state;
  }
};
