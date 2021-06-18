export function saveProduct(product, amount) {
  let shoppingCart = localStorage.getItem('shoppingCart');

  if (!shoppingCart) {
    shoppingCart = [{ productInfo: product, quantity: 1 }];

    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
  } else {
    shoppingCart = JSON.parse(shoppingCart);
    const { id } = product;
    const productInCart = shoppingCart
      .find(({ productInfo }) => productInfo.id === id);

    if (productInCart) {
      productInCart.quantity += amount;
    } else {
      shoppingCart = [...shoppingCart, { productInfo: product, quantity: 1 }];
    }

    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
  }
}

export function retrieveProduct() {
  console.log('todo');
}
