export const ADD_TO_CART = 'ADD_TO_CART';

export const addToCart = ({ id, title, thumbnail, price, inStorage }) => ({
  type: ADD_TO_CART,
  payload: {
    id, title, thumbnail, price, inStorage,
  },
});
