export async function getCategories() {
  // Implemente aqui
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  try {
    const queryProduct = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}category=${categoryId}`);
    const json = await queryProduct.json();
    return json.results;
  } catch (error) {
    alert(error);
  }
}
