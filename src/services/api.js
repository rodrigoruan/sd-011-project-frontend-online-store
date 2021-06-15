export async function getCategories() {
  const fetchCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  return fetchCategories.json();
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const fetchQuery = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  return fetchQuery.json();
}
