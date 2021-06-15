export async function getCategories() {
  const apiMercadoLivre = await fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((data) => data.json())
    .then((data) => data);

  return apiMercadoLivre;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const searchMercadoLivre = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
    .then((queryInput) => queryInput.json())
    .then((objJson) => objJson);

  return searchMercadoLivre;
}
