export async function getCategories() {
  const fetchApi = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const result = await fetchApi.json();
  return result;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endUrl = !query ? `category=${categoryId}` : `category=${categoryId}&q=${query}`;
  const fetchApi = await fetch(` https://api.mercadolibre.com/sites/MLB/search?${endUrl}`);
  const result = await fetchApi.json();
  return result;
}
