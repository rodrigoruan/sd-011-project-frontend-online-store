export async function getCategories() {
  const requestApi = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await requestApi.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const requestApi = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const data = await requestApi.json();
  return data;
}
