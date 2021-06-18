export function saveProduct(product, amount) {
  const previousShoppingCart = localStorage.getItem('shoppingCart');

  if (!previousShoppingCart) {
    const shoppingCartItem = { [product.id]: { details: product, quantity: 1 } };
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCartItem));
  } else {
    const shoppingCart = JSON.parse(previousShoppingCart);
    const { id } = product;
    console.log(id);
    console.log(shoppingCart[id]);

    if (shoppingCart[id]) {
      shoppingCart[id].quantity += amount;
    } else {
      shoppingCart[product.id] = { details: product, quantity: 1 };
    }

    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
  }
}

export function removeProduct() {
  console.log('todo');
}
