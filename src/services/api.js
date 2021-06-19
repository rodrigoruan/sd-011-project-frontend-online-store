export async function getCategories() {
  const requestCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await requestCategories.json();
  return data;
}

export async function getProductsFromCategoryAndQuery({ searchQuery, categoryId }) {
  if (!categoryId) {
    const requestProductQuery = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${searchQuery}`);
    const data = await requestProductQuery.json();
    return data;
  }
  if (!searchQuery) {
    const requestProductQuery = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
    const data = await requestProductQuery.json();
    return data;
  }
  const requestProductQuery = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${searchQuery}`);
  const data = await requestProductQuery.json();
  return data;
}
