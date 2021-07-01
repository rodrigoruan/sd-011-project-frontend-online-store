const clearCart = ({ title, thumbnail, inStorage, price }) => ({
  type: 'CLEAR_CART',
  payload: {
    id: {
      title, thumbnail, inStorage, price,
    },
  },
});

export { clearCart as default };
