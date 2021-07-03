import { ADD_TO_CART, DECRESE_OF_CART, RESET_CART, REMOVE_OF_CART } from '../actions';

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

const filterArray = (state, action) => {
  const newState = state.cartList.filter((item) => item.id !== action.payload.id);
  return newState;
};

function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_TO_CART:
    if (state.cartList.find((item) => item.id === action.payload.id)) {
      const updatedCartList = state.cartList.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem.quantity += 1;
        }
        return cartItem;
      });
      return {
        ...state, cartList: updatedCartList,
      };
    }
    return {
      ...state,
      cartList: [...state.cartList, newItem(action)],
    };

  case DECRESE_OF_CART:
    return {
      ...state,
      cartList: state.cartList.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem.quantity -= 1;
        }
        return cartItem;
      }),
    };

  case RESET_CART:
    return INITIAL_STATE;

  case REMOVE_OF_CART:
    return {
      ...state,
      cartList: [...filterArray(state, action)],
    };

  default:
    return state;
  }
}

export default cartReducer;
