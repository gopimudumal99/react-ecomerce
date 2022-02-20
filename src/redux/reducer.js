
import { ADD_ITEM, DEL_ITEM } from './actionTypes';
const cart = []

export const Reducer = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case ADD_ITEM: {
      const exits = state.find((x) => x.id === product.id);
      if (exits) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        let product = action.payload;
        return [...state, { ...product, qty: 1 }];
      }
    }

    case DEL_ITEM: {
      const exits1 = state.find((x) => x.id === product.id);
      if (exits1.qty === 1) {
        return state.filter((x) => x.id !== product.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
    }

    default:
      return state;
  }
};