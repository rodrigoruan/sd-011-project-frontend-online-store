const removeFromCart = ({ title, thumbnail, inStorage, price }) => ({
  type: 'REMOVE_FROM_CART',
  payload: {
    id: {
      title, thumbnail, inStorage, price,
    },
  },
});

export { removeFromCart as default };
