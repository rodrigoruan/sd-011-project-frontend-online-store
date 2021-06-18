function verifyQuantity(product) {
  const cartItens = JSON.parse(localStorage.getItem('carrinho'));
  const objectFilter = cartItens.filter((item) => {
    if (item.products.id === product.id) {
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

export function oioi() {
  console.log('oi');
}
