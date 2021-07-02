const INITIAL_STATE = {
  cartList: [],
};
const newItem = (action) => ({
  id: action.payload.id,
  title: action.payload.title,
  thumbnail: action.payload.thumbnail,
  price: action.payload.price,
  inStorage: action.payload.inStorage,
  quantity: 1,
});
function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_TO_CART':
    if (state.cartList.length === 0) {
      return {
        ...state,
        cartList: [
          ...state.cartList,
          newItem(action),
        ],
      };
    }
    if (state.cartList.find((item) => item.id === action.payload.id)) {
      const updatedCartList = state.cartList.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem.quantity += 1;
          return cartItem;
        }
        return cartItem;
      });
      return {
        ...state,
        cartList: updatedCartList,
      };
    }
    return {
      ...state,
      cartList: [
        ...state.cartList,
        newItem(action),
      ],
    };
  default:
    return state;
  }
}

export default cartReducer;
