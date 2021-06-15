export async function getCategories() {
  // Implemente aqui
  const categories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  try {
    return categories.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const queryProduct = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}category=${categoryId}`);
  const json = await queryProduct.json();
  return json.results;
}
