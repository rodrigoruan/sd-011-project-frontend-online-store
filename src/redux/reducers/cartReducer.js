const INITIAL_STATE = {
  state: null,
};

function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_TO_CART':
    return {
      ...state,
      cartList: [
        ...state.cartList,
        {
          id: action.payload.id,
          title: action.payload.title,
          thumbnail: action.payload.thumbnail,
          price: action.payload.price,
          inStorage: action.payload.inStorage,
        },
      ],
    };
  // case 'REMOVE_FROM_CART':
  //   return { state: action.payload };
  // case 'CLEAR_CART':
  //   return { state: action.payload };
  default:
    return state;
  }
}

export default cartReducer;
