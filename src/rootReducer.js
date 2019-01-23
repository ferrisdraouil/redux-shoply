import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';

const INITIAL_STATE = { cart: [] };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      if (state.cart.find(e => e.id === action.payload.id)) {
        let newCart = state.cart.map(item => {
          if (item.id === action.payload.id) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        });
        return { cart: newCart };
      } else {
        let newItem = action.payload;
        newItem.count = 1;
        return { cart: [...state.cart, newItem] };
      }
    }
    case REMOVE_FROM_CART: {
      if (state.cart.find(e => e.id === action.payload.id)) {
        let newCart = [...state.cart];
        for (let x of newCart) {
          if (x.id === action.payload.id && x.count > 0) {
            x.count = x.count - 1;
          }
        }
        return { cart: newCart };
      } else {
        return state;
      }
    }
    default:
      return state;
  }
}

export default rootReducer;
