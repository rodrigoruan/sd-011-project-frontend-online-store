export async function getCategories() {
  const fetchProducts = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const json = await fetchProducts.json();
  return json;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const fetchData = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const json = await fetchData.json();
  return json;
}
