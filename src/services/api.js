export async function getCategories() {
  const apiURL = 'https://api.mercadolibre.com/sites/MLB/categories';

  return fetch(apiURL)
    .then((response) => response.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const apiURL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;

  return fetch(apiURL)
    .then((response) => response.json());
}
