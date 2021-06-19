export function saveProduct(product, amount) {
  const previousShoppingCart = localStorage.getItem('shoppingCart');

  if (!previousShoppingCart) {
    const shoppingCartItem = { [product.id]: { details: product, quantity: 1 } };
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCartItem));
  } else {
    const shoppingCart = JSON.parse(previousShoppingCart);
    const { id } = product;

    if (shoppingCart[id]) {
      shoppingCart[id].quantity += amount;
    } else {
      shoppingCart[product.id] = { details: product, quantity: 1 };
    }

    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
  }
}

export function retrieveCart() {
  const currentCart = localStorage.getItem('shoppingCart');
  if (currentCart) {
    const parsedCart = JSON.parse(currentCart);
    return parsedCart;
  }
}

export function saveReview(formState) {
  // formState: {
  //  productId: 'MLB213123123123',
  //  email: 'example@exmaple.com',
  //  message: 'maravihoso',
  // }

  // salvar os valores do formulário no localstorage
  // review: {
  //   'MLB1234': [
  //     {
  //       email,
  //       message
  //     },
  //   ],
  // }
  const { productId, email, message } = formState;
  const previousReviews = localStorage.getItem('reviews');

  // se esse item não existir no localStorage (reviews)
  if (!previousReviews) {
    // criar ele com o formato acima
    const reviews = {
      [productId]: [{
        email,
        message,
      }],
    };
    // salvar no local storage
    localStorage.setItem('reviews', JSON.stringify(reviews));
  } else {
    // recuperar o reviews do storage
    const reviews = JSON.parse(previousReviews);
    // se já existem avaliações para o produto
    if (reviews[productId]) {
      // adicionar um novo comentário no array de comentários desse produto
      const productReviews = reviews[productId];
      reviews[productId] = [...productReviews, { email, message }];
    } else {
      // criar uma nova entrada no objeto com esse comentário dentro do array
      reviews[productId] = [{ email, message }];
    }
    // salvar no local storage
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }
}
