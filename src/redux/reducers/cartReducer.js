const INITIAL_STATE = {
  state: '',
};

function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_TO_CART':
    return { state: action.state };
  case 'REMOVE_FROM_CART':
    return { state: action.state };
  case 'CLEAR_CART':
    return { state: action.state };
  default:
    return state;
  }
}

export default cartReducer;
