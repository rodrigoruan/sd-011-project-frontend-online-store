export async function getCategories() {
  const endpoint = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await endpoint.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endpoint = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const productsFromCategoryAndQuery = await endpoint.json();
  return productsFromCategoryAndQuery;
}
