export async function getCategories() {
  // Implemente aqui
}

// export async function getProductsFromCategoryAndQuery(categoryId, query) {
//   const categories = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`).then((queryInput) => queryInput.json()).then((objJson) => objJson);
//   return categories;
// }

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endPoint = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const categories = await endPoint.json();
  return categories;
}
