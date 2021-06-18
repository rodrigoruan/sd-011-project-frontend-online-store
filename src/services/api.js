const apiURL = 'https://api.mercadolibre.com/sites/MLB';

export async function getCategories() {
  return fetch(`${apiURL}/categories`)
    .then((response) => response.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  return fetch(`${apiURL}/search?category=${categoryId}&q=${query}`)
    .then((response) => response.json());
}
