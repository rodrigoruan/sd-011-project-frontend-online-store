export async function getCategories() {
  const categories = await fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((response) => response.json());
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let products;
  if (categoryId === undefined) {
    products = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
      .then((response) => response.json());
    return products;
  } if (query === undefined) {
    products = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`)
      .then((response) => response.json());
    return products;
  }
  products = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
    .then((response) => response.json());
  return products;
}
