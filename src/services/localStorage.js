function handleCart(cart) {
  let cartItems = JSON.parse(localStorage.getItem('cart'));
  if (!cartItems) {
    cartItems = [];
  }

  // Adiciona o carrinho ao localStorage
  cartItems.push(cart);
  localStorage.setItem('cart', JSON.stringify([...cartItems]));
}

export default handleCart;
