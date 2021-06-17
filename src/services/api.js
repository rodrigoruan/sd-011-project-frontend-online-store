export async function getCategories() {
  const getApi = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const resultApi = await getApi.json();
  return resultApi;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const getApi = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const resultApi = await getApi.json();
  return resultApi;
}
