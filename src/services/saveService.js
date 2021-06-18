export function verifyQuantity(product) {
  const { products } = product;
  const cartItens = JSON.parse(localStorage.getItem('carrinho'));
  const objectFilter = cartItens.filter((item) => {
    if (item.products.id === products.id) {
      return false;
    }
    return true;
  });
  return objectFilter;
}

export function saveStorage(product) {
  if (!localStorage.getItem('carrinho')) {
    localStorage.setItem('carrinho', JSON.stringify([product]));
  } else {
    const cartItens = verifyQuantity(product);
    cartItens.push(product);
    localStorage.setItem('carrinho', JSON.stringify(cartItens));
  }
}
