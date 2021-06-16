export async function getCategories() {
  const apiURL = 'https://api.mercadolibre.com/sites/MLB/categories';

  return fetch(apiURL)
    .then((response) => response.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let apiURL;
  if (categoryId) {
    apiURL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  }

  if (query) {
    apiURL = `https://api.mercadolibre.com/sites/MLB/search?category=${query}`;
  }

  if (categoryId && query) {
    apiURL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  }

  return fetch(apiURL)
    .then((response) => response.json());
}
