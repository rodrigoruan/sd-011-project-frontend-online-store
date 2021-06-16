export async function getCategories() {
  const endpoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(endpoint);
  return response.json();
}

export async function getProductsFromCategoryAndQuery(categoryId, query, id) {
  let endpoint;
  if (id) {
    endpoint = `https://api.mercadolibre.com/items/${id}`;
  }
  if (query) {
    endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  }
  if (categoryId) {
    endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  }
  if (categoryId && query) {
    endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  }

  const response = await fetch(endpoint);
  return response.json();
}
