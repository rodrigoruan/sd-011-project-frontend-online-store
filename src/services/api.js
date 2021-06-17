export async function getCategories() {
  const apiMercadoLivre = await fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((data) => data.json())
    .then((data) => data);

  return apiMercadoLivre;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId && query) {
    const searchMercadoLivre = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
      .then((queryInput) => queryInput.json())
      .then((objJson) => objJson);
    return searchMercadoLivre;
  }
  if (categoryId) {
    const searchByCategory = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`)
      .then((queryInput) => queryInput.json())
      .then((objJson) => objJson);
    return searchByCategory;
  }
  const searchByQuery = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
    .then((queryInput) => queryInput.json())
    .then((objJson) => objJson);
  return searchByQuery;
}
