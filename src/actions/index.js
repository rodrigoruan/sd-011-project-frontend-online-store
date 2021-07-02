export const ADD_TO_CART = 'ADD_TO_CART';
export const DECRESE_OF_CART = 'DECRESE_OF_CART';
export const RESET_CART = 'RESET_CART';

export const addToCart = ({ id, title, thumbnail, price, inStorage }) => ({
  type: ADD_TO_CART,
  payload: {
    id, title, thumbnail, price, inStorage,
  },
});

export const decreaseOfCart = ({ id, title, thumbnail, price, inStorage }) => ({
  type: DECRESE_OF_CART,
  payload: {
    id, title, thumbnail, price, inStorage,
  },
});

export const resetCart = () => ({
  type: RESET_CART,
});
