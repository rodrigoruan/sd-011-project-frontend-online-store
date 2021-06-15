export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((result) => result.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
    .then((result) => result.json());
}
