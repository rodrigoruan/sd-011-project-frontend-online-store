const addToCart = ({ title, thumbnail, inStorage, price }) => ({
  type: 'ADD_TO_CART',
  payload: {
    id, title, thumbnail, inStorage, price,
  },
});

export { addToCart as default };
